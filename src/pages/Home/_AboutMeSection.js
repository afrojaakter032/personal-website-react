import React from "react";
function AboutMeSection(){
    return(
        <>
            <section className="about-me-section px-3 mt-150"  id="aboute-me-section">
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-lg-12">
                            <div className="layout-space pb-5">
                                <div className="h3 text-primary">ABOUTE ME</div>
                                <div className="display-6 fw-bold">Crafting stories through design and innovation</div>
                            </div>
                        </div>
                            <div className="col-lg-6">
                                <div className="layout-space pb-5">
                                    {/* <img className="" src="/assets/images/about_1.png" alt="image" width={100} height={100} /> */}
                                    <i class="ph ph-atom display-1 ambition-icon"></i>
                                    <div className="display-6 fw-bold pb-2">My Ambition</div>
                                    <p className="fs-5 w-90">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                </div>
                                <div className="layout-space pb-5">
                                    {/* <img className="" src="./assets/images/about_2.png" alt="image" width={100} height={100} /> */}
                                    <i class="ph ph-flame display-1 purpose-icon"></i>
                                    <div className="display-6 fw-bold pb-2">My Purpose</div>
                                    <p className="fs-5 w-90">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                </div>
                            </div>
                            <div className="col-lg-6 experience-image">
                                {/* <img src="./assets/images/about_shapes.png" alt="image" className="experience-decor" height={150} width={150} /> */}
                                <img className="" src="./assets/images/aa1.png" alt="image" width={"auto"} height={"auto"} />
                                <div className="experience-card pb-5 d-flex align-items-center justify-content-start">
                                    <div className="pt-4 px-3 experience-badge"><i class="ph-fill ph-shield-chevron display-4"></i></div>
                                    <div>
                                        <div className=" text-secondary fw-bold fs-1 ">15+</div>
                                        <div className="text-secondary fw-bold fs-5">Years of Experience</div>
                                    </div>
                                </div>
                            </div>
                    </div>

                </div>
            </section>
        </>
    );
}
export default AboutMeSection;