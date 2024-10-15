import React from "react";
import Navbar from "../../Components/Navbar";
import './Governance.css'
const Governance = () => {
    return (
        <div className="chakra-container css-1a6mv67">
            <div className="css-1qnsqca">
                <h2 className="chakra-heading font-slussenExpanded  css-50m4dq">Proposals</h2>
                <div
                    role="group"
                    className="chakra-button__group css-1ind3v2"
                    data-orientation="horizontal"
                >
                    <a
                        className="chakra-button font-slussen css-o8mhz8"
                        href="/governance/simple-delegate"
                    >
                        Delegate
                    </a>
                    <a
                        className="chakra-button font-slussen css-46cfkt"
                        href="/governance/create-proposal"
                    >
                        Create proposal
                    </a>
                </div>
            </div>
            <hr aria-orientation="horizontal" className="chakra-divider css-6pmtuj" />
            <div className="chakra-stack css-1153lrp">
                <div className="chakra-card css-scnhj">
                    <div className="chakra-card__header css-19vz6j1">
                        <div className="css-0">
                            <h2 className="chakra-heading font-slussenExpanded css-10ja9vs">
                                DAO owned liquidity for EKUBO oracle pools
                            </h2>
                            <span className="chakra-badge css-122rhfn">
                                Executed 9/10/2024, 11:29:11 AM
                            </span>
                        </div>
                        <p className="chakra-text css-d5rmvm">
                            By
                            <a
                                target="_blank"
                                rel="noopener noreferer"
                                className="chakra-link css-spn4bz"
                                href="https://voyager.online/contract/0x3e47bf82ff18b2d01086e1b0f17c0f720a8c555cba40d8c57242599996d31e2"
                            >
                                VinhVD
                            </a>
                        </p>
                    </div>
                    <hr
                        aria-orientation="horizontal"
                        className="chakra-divider css-svjswr"
                    />
                    <div className="chakra-card__body css-1idwstw">
                        <p className="chakra-text css-ul7620">
                            This proposal allocates $190k from the DAO treasury to provide
                            liquidity for EKUBO oracle pools, enhancing the reliability,
                            accessibility, and free availability of on-chain EKUBO price
                            oracles. By supporting these oracles, the DAO aims to facilitate
                            the integration of EKUBO into projects across Starknet, offering
                            dependable and cost-free price data.
                        </p>
                        <p className="chakra-text css-ul7620">
                            Fund allocation to create robust oracles for key pairs:
                        </p>
                        <ul role="list" className="css-tu0njr">
                            <li className="css-0">
                                $50k each to EKUBO/{`{ETH, USDC, STRK}`}
                            </li>
                            <li className="css-0">
                                $10k each to EKUBO/{`{USDT, wstETH, WBTC, DAI}`}.
                            </li>
                        </ul>
                        <p className="chakra-text css-ul7620">
                            Totaling $190k, this allocation ensures strong oracles for ETH,
                            USDC, and STRK, with adequate oracles for other pairs. The DAO
                            will allocate:
                        </p>
                        <ul role="list" className="css-tu0njr">
                            <li className="css-0">54,000 EKUBO (~$105k)</li>
                            <li className="css-0">45,000 USDC (~$45k)</li>
                            <li className="css-0">12 ETH (~$30k)</li>
                            <li className="css-0">80,000 STRK (~$30k).</li>
                        </ul>
                        <p className="chakra-text css-ul7620">
                            These amounts are slightly increased to hedge against price
                            fluctuations. Ekubo Inc. will manage and deploy these funds into
                            the oracle pools. After deployment, liquidity positions and any
                            remaining funds will be returned to the DAO.
                        </p>
                    </div>
                    <hr
                        aria-orientation="horizontal"
                        className="chakra-divider css-1xl3n4o"
                    />
                    <div className="css-wv05um">
                        <div className="css-13xhnxm">
                            <h2 className="chakra-heading font-slussenExpanded css-3v8zav">Calls</h2>
                        </div>
                        <ol role="list" className="css-rp5kfh">
                            <li className="css-1eyj61a">
                                Transfer
                                <span className="chakra-text css-zfx5r2" title="54,000">
                                    54,000
                                </span>
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://voyager.online/token/0x075afe6402ad5a5c20dd25e10ec3b3986acaa647b77e4ae24b0cbc9a54a27a87"
                                >
                                    EKUBO
                                </a>
                                to
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://voyager.online/contract/0x7be094d936b49bd8b41e62e27958f2ee9f65379db88e2bbd8cbbbdb2799acb0"
                                >
                                    Ekubo, Inc.
                                </a>
                            </li>
                            <li className="css-1eyj61a">
                                Transfer
                                <span className="chakra-text css-zfx5r2" title="80,000">
                                    80,000
                                </span>
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://voyager.online/token/0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d"
                                >
                                    STRK
                                </a>
                                to
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://voyager.online/contract/0x7be094d936b49bd8b41e62e27958f2ee9f65379db88e2bbd8cbbbdb2799acb0"
                                >
                                    Ekubo, Inc.
                                </a>
                            </li>
                            <li className="css-1eyj61a">
                                Transfer
                                <span className="chakra-text css-zfx5r2" title="12">
                                    12
                                </span>
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://voyager.online/token/0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"
                                >
                                    ETH
                                </a>
                                to
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://voyager.online/contract/0x7be094d936b49bd8b41e62e27958f2ee9f65379db88e2bbd8cbbbdb2799acb0"
                                >
                                    Ekubo, Inc.
                                </a>
                            </li>
                            <li className="css-1eyj61a">
                                Transfer
                                <span className="chakra-text css-zfx5r2" title="45,000">
                                    45,000
                                </span>
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://voyager.online/token/0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8"
                                >
                                    USDC
                                </a>
                                to
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://voyager.online/contract/0x7be094d936b49bd8b41e62e27958f2ee9f65379db88e2bbd8cbbbdb2799acb0"
                                >
                                    Ekubo, Inc.
                                </a>
                            </li>
                        </ol>
                    </div>
                    <hr
                        aria-orientation="horizontal"
                        className="chakra-divider css-svjswr"
                    />
                    <div className="chakra-card__footer css-1sw7h65">
                        <div className="css-0">
                            <div className="css-1k9efnl">
                                <div className="css-0">
                                    <div className="css-0">
                                        <span className="chakra-text css-zfx5r2" title="3,886,180">
                                            3,886,180
                                        </span>
                                        in favor
                                    </div>
                                    <div className="css-0">
                                        <span className="chakra-text css-zfx5r2" title="500.065">
                                            500.065
                                        </span>
                                        against
                                    </div>
                                </div>
                                <div className="css-0">
                                    <svg
                                        viewBox="0 0 14 14"
                                        focusable="false"
                                        className="chakra-icon css-1089arj"
                                        id="popover-trigger-:rc:"
                                        aria-haspopup="dialog"
                                        aria-expanded="false"
                                        aria-controls="popover-content-:rc:"
                                    >
                                        <g fill="currentColor">
                                            <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chakra-card css-scnhj">
                    <div className="chakra-card__header css-19vz6j1">
                        <div className="css-0">
                            <h2 className="chakra-heading font-slussenExpanded css-10ja9vs">
                                Transfer ownership of the core contract to the buyback contract
                            </h2>
                            <span className="chakra-badge css-122rhfn">
                                Executed 9/9/2024, 5:37:49 PM
                            </span>
                        </div>
                        <p className="chakra-text css-d5rmvm">
                            By
                            <a
                                target="_blank"
                                rel="noopener noreferer"
                                className="chakra-link css-spn4bz"
                                href="https://voyager.online/contract/0x365150cb6b6dd1b0a558ad9293a766b2ee7d0f35c3013a864f63a82e78d3464"
                            >
                                Herbaceous
                            </a>
                        </p>
                    </div>
                    <hr
                        aria-orientation="horizontal"
                        className="chakra-divider css-svjswr"
                    />
                    <div className="chakra-card__body css-1idwstw">
                        <h2 className="chakra-heading font-slussenExpanded css-1jpoxap">Abstract</h2>
                        <p className="chakra-text css-ul7620">
                            Currently all the revenue generated by the protocol is collected
                            in the core contract. Only the owner of the core contract can
                            withdraw the revenue which is a blocker for automatic revenue
                            distribution.
                        </p>
                        <p className="chakra-text css-ul7620">
                            This proposal changes the owner of the core contract to a new
                            buyback contract. The buyback contract is a simple proxy owner of
                            the core contract which enables anyone to trigger buybacks and in
                            the future revenue distribution. A buyback consists of withdrawing
                            revenue from the core contract and using it to buy the configured
                            token(s). As the buyback contract is also owned by the DAO the
                            proceeds of any buybacks will also be owned by the DAO.
                        </p>
                    </div>
                    <hr
                        aria-orientation="horizontal"
                        className="chakra-divider css-1xl3n4o"
                    />
                    <div className="css-wv05um">
                        <div className="css-13xhnxm">
                            <h2 className="chakra-heading font-slussenExpanded css-3v8zav">Calls</h2>
                        </div>
                        <ol role="list" className="css-rp5kfh">
                            <li className="css-1eyj61a">
                                <code className="chakra-code css-ua85hz">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferer"
                                        className="chakra-link css-spn4bz"
                                        href="https://voyager.online/contract/0x5dd3d2f4429af886cd1a3b08289dbcea99a294197e9eb43b0e0325b4b"
                                    >
                                        Ekubo Core
                                    </a>
                                    #transfer_ownership(0xf2e9a400ba65b13255ef2792612b45d5a20a7a7cf211ffb3f485445022ef72)
                                </code>
                            </li>
                        </ol>
                    </div>
                    <hr
                        aria-orientation="horizontal"
                        className="chakra-divider css-svjswr"
                    />
                    <div className="chakra-card__footer css-1sw7h65">
                        <div className="css-0">
                            <div className="css-1k9efnl">
                                <div className="css-0">
                                    <div className="css-0">
                                        <span className="chakra-text css-zfx5r2" title="3,763,500">
                                            3,763,500
                                        </span>
                                        in favor
                                    </div>
                                    <div className="css-0">
                                        <span className="chakra-text css-zfx5r2" title="500.065">
                                            500.065
                                        </span>
                                        against
                                    </div>
                                </div>
                                <div className="css-0">
                                    <svg
                                        viewBox="0 0 14 14"
                                        focusable="false"
                                        className="chakra-icon css-1089arj"
                                        id="popover-trigger-:rg:"
                                        aria-haspopup="dialog"
                                        aria-expanded="false"
                                        aria-controls="popover-content-:rg:"
                                    >
                                        <g fill="currentColor">
                                            <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chakra-card css-scnhj">
                    <div className="chakra-card__header css-19vz6j1">
                        <div className="css-0">
                            <h2 className="chakra-heading font-slussenExpanded css-10ja9vs">
                                Upgrade Core Contracts
                            </h2>
                            <span className="chakra-badge css-122rhfn">
                                Executed 9/4/2024, 1:09:54 PM
                            </span>
                        </div>
                        <p className="chakra-text css-d5rmvm">
                            By
                            <a
                                target="_blank"
                                rel="noopener noreferer"
                                className="chakra-link css-spn4bz"
                                href="https://voyager.online/contract/0x7be094d936b49bd8b41e62e27958f2ee9f65379db88e2bbd8cbbbdb2799acb0"
                            >
                                Ekubo, Inc.
                            </a>
                        </p>
                    </div>
                    <hr
                        aria-orientation="horizontal"
                        className="chakra-divider css-svjswr"
                    />
                    <div className="chakra-card__body css-1idwstw">
                        <p className="chakra-text css-ul7620">
                            Upgrades core contracts to Ekubo v3.1.0. This upgrade contains the
                            following changes:
                        </p>
                        <ul role="list" className="css-tu0njr">
                            <li className="css-0">
                                Upgrade the compiler version to Cairo v2.8.0
                            </li>
                            <li className="css-0">
                                Adds the
                                <code className="chakra-code css-ua85hz">Core#forward</code>
                                method as described
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://x.com/sendmoodz/status/1823373309658153217"
                                >
                                    here
                                    <svg
                                        viewBox="0 0 24 24"
                                        focusable="false"
                                        className="chakra-icon css-sv5w6l"
                                    >
                                        <g
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                        >
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <path d="M15 3h6v6"></path>
                                            <path d="M10 14L21 3"></path>
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li className="css-0">
                                Removes methods from the TWAMM extension for directly placing
                                orders in favor of the use of the new
                                <code className="chakra-code css-ua85hz">Core#forward</code>
                                function
                            </li>
                            <li className="css-0">
                                Adds more convenient methods to interact with TWAMM orders to
                                the Positions contract
                            </li>
                        </ul>
                    </div>
                    <hr
                        aria-orientation="horizontal"
                        className="chakra-divider css-1xl3n4o"
                    />
                    <div className="css-wv05um">
                        <div className="css-13xhnxm">
                            <h2 className="chakra-heading font-slussenExpanded css-3v8zav">Calls</h2>
                        </div>
                        <ol role="list" className="css-rp5kfh">
                            <li className="css-1eyj61a">
                                <code className="chakra-code css-ua85hz">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferer"
                                        className="chakra-link css-spn4bz"
                                        href="https://voyager.online/contract/0x5dd3d2f4429af886cd1a3b08289dbcea99a294197e9eb43b0e0325b4b"
                                    >
                                        Ekubo Core
                                    </a>
                                    #replace_className_hash(0x30e64ecb769ff832478ed5ce52fc5b81ffc7d32dd36cd9b8937135683339a2c)
                                </code>
                            </li>
                            <li className="css-1eyj61a">
                                <code className="chakra-code css-ua85hz">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferer"
                                        className="chakra-link css-spn4bz"
                                        href="https://voyager.online/contract/0x2e0af29598b407c8716b17f6d2795eca1b471413fa03fb145a5e33722184067"
                                    >
                                        Positions
                                    </a>
                                    #replace_className_hash(0x6192bd5cfffdcb0cc27d550075a6410a733df4be20fcfb32b834abf011d3fc8)
                                </code>
                            </li>
                            <li className="css-1eyj61a">
                                <code className="chakra-code css-ua85hz">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferer"
                                        className="chakra-link css-spn4bz"
                                        href="https://voyager.online/contract/0x2e0af29598b407c8716b17f6d2795eca1b471413fa03fb145a5e33722184067"
                                    >
                                        Positions
                                    </a>
                                    #upgrade_nft(0x50d220a0f76ed0e1ff2df6b433190c9cc360ccc08c4e57d6037c7c2dfd62a91)
                                </code>
                            </li>
                            <li className="css-1eyj61a">
                                <code className="chakra-code css-ua85hz">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferer"
                                        className="chakra-link css-spn4bz"
                                        href="https://voyager.online/contract/0x43e4f09c32d13d43a880e85f69f7de93ceda62d6cf2581a582c6db635548fdc"
                                    >
                                        TWAMM
                                    </a>
                                    #replace_className_hash(0x7a146055644f1f7c1103ba9ba53b94aeada50ebfdb1b763e0fb2e5de4b08b8d)
                                </code>
                            </li>
                        </ol>
                    </div>
                    <hr
                        aria-orientation="horizontal"
                        className="chakra-divider css-svjswr"
                    />
                    <div className="chakra-card__footer css-1sw7h65">
                        <div className="css-0">
                            <div className="css-1k9efnl">
                                <div className="css-0">
                                    <div className="css-0">
                                        <span className="chakra-text css-zfx5r2" title="3,940,940">
                                            3,940,940
                                        </span>
                                        in favor
                                    </div>
                                    <div className="css-0">
                                        <span className="chakra-text css-zfx5r2" title="0.0">
                                            0.0
                                        </span>
                                        against
                                    </div>
                                </div>
                                <div className="css-0">
                                    <svg
                                        viewBox="0 0 14 14"
                                        focusable="false"
                                        className="chakra-icon css-1089arj"
                                        id="popover-trigger-:rk:"
                                        aria-haspopup="dialog"
                                        aria-expanded="false"
                                        aria-controls="popover-content-:rk:"
                                    >
                                        <g fill="currentColor">
                                            <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chakra-card css-scnhj">
                    <div className="chakra-card__header css-19vz6j1">
                        <div className="css-0">
                            <h2 className="chakra-heading font-slussenExpanded css-10ja9vs">
                                Withdraw all proceeds from active TWAMM orders
                            </h2>
                            <span className="chakra-badge css-122rhfn">
                                Executed 8/7/2024, 7:34:30 PM
                            </span>
                        </div>
                        <p className="chakra-text css-d5rmvm">
                            By
                            <a
                                target="_blank"
                                rel="noopener noreferer"
                                className="chakra-link css-spn4bz"
                                href="https://voyager.online/contract/0xb00030a5fd678f34469e8ab120d66a4fa1fc3c13c21a690deface218b22ab2"
                            >
                                underethsea
                            </a>
                        </p>
                    </div>
                    <hr
                        aria-orientation="horizontal"
                        className="chakra-divider css-svjswr"
                    />
                    <div className="chakra-card__body css-1idwstw">
                        <p className="chakra-text css-ul7620">
                            To simplify accounting this proposal will withdraw all the
                            proceeds to the treasury. The calls also burn the TWAMM positions
                        </p>
                    </div>
                    <hr
                        aria-orientation="horizontal"
                        className="chakra-divider css-1xl3n4o"
                    />
                    <div className="css-wv05um">
                        <div className="css-13xhnxm">
                            <h2 className="chakra-heading font-slussenExpanded css-3v8zav">Calls</h2>
                        </div>
                        <ol role="list" className="css-rp5kfh">
                            <li className="css-1eyj61a">
                                <code className="chakra-code css-ua85hz">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferer"
                                        className="chakra-link css-spn4bz"
                                        href="https://voyager.online/contract/0x2e0af29598b407c8716b17f6d2795eca1b471413fa03fb145a5e33722184067"
                                    >
                                        Positions
                                    </a>
                                    #withdraw_proceeds_from_sale(0x9e550,
                                    0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d,
                                    0x53c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8,
                                    0xc49ba5e353f7d00000000000000000, 0x66960000, 0x66b00000)
                                </code>
                            </li>
                            <li className="css-1eyj61a">
                                <code className="chakra-code css-ua85hz">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferer"
                                        className="chakra-link css-spn4bz"
                                        href="https://voyager.online/contract/0x2e0af29598b407c8716b17f6d2795eca1b471413fa03fb145a5e33722184067"
                                    >
                                        Positions
                                    </a>
                                    #withdraw_proceeds_from_sale(0x9e54f,
                                    0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d,
                                    0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7,
                                    0x20c49ba5e353f80000000000000000, 0x66960000, 0x66b00000)
                                </code>
                            </li>
                            <li className="css-1eyj61a">
                                <code className="chakra-code css-ua85hz">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferer"
                                        className="chakra-link css-spn4bz"
                                        href="https://voyager.online/contract/0x2e0af29598b407c8716b17f6d2795eca1b471413fa03fb145a5e33722184067"
                                    >
                                        Positions
                                    </a>
                                    #withdraw_proceeds_from_sale(0x91055,
                                    0x75afe6402ad5a5c20dd25e10ec3b3986acaa647b77e4ae24b0cbc9a54a27a87,
                                    0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7,
                                    0xcccccccccccccccccccccccccccccca, 0x66500000, 0x66a00000)
                                </code>
                            </li>
                            <li className="css-1eyj61a">
                                <code className="chakra-code css-ua85hz">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferer"
                                        className="chakra-link css-spn4bz"
                                        href="https://voyager.online/contract/0x2e0af29598b407c8716b17f6d2795eca1b471413fa03fb145a5e33722184067"
                                    >
                                        Positions
                                    </a>
                                    #withdraw_proceeds_from_sale(0x91056,
                                    0x75afe6402ad5a5c20dd25e10ec3b3986acaa647b77e4ae24b0cbc9a54a27a87,
                                    0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d,
                                    0xcccccccccccccccccccccccccccccca, 0x66500000, 0x66a00000)
                                </code>
                            </li>
                            <li className="css-1eyj61a">
                                <code className="chakra-code css-ua85hz">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferer"
                                        className="chakra-link css-spn4bz"
                                        href="https://voyager.online/contract/0x2e0af29598b407c8716b17f6d2795eca1b471413fa03fb145a5e33722184067"
                                    >
                                        Positions
                                    </a>
                                    #withdraw_proceeds_from_sale(0x91057,
                                    0x75afe6402ad5a5c20dd25e10ec3b3986acaa647b77e4ae24b0cbc9a54a27a87,
                                    0x53c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8,
                                    0xcccccccccccccccccccccccccccccca, 0x66500000, 0x66a00000)
                                </code>
                            </li>
                        </ol>
                        <div className="css-gmuwbf">
                            <button type="button" className="chakra-button font-slussen css-2jd4x9">
                                Show all
                            </button>
                        </div>
                    </div>
                    <hr
                        aria-orientation="horizontal"
                        className="chakra-divider css-svjswr"
                    />
                    <div className="chakra-card__footer css-1sw7h65">
                        <div className="css-0">
                            <div className="css-1k9efnl">
                                <div className="css-0">
                                    <div className="css-0">
                                        <span className="chakra-text css-zfx5r2" title="3,953,010">
                                            3,953,010
                                        </span>
                                        in favor
                                    </div>
                                    <div className="css-0">
                                        <span className="chakra-text css-zfx5r2" title="0.0">
                                            0.0
                                        </span>
                                        against
                                    </div>
                                </div>
                                <div className="css-0">
                                    <svg
                                        viewBox="0 0 14 14"
                                        focusable="false"
                                        className="chakra-icon css-1089arj"
                                        id="popover-trigger-:ri:"
                                        aria-haspopup="dialog"
                                        aria-expanded="false"
                                        aria-controls="popover-content-:ri:"
                                    >
                                        <g fill="currentColor">
                                            <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chakra-card css-scnhj">
                    <div className="chakra-card__header css-19vz6j1">
                        <div className="css-0">
                            <h2 className="chakra-heading font-slussenExpanded css-10ja9vs">
                                Confirm Ekubo Inc Role in DAO
                            </h2>
                            <span className="chakra-badge css-122rhfn">
                                Executed 7/28/2024, 2:07:22 PM
                            </span>
                        </div>
                        <p className="chakra-text css-d5rmvm">
                            By
                            <a
                                target="_blank"
                                rel="noopener noreferer"
                                className="chakra-link css-spn4bz"
                                href="https://voyager.online/contract/0x7be094d936b49bd8b41e62e27958f2ee9f65379db88e2bbd8cbbbdb2799acb0"
                            >
                                Ekubo, Inc.
                            </a>
                        </p>
                    </div>
                    <hr

                        aria-orientation="horizontal"
                        className="chakra-divider css-svjswr"
                    />
                    <div className="chakra-card__body css-1idwstw">
                        <p className="chakra-text css-ul7620">
                            This proposal funds Ekubo, Inc. for an amount of $1.5m, securing
                            and funding its services to the DAO over the next 2 years, as
                            described in the
                            <a
                                target="_blank"
                                rel="noopener noreferer"
                                className="chakra-link css-spn4bz"
                                href="https://hackmd.io/@moodysalem/B1gFo3CDR"
                            >
                                Ekubo, Inc. vision doc
                                <svg
                                    viewBox="0 0 24 24"
                                    focusable="false"
                                    className="chakra-icon css-sv5w6l"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </g>
                                </svg>
                            </a>
                            .
                        </p>
                        <p className="chakra-text css-ul7620">
                            Discussion in Discord
                            <a
                                target="_blank"
                                rel="noopener noreferer"
                                className="chakra-link css-spn4bz"
                                href="https://discord.com/channels/1119209474369003600/1263873750026420317"
                            >
                                here
                                <svg
                                    viewBox="0 0 24 24"
                                    focusable="false"
                                    className="chakra-icon css-sv5w6l"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </g>
                                </svg>
                            </a>
                        </p>
                        <h2 className="chakra-heading font-slussenExpanded css-1jpoxap">
                            Keeping the DAO treasury balanced
                        </h2>
                        <p className="chakra-text css-ul7620">
                            With the assumptions that the catalyst grant vested over 4 years
                            has a 75% discount over the current price, and the current DCA
                            sale of STRK a ~15% volatility discount, the DAO has approximately
                            the following assets:
                        </p>
                        <ul role="list" className="css-tu0njr">
                            <li className="css-0">
                                <code className="chakra-code css-ua85hz">
                                    (329.673 + 63.795) ETH * $3500/ETH + 1.03e6 STRK * $0.5/STRK =
                                    $1,377,138 + $515,000 = $1,892,138 ~= $1.9m in ETH
                                </code>
                            </li>
                            <li className="css-0">
                                <code className="chakra-code css-ua85hz">
                                    (1,156,830 + 221,694) USDC * $1/USDC + 1.03e6 STRK * $0.5/STRK
                                    = $1,378,524 + $515,000 = $1,893,524 ~= $1.9m in USDC
                                </code>
                            </li>
                            <li className="css-0">
                                <code className="chakra-code css-ua85hz">
                                    1,466,630 STRK * $0.6/STRK + (3e6 STRK vested over 48 months *
                                    $0.15/STRK) = $1,329,600 ~= $1.3m in STRK
                                </code>
                            </li>
                        </ul>
                        <p className="chakra-text css-ul7620">
                            In order to keep the ratio of assets 1:1:1 split between STRK,
                            ETH, and USDC, we broke it down as following, which accounts for
                            the last 7 days realized volatility of STRK (
                            <a
                                target="_blank"
                                rel="noopener noreferer"
                                className="chakra-link css-spn4bz"
                                href="https://mainnet-api.ekubo.org/volatility/strk/usdc?numDays=7&amp;fromDate=2024-07-21T00:00:00"
                            >
                                11%
                                <svg
                                    viewBox="0 0 24 24"
                                    focusable="false"
                                    className="chakra-icon css-sv5w6l"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </g>
                                </svg>
                            </a>
                            ) and ETH (
                            <a
                                target="_blank"
                                rel="noopener noreferer"
                                className="chakra-link css-spn4bz"
                                href="https://mainnet-api.ekubo.org/volatility/eth/usdc?numDays=7&amp;fromDate=2024-07-21T00:00:00"
                            >
                                5%
                                <svg
                                    viewBox="0 0 24 24"
                                    focusable="false"
                                    className="chakra-icon css-sv5w6l"
                                >
                                    <g
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                    >
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                        <path d="M15 3h6v6"></path>
                                        <path d="M10 14L21 3"></path>
                                    </g>
                                </svg>
                            </a>
                            ) as well as liquidity of each asset.
                        </p>
                        <ul role="list" className="css-tu0njr">
                            <li className="css-0">$630k of ETH ~= 180 ETH</li>
                            <li className="css-0">$600k of USDC ~= 600k USDC</li>
                            <li className="css-0">$333k of STRK ~= 560k STRK</li>
                        </ul>
                    </div>
                    <hr
                        aria-orientation="horizontal"
                        className="chakra-divider css-1xl3n4o"
                    />
                    <div className="css-wv05um">
                        <div className="css-13xhnxm">
                            <h2 className="chakra-heading font-slussenExpanded css-3v8zav">Calls</h2>
                        </div>
                        <ol role="list" className="css-rp5kfh">
                            <li className="css-1eyj61a">
                                Transfer
                                <span className="chakra-text css-zfx5r2" title="180">
                                    180
                                </span>
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://voyager.online/token/0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7"
                                >
                                    ETH
                                </a>
                                to
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://voyager.online/contract/0x7be094d936b49bd8b41e62e27958f2ee9f65379db88e2bbd8cbbbdb2799acb0"
                                >
                                    Ekubo, Inc.
                                </a>
                            </li>
                            <li className="css-1eyj61a">
                                Transfer
                                <span className="chakra-text css-zfx5r2" title="560,000">
                                    560,000
                                </span>
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://voyager.online/token/0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d"
                                >
                                    STRK
                                </a>
                                to
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://voyager.online/contract/0x7be094d936b49bd8b41e62e27958f2ee9f65379db88e2bbd8cbbbdb2799acb0"
                                >
                                    Ekubo, Inc.
                                </a>
                            </li>
                            <li className="css-1eyj61a">
                                Transfer
                                <span className="chakra-text css-zfx5r2" title="600,000">
                                    600,000
                                </span>
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://voyager.online/token/0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8"
                                >
                                    USDC
                                </a>
                                to
                                <a
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="chakra-link css-spn4bz"
                                    href="https://voyager.online/contract/0x7be094d936b49bd8b41e62e27958f2ee9f65379db88e2bbd8cbbbdb2799acb0"
                                >
                                    Ekubo, Inc.
                                </a>
                            </li>
                        </ol>
                    </div>
                    <hr
                        aria-orientation="horizontal"
                        className="chakra-divider css-svjswr"
                    />
                    <div className="chakra-card__footer css-1sw7h65">
                        <div className="css-0">
                            <div className="css-1k9efnl">
                                <div className="css-0">
                                    <div className="css-0">
                                        <span className="chakra-text css-zfx5r2" title="4,435,750">
                                            4,435,750
                                        </span>
                                        in favor
                                    </div>
                                    <div className="css-0">
                                        <span className="chakra-text css-zfx5r2" title="102,008">
                                            102,008
                                        </span>
                                        against
                                    </div>
                                </div>
                                <div className="css-0">
                                    <svg
                                        viewBox="0 0 14 14"
                                        focusable="false"
                                        className="chakra-icon css-1089arj"
                                        id="popover-trigger-:re:"
                                        aria-haspopup="dialog"
                                        aria-expanded="false"
                                        aria-controls="popover-content-:re:"
                                    >
                                        <g fill="currentColor">
                                            <polygon points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"></polygon>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="css-13rl60n">
                <div className="css-gg4vpm">
                    <div
                        role="group"
                        className="chakra-button__group css-1ayoy1w"
                        data-attached=""
                        data-orientation="horizontal"
                    >
                        <button
                            type="button"
                            className="chakra-button font-slussen css-1n6eqmp"
                            aria-label="First page"
                            disabled=""
                        >
                            <svg
                                viewBox="0 0 24 24"
                                focusable="false"
                                className="chakra-icon css-onkibi"
                                aria-hidden="true"
                            >
                                <g fill="currentColor">
                                    <path d="M10.416,12a2.643,2.643,0,0,1,.775-1.875L20.732.584a1.768,1.768,0,0,1,2.5,2.5l-8.739,8.739a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5l-9.541-9.541A2.643,2.643,0,0,1,10.416,12Z"></path>
                                    <path d="M.25,12a2.643,2.643,0,0,1,.775-1.875L10.566.584a1.768,1.768,0,0,1,2.5,2.5L4.327,11.823a.25.25,0,0,0,0,.354l8.739,8.739a1.768,1.768,0,0,1-2.5,2.5L1.025,13.875A2.643,2.643,0,0,1,.25,12Z"></path>
                                </g>
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="chakra-button font-slussen css-1n6eqmp"
                            aria-label="Previous page"
                            disabled=""
                        >
                            <svg
                                viewBox="0 0 24 24"
                                focusable="false"
                                className="chakra-icon css-onkibi"
                                aria-hidden="true"
                            >
                                <path
                                    fill="currentColor"
                                    d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
                                ></path>
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="chakra-button font-slussen css-1n6eqmp"
                            aria-label="Go to page"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                focusable="false"
                                className="chakra-icon css-onkibi"
                                aria-hidden="true"
                            >
                                <path
                                    fill="currentColor"
                                    d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"
                                ></path>
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="chakra-button font-slussen css-1n6eqmp"
                            aria-label="Next page"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                focusable="false"
                                className="chakra-icon css-onkibi"
                                aria-hidden="true"
                            >
                                <path
                                    fill="currentColor"
                                    d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                                ></path>
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="chakra-button font-slussen css-1n6eqmp"
                            aria-label="Last page"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                focusable="false"
                                className="chakra-icon css-onkibi"
                                aria-hidden="true"
                            >
                                <g fill="currentColor">
                                    <path d="M13.584,12a2.643,2.643,0,0,1-.775,1.875L3.268,23.416a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L.768,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,13.584,12Z"></path>
                                    <path d="M23.75,12a2.643,2.643,0,0,1-.775,1.875l-9.541,9.541a1.768,1.768,0,0,1-2.5-2.5l8.739-8.739a.25.25,0,0,0,0-.354L10.934,3.084a1.768,1.768,0,0,1,2.5-2.5l9.541,9.541A2.643,2.643,0,0,1,23.75,12Z"></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div className="chakra-select__wrapper css-w3jlfp">
                        <select className="chakra-select css-16i4v3z">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                        <div className="chakra-select__icon-wrapper css-iohxn1">
                            <svg
                                viewBox="0 0 24 24"
                                role="presentation"
                                className="chakra-select__icon"
                                focusable="false"
                                aria-hidden="true"
                                style={{ width: '1em', height: '1em', color: 'currentColor' }}
                            >
                                <path
                                    fill="currentColor"
                                    d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Governance;
