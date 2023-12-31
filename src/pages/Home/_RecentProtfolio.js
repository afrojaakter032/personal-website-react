
import React from "react";
import Marquee from "react-fast-marquee";

function RecentProtfolio() {
    return(
        <>
            <section className="recent-protfolio-section mt-150 px-3 layout-space">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="layout-space py-5">
                            <div className="h3 text-primary animate__animated animate__rotateInUpLeft animate__faster">MY RECENT PORTFOLIO</div>
                            <div className="display-6 fw-bold w-75">
                                Elevate your brand to new heights with our portfolio expertise
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="protfolio-gallery">
                        <div className="row g-3">
                            <div className="col-lg-4">
                                <img src="assets/images/5.png" alt="image" style={{width: "100%", height:"500px"}} />
                            </div>
                            <div className="col-lg-4">
                                <img src="assets/images/6.png" alt="image" style={{width: "100%", height:"500px"}} />
                            </div>
                            <div className="col-lg-4">
                                <img src="assets/images/7.png" alt="image" style={{width: "100%", height:"500px"}} />
                            </div>
                            <div className="col-lg-4">
                                <img src="assets/images/8.png" alt="image" style={{width: "100%", height:"500px"}} />
                            </div>
                            <div className="col-lg-4">
                                <img src="assets/images/9.png" alt="image" style={{width: "100%", height:"500px"}} />
                            </div>
                        </div> 
                        <div className="row py-5">
                            <div className="container">
                            <div className="col-lg-12">
                                    <div className="mt-150">
                                                <div className="protfolio-slider-content d-flex align-items-center justify-content-center">
                                                    <Marquee>
                                                        <ul className="d-flex gap-3">
                                                            <li>* PHP</li>
                                                            <li>* Python</li>
                                                            <li>* design</li>
                                                            <li>* world</li>
                                                            <li>* Development</li>
                                                        </ul>
                                                    </Marquee>
                                                </div>
                                            </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RecentProtfolio;