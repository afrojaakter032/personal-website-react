import React from 'react'

export default function Home() {
  return (
    <>
        <main>
            <section className="hero-section ">
                <div className="container-fluid">
                    <div className="row">
                        {/* hero section start here */}
                        <div className="col-lg-12 hero-image">
                            <div className="layout-space pt-5">
                                <div className="pt-5 fw-bold display-4">
                                    <div>Hi, I'M AFROZA!</div>
                                    <div>CREATIVE CODER</div>
                                </div>
                                <div className="pt-5">
                                    <p className="fs-5 w-50">I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
                                </div>
                                <div className="d-flex  align-items-center">
                                    <div className=" pt-5">
                                        <button className="btn btn-primary px-4 py-3 fw-bold">Dawnload Cv <i class="ph ph-download-simple"> </i></button>
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
            {/* hero section ends here */}

            {/* about section sarts here */}
            <section className="about-me-section">
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
                                    <img className="" src="./assets/images/about_1.png" alt="image" width={100} height={100} />
                                    <div className="display-6 fw-bold pb-2">My Ambition</div>
                                    <p className="fs-5 w-90">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                </div>
                                <div className="layout-space pb-5">
                                    <img className="" src="./assets/images/about_2.png" alt="image" width={100} height={100} />
                                    <div className="display-6 fw-bold pb-2">My Purpose</div>
                                    <p className="fs-5 w-90">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</p>
                                </div>

                            </div>
                            <div className="col-lg-6 experience-image">
                                <img src="./assets/images/about_shapes.png" alt="image" className="experience-decor" height={150} width={150} />
                                <img className="" src="./assets/images/about_img_2.jpg" alt="image" width={"auto"} height={"auto"} />
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


            {/* about section ends here */}
            {/* service section starts here */}
            <section className="service-section mt-150">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="layout-space pb-5 text-center">
                                <div className="h3 text-primary">MY SERVICE</div>
                                <div className="display-6 fw-bold">Bringing your vision to life with precision and passion</div>
                            </div>   


                        </div>

                    </div>

                </div>
            </section>
           
            {/* service section ends here */}


            
        </main>

    </>
  );
}
