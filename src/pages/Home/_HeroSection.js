import React from "react";
import Button from "../../components/Layout/UI/Button";
function HeroSection(){
    return(
        <>
            <section className="hero-section px-3 ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 hero-image">
                            <div className="layout-space pt-5">
                                <div className="pt-5 fw-bold display-4">
                                    <div>Hi, I'M AFROZA!</div>
                                    <div>CREATIVE CODER</div>
                                </div>
                                <div className="pt-5 col-lg-6">
                                    <p className="fs-5">I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
                                </div>
                                <div className="d-flex  align-items-center">
                                    <div className=" pt-5 ">
                                        {/* <button className="btn btn-primary px-4 py-3 fw-bold">{"text"=text} <i class="ph ph-download-simple"> </i></button> */}
                                        <Button text="Download CV" icon="ph ph-download-simple" className="px-4 py-3 fw-bold" />
                                    </div>

                                    <div className=" px-4 pt-5">
                                        <button className="btn  btn-circle d-flex align-items-center"><i class="ph-fill ph-play fs-4"></i></button>
                                    </div>
                                    <div className=" pt-5">Watch the video</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;