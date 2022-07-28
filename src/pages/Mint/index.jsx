import React from 'react';

const Mint = () => {
    const [state, setState] = React.useState("connect");
    const [count, setCount] = React.useState(0);

    const dec = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }

    const inc = () => {
        if(count < 10000){
            setCount(count + 1);
        }
    }

    return(
        <div className="mint">
            <img src="/assets/img/mint-bg.jpg" alt="bg" className="mint__bg" />

            <div className="mint__content">
                <h1 className="mint__title wow animate__animated animate__fadeIn">
                    Mint &amp; Get
                </h1>

                <div className="mint__points">
                    <p className="mint__point wow animate__animated animate__fadeIn">
                        1 President NFT
                    </p>

                    <p className="mint__point wow animate__animated animate__fadeIn" data-wow-delay="0.1s">
                        50% of royalties claimable in ETH
                    </p>

                    <p className="mint__point wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
                        500,000 tokens collectively claimable
                    </p>

                    <p className="mint__point wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
                        Fractionalized ownership of metaverse land
                    </p>

                    <p className="mint__point wow animate__animated animate__fadeIn" data-wow-delay="0.4s">
                        Presidents will earn 2X in P2E games
                    </p>
                </div>

                {(state === "mint" || state === "disabled") && <>
                    <div className="mint__mint">
                        <p className="mint__mint--text">
                            Minted
                        </p>

                        <p className="mint__mint--text">
                            0/10000
                        </p>
                    </div>

                    <div className="mint__inc--inner">
                        <p className="mint__inc" onClick={dec}>
                            -
                        </p>

                        <div className="mint__inc--value">
                            {count}
                        </div>

                        <p className="mint__inc" onClick={inc}>
                            +
                        </p>
                    </div>
                </>}

                {state === "connect" ? <button className="button mint__button" onClick={() => setState("mint")}>
                    <span className="blue">Connect</span> wallet
                </button>
                : state === "mint" ? <button className="button mint__button" onClick={() => setState("disabled")}>
                    Mint now
                </button>
                : <button className="button mint__button disabled" onClick={() => setState("connect")}>
                    Not qualified
                </button>}

                <p className="mint__text wow animate__animated animate__fadeIn">
                    0.019 ETH <span className="yellow">To claim</span>
                </p>

                <p className="mint__subtext wow animate__animated animate__fadeIn">
                    1 MINT ALLOWED PER NFT
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