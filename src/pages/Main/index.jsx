import React from 'react';

const Main = () => {
    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <a href="/" className="header__logo--inner">
                            <img src="/assets/img/logo.png" alt="logo" className="header__logo" />

                            The Americans NFT
                        </a>

                        <div className="header__social">
                            <a href="https://discord.gg/theamericans" className="header__social--link" target="_blanc">
                                <img src="/assets/img/discord.svg" alt="discord" className="header__social--icon" />
                            </a>

                            <a href="https://twitter.com/TheAmericans_US" className="header__social--link" target="_blanc">
                                <img src="/assets/img/twitter.svg" alt="twitter" className="header__social--icon" />
                            </a>

                            <a href="https://opensea.io/collection/the-americans-nft" className="header__social--link" target="_blanc">
                                <img src="/assets/img/social3.svg" alt="social" className="header__social--icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <section className="content">
                <div className="container">
                    <div className="content__inner">
                        <div className="connect__inner">
                            <img src="/assets/img/connect-inner.svg" alt="img" className="connect__img" />

                            <img src="/assets/img/star1.png" alt="star" className="star star1" />
                            <img src="/assets/img/star2.png" alt="star" className="star star2" />

                            <img src="/assets/img/coin.png" alt="coin" className="connect__coin--img" />

                            <p className="connect__title">
                                You need to connect your Metamask wallet before you can claim your $TheAmericans Tokens
                            </p>

                            <button className="button connect__button red hover">
                                Connect walet
                            </button>
                        </div>

                        <p className="content__address">
                            <span className="red regular">VERIFIED SMART CONTRACT ADDRESS:</span>  0x4Ef3D9EaB34783995bc394d569845585aC805Ef8
                        </p>

                        <div className="content__text--block">
                            <p className="content__text">
                                200,000 tokens (10% of the circulating supply) are claimable by the NFT holders upon the launch of our native token
                            </p>

                            <p className="content__text">
                                To ensure a fair launch the token allocation is equally distributed to each NFT, regardless of the rarity or current floor price.
                            </p>
                        </div>

                        <div className="content__text--block">
                            <img src="/assets/img/diamonds.png" alt="img" className="content__text--img" />

                            <div className="content__text--box">
                                <p className="content__pretext">
                                    *There is no distinction between different NFTs and their rarities for the claim.
                                </p>

                                <p className="content__pretext">
                                    *This is a one-time claim that will identify all eligible NFTs in your wallet, in the order that they appear. There will not be an option to deselect an eligible NFT if it is present in your wallet. If you wish to claim for one of your NFTs but not another, you will need to move them to separate wallets.
                                </p>

                                <p className="content__pretext">
                                    *An NFT  that has claimed its tokens cannot be used later to claim tokens at a later date. All paired NFTs must be claimed together at the same time.
                                </p>

                                <p className="content__pretext">
                                    *The airdrop claim tokens associated with any NFT can only be claimed once. In order to check whether a certain NFT, has claimed its tokens, use the below checker.
                                </p>

                                <p className="content__pretext">
                                    *There will be Ethereum network gas fees incurred to claim $TheAmerican token.
                                </p>
                            </div>

                            <div className="content__wrapper">
                                <p className="content__text--text">
                                    There is a 7-day claim period for $TheAmericans token.
                                </p>

                                <p className="content__text--text">
                                    After this, the unclaimed tokens are sent to the Ecosystem Fund.
                                </p>
                            </div>
                        </div>

                        <div className="content__text--block posr">
                            <img src="/assets/img/star3.png" alt="star" className="star star3" />
                            <img src="/assets/img/star4.png" alt="star" className="star star4" />

                            <h2 className="content__claim--title">
                                NFT CLAIM CHECK
                            </h2>

                            <p className="content__claim--text">
                                Enter the NFT ID to see if an Amercian NFT is still eligible for a one-time claim of $TheAmericans Token
                            </p>

                            <div className="content__claim--inner">
                                <p className="content__claim--pretitle">
                                    The Americans NFT
                                </p>

                                <div className="content__claim--wrapper">
                                    <p className="content__claim--href">
                                        #
                                    </p>

                                    <input type="text" className="input content__claim--input" />

                                    <button className="button content__claim--button hover">
                                        Check
                                    </button>
                                </div>
                            </div>

                            <p className="content__pretext text__claim">
                                *Please note: this checker updates in real-time as tokens are claimed. If you are purchasing The Americans NFT on the secondary market, keep in mind that it&rsquo;s possible for someone to claim immediately after you have checked, making your The Americans NFT no longer eligible. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer__inner">
                        <a href="/" className="footer__logo">
                            <img src="/assets/img/logo.png" alt="logo" className="footer__logo--img" />

                            The Americans NFT
                        </a>

                        <div className="header__social">
                            <a href="https://discord.gg/theamericans" className="header__social--link" target="_blanc">
                                <img src="/assets/img/discord.svg" alt="discord" className="header__social--icon" />
                            </a>

                            <a href="https://twitter.com/TheAmericans_US" className="header__social--link" target="_blanc">
                                <img src="/assets/img/twitter.svg" alt="twitter" className="header__social--icon" />
                            </a>

                            <a href="https://opensea.io/collection/the-americans-nft" className="header__social--link" target="_blanc">
                                <img src="/assets/img/social3.svg" alt="social" className="header__social--icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Main;