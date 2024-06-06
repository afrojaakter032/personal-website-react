import React from "react";
import Button from "./UI/Button";

function Sidebar() {
    return (
        <>
            <section className="sidebar-section">
                <button className="btn btn-primary btn-offcanvas mt-3 mx-3"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft"><i className="ph ph-list fs-3"></i></button>

                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
                    <div className="offcanvas-header">
                        <h1 className="offcanvas-title text-center w-100" id="offcanvasLeftLabel">AFROZA</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="nav flex-column">
                            <li className="nav-item d-flex gap-2 justify-content-start align-items-center">
                                <button className="btn btn-icon btn-primary"><i className="ph ph-house fs-5"></i></button>
                                <button className="btn "><a className="nav-link active fs-4" href="#hero-section">Home</a></button>
                                {/* <Button text="Home" className="px-5 py-2 fs-3 fw-bold" color="gray-900" /> */}
                            </li>
                            <li className="nav-item d-flex gap-2 justify-content-start align-items-center">
                                <button className="btn btn-icon btn-primary"><i className="ph ph-disc fs-5"></i></button>
                                <button className="btn "><a className="nav-link active fs-4" href="#aboute-me-section">About Me</a></button>
                                {/* <Button text="Home" className="px-5 py-2 fs-3 fw-bold" color="gray-900" /> */}
                            </li>
                            <li className="nav-item d-flex gap-2 justify-content-start align-items-center">
                                <button className="btn btn-icon btn-primary"><i className="ph ph-package fs-5"></i></button>
                                <button className="btn "><a className="nav-link active fs-4" href="#service-section">Service</a></button>
                                {/* <Button text="Home" className="px-5 py-2 fs-3 fw-bold" color="gray-900" /> */}
                            </li>
                            <li className="nav-item d-flex gap-2 justify-content-start align-items-center">
                                <button className="btn btn-icon btn-primary"><i className="ph ph-user-focus fs-5"></i></button>
                                <button className="btn "><a className="nav-link active fs-4" href="#skills-section">Skills</a></button>
                                {/* <Button text="Home" className="px-5 py-2 fs-3 fw-bold" color="gray-900" /> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sidebar;