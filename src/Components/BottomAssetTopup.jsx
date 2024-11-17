
const BottomAssetTopup = ({ walletAssets, setOpenBottom, totalAssets, setBottomAsset }) => {
    const popularAssets = ['ETH', 'USDC', 'EKUBO', 'DAI', 'WBTC', 'USDT', 'wstETH', 'LORDS', 'ZEND', 'rETH', 'UNI', 'NSTR', 'CRM', 'CASH']
    const assetsOwned = walletAssets?.filter((asset) => asset.amount > 0)
    const negativeBalanceAssets = totalAssets.filter(asset =>
        popularAssets.includes(asset.symbol)
    );
    console.log(assetsOwned, negativeBalanceAssets)
    return (
        <div className="chakra-modal__content-container font-slussen bg-black/10 backdrop-blur-sm  css-wl0d9u" tabIndex="-1">
            <section className="chakra-modal__content  h-[60%]  css-1b7hcx8" role="dialog" id="chakra-modal-:r9:" tabIndex="-1" aria-modal="true" style={{ opacity: 1, transform: 'none' }} aria-labelledby="chakra-modal--header-:r9:">
                <header className="chakra-modal__header css-12pj8es" id="chakra-modal--header-:r9:">
                    <div className="css-1lekzkb">
                        <h2 className="chakra-heading css-1hv8ws3">Select a token</h2>
                        <button onClick={() => setOpenBottom(false)} type="button" className="chakra-button css-x4ryps">
                            <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-onkibi">
                                <path fill="currentColor" d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="chakra-input__group css-hq04l9" data-group="true">
                        <div className="chakra-input__left-element css-9murld">
                            <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-zgjiqu">
                                <path fill="currentColor" d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path>
                            </svg>
                        </div>
                        <input type="text" placeholder="Search tokens" className="chakra-input css-1b915tz" value="" />
                    </div>
                </header>
                <div className="css-tx6rgg">
                    <div className="css-j7qwjs">
                        <p className="chakra-text css-67471v">Your tokens</p>
                        {assetsOwned?.map((asset, i) => (
                            <div key={i} onClick={() => { setBottomAsset(asset); setOpenBottom(false) }} role="button" className="css-gt9bbm">
                                <img src={asset.imgUrl} className="chakra-image css-1c8x5n5" style={{ border: '2px solid rgb(255, 255, 255)', overflow: 'hidden', borderRadius: '50%' }} />
                                <div className="css-1rr4qq7">
                                    <p className="chakra-text css-1ikjozn font-semibold">{asset.coinId.charAt(0).toUpperCase() + asset.coinId.slice(1)}</p>
                                    <p className="chakra-text css-10971m">{asset.symbol}</p>
                                </div>
                                <div className="css-1iya8gl">
                                    <span className="chakra-text css-j4g3l0" title={asset.amount}>{Number(asset.amount).toFixed(2)}</span>
                                </div>
                            </div>
                        ))}
                        <p className="chakra-text css-67471v">Popular tokens</p>
                        {negativeBalanceAssets?.map((asset, i) => (
                            <div key={i} onClick={() => { setBottomAsset(asset); setOpenBottom(false) }} role="button" className="css-gt9bbm">
                                <img src={asset.logo_url} className="chakra-image css-1c8x5n5" style={{ border: '2px solid rgb(255, 255, 255)', overflow: 'hidden', borderRadius: '50%' }} />
                                <div className="css-1rr4qq7">
                                    <p className="chakra-text font-semibold css-1ikjozn">{asset.name.charAt(0).toUpperCase() + asset.name.slice(1)}</p>
                                    <p className="chakra-text font-normal text-[#878787] css-10971m">{asset.symbol}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default BottomAssetTopup
