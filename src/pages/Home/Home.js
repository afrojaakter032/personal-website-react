import React from 'react'

export default function Home() {
  return (
    <>
        <main>
            <section className="hero">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 hero-image">
                            <div className="px-3 pt-5">
                                <div className="pt-5 fw-bold display-4">
                                    <div>Hi, I'M AFROZA!</div>
                                    <div>CREATIVE CODER</div>
                                </div>
                                <div className="pt-3">
                                    <p className="fs-5 w-50">I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
                                </div>
                                <div classname="d-flex">
                                    <button classname="btn">Dawnload Cv <i class="ph ph-download-simple"> </i></button>

                                    <button classname="btn"><i class="ph ph-play"></i> Watch the video </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  );
}
