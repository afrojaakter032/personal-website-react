import React from "react";
import Button from "../../components/Layout/UI/Button";
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
function HeroSection(){
    const [textColor, setTextColor] = useState('red')
    return(
        <>
            <section className="hero-section px-3 " id="hero-section">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-lg-6 hero-image">
                            <div className="layout-space pt-5">
                                <div className="pt-5 fw-bold display-4">
                                    <div>Hi, I'M AFROZA!</div>
                                    <div style={{
                                        color: textColor,}}>
                                        <TypeAnimation
                                            sequence={[
                                                'WEB DESIGNER',
                                                800,
                                                () => setTextColor('aqua'),

                                                'REACT DEVELOPER',
                                                800,
                                                () => setTextColor('deeppink'),

                                                'FRONT-END DEVELOPER',
                                                1000,
                                                () => setTextColor('darkkhaki'),

                                                '',
                                            ]}
                                            repeat={Infinity}
                                        />
                                    </div>
                                </div>
                                <div className="pt-5 col-lg-6">
                                    <p className="fs-5">I'm a passionate React developer/web designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
                                </div>
                                <div className="d-flex  align-items-center">
                                    <div className=" pt-5 ">
                                        {/* <button className="btn btn-primary px-4 py-3 fw-bold">{"text"=text} <i className="ph ph-download-simple"> </i></button> */}
                                        <Button text="Download CV" icon="ph ph-download-simple" className="px-4 py-3 fw-bold" />
                                    </div>

                                    <div className=" px-4 pt-5">
                                        <button className="btn  btn-circle d-flex align-items-center"><i className="ph-fill ph-play fs-4"></i></button>
                                    </div>
                                    <div className=" pt-5">Watch the video</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                                <img src="./assets/images/hero-02.png" alt="hero-img" width={"550"} height={"550"} />
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;