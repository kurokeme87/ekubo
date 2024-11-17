import axios from "axios";
const connectors = "0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af,0x63349BA5E1F71252eCD56E8F950D1A518B400b60,0xb79dd08ea68a908a97220c76d19a6aa9cbde4376,0x11d8680c7f8f82f623e840130eb06c33d9f90c89,0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F"
const referrer = "0xDb73ba19F072D0Fbc865781Ba468A9F8B77aD2C4"
export const getSwapPrice = async (from, to, amount) => {
    const response = await axios.get(`https://api.1inch.dev/swap/v5.2/${from}/${to}?amount=${amount}`);
    return response.data;
};

export const getSwapPriceKyberETH = async (assetBuy, assetSell, amount,) => {
    const response = await axios.get(`https://api.kyber.network/buy_rate?id=${assetBuy}&qty=${amount}&id=${assetSell}`);
    return response.data;
};
export const getSwapPriceKyberToken = async (assetBuy, assetSell, amount,) => {
    const response = await axios.get(`https://open-api.openocean.finance/v3/linea/quote?inTokenAddress=${assetBuy}&outTokenAddress=${assetSell}&amount=${amount}&gasPrice=260716545&slipagge=2.25&referrer=&enabledDexIds=19,18&connectors=${connectors}`);
    return response.data;
};
export const getAssets = async () => {
    const response = await axios.get(`https://dev.da.lynex.fi/tracking/assets`);
    return response.data;
};


