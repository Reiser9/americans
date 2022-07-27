import React from 'react';

const Mint = () => {
    return(
        <div className="mint">
            <img src="/assets/img/mint-bg.jpg" alt="bg" className="mint__bg" />

            <div className="mint__content">
                <h1 className="mint__title wow animate__animated animate__fadeIn">
                    Mint &amp; Get Free
                </h1>

                <div className="mint__points">
                    <p className="mint__point wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                        1 President
                    </p>

                    <p className="mint__point wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
                        <span className="yellow">1 FREE</span> CELEBRITY
                    </p>

                    <p className="mint__point wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
                        Fractionalized ownership of metaverse land
                    </p>

                    <p className="mint__point wow animate__animated animate__fadeIn" data-wow-delay="0.4s">
                        Presidents earn 2x in p2e game
                    </p>

                    <p className="mint__point wow animate__animated animate__fadeIn" data-wow-delay="0.5s">
                        50% of royalties go to holders
                    </p>
                </div>

                <button className="button mint__button">
                    <span className="blue">Connect</span> wallet
                </button>

                <p className="mint__text wow animate__animated animate__fadeIn">
                    0.019 ETH <span className="yellow">To claim</span>
                </p>

                <p className="mint__subtext wow animate__animated animate__fadeIn">
                    3 mints allowed per NFT
                </p>

                <div className="mint__img--inner wow animate__animated animate__fadeIn">
                    <img src="/assets/img/partner1.png" alt="partner" className="mint__img" />
                    <img src="/assets/img/partner2.png" alt="partner" className="mint__img" />
                    <img src="/assets/img/partner3.png" alt="partner" className="mint__img" />
                    <img src="/assets/img/partner4.png" alt="partner" className="mint__img" />
                    <img src="/assets/img/partner5.png" alt="partner" className="mint__img" />
                    <img src="/assets/img/partner6.png" alt="partner" className="mint__img" />
                    <img src="/assets/img/partner7.png" alt="partner" className="mint__img" />
                    <img src="/assets/img/partner8.png" alt="partner" className="mint__img" />
                    <img src="/assets/img/partner9.png" alt="partner" className="mint__img" />
                    <img src="/assets/img/partner10.png" alt="partner" className="mint__img" />
                </div>
            </div>
        </div>
    )
}

export default Mint;