import React from "react";

function FooterSection() {
    let footercards = [
        {
            title: "Phone",
            text: "With supporting text below as a natural lead-in to additional content.",
            link: "123-45669-746859"
        },

        {
            title: "Location",
            text: "With supporting text below as a natural lead-in to additional content.",
            link: "view on map"
        },
        {
            title: "Monday-Sunday",
            text: "With supporting text below as a natural lead-in to additional content.",
            link: "tinnithegreat@gmail.com"
        }
    ]
    return(
        <>
        <section className="footer-section px-3 mt-150">
            <div className="container-fluid">
                <div className="row">
                {footercards.map ((footercard, index) => (
                    <div className="col-lg-4" key={index}>
                    <div class="card text-center">
                        <div class="card-img pt-4">
                            <i class="ph ph-device-tablet-speaker display-1"></i>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title fs-3">{footercard.title}</h5>
                        <p class="card-text fs-4">{footercard.text}</p>
                        <a href="#" className="fs-5">{footercard.link}</a>
                        </div>
                    </div>
                </div>
                ))}
                <form className="mt-150">
                    <div class="row">
                        <div className="col-lg-6">
                            < div className="form-group mb-3">
                                <input type="text" className="form-control py-3" id="input1" placeholder="Your Name Here" />
                            </div>
                        </div>    
                        <div className="col-lg-6">
                            <div className="form-group mb-3">
                                <input type="text" className="form-control py-3" id="input2" placeholder="Subject" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div class="form-group mb-3">
                            <input type="email" className="form-control py-3" id="inputEmail" placeholder="Email" />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div class="form-group mb-3">
                            <textarea className="form-control py-3" id="inputComment" rows="3" placeholder="Enter your comment"></textarea>
                        </div>
                    </div>
                    <div class="center text-center mx-0 w-100 py-3">
                        <button type="submit" className="btn btn-primary px-5 py-3 fs-4">Submit</button>
                    </div>
                </form>
                <div className="footer-bottom py-5">
                    <hr/>
                    <div class="footer-content d-flex justify-content-between align-items-center">
                        <span className="left fs-5">© CodeeFly 2023 | All Rights Reserved</span>
                        <span className="right d-flex gap-3 fs-5">
                        <a href="#">Terms and Conditions</a> |
                        <a href="#">Privacy & policy</a> |
                        <a href="#">Sitemap</a>
                        </span>
                    </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
}

export default FooterSection;