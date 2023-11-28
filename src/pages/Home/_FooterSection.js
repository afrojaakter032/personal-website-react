import React from "react";

function FooterSection() {
    return(
        <>
        <section className="footer-section mt-150">
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-4">
                    <div class="card text-center">
                        <div class="card-img pt-4">
                            <i class="ph ph-device-tablet-speaker display-1"></i>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title fs-3">Phone</h5>
                        <p class="card-text fs-4">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="fs-4">123-45669-746859</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div class="card text-center">
                        <div class="card-img pt-4">
                            <i class="ph ph-device-tablet-speaker display-1"></i>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title fs-3">Location</h5>
                        <p class="card-text fs-4">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="fs-4">view on map</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div class="card text-center">
                        <div class="card-img pt-4">
                            <i class="ph ph-device-tablet-speaker display-1"></i>
                        </div>
                        <div class="card-body">
                        <h5 class="card-title fs-3">Monday-Sunday</h5>
                        <p class="card-text fs-4">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="fs-4">tinnithegreat@gmail.com</a>
                        </div>
                    </div>
                </div>

                <form className="mt-150">
                    <div class="form-row d-flex gap-3">
                    <div class="form-group col-md-6">
                        <label for="input1"></label>
                        <input type="text" class="form-control py-3" id="input1" placeholder="Your Name Here" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="input2"></label>
                        <input type="text" class="form-control py-3" id="input2" placeholder="Subject" />
                    </div>
                    </div>
                    <div class="form-group">
                    <label for="inputEmail"></label>
                    <input type="email" class="form-control py-3" id="inputEmail" placeholder="Email" />
                    </div>
                    <div class="form-group">
                    <label for="inputComment"></label>
                    <textarea class="form-control py-3" id="inputComment" rows="3" placeholder="Enter your comment"></textarea>
                    </div>
                    <div class="center text-center mx-0 w-100 py-3">
                    <button type="submit" class="btn btn-primary px-5 py-3 fs-4">Submit</button>
                    </div>
                </form>
                </div>
            </div>
        </section>
        </>
    );
}

export default FooterSection;