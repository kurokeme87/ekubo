import axios from "axios"
export const getBalance = async (address) => {
    try {
        const options = {
            headers: {
                "X-API-KEY": "yy1AIepW5yKw+G+EvX4rtcxTmwV7P+b0y1NwzJx35WU="
            }
        }
        const balance = await axios.get(`https://openapiv1.coinstats.app/wallet/balance?address=${address}&connectionId=starknet-wallet`, options)
        return balance
    } catch (error) {
        console.log(error)
    }
}
export const getTokenInfo = async () => {
    const totalTokens = await axios.get('https://mainnet-api.ekubo.org/tokens')
    return totalTokens
}   
