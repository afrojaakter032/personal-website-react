
import Button from "../../components/Layout/UI/Button";
import React, { useState, useEffect } from 'react';

function SkillSection() {
    let [progress, setProgress] = useState(0);

  useEffect(() => {

    let interval = setInterval(() => {

      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 5));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

    return(
        <>
            <section className="skills-section mt-150 layout-space">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="layout-space py-5 text-center">
                            <div className="h3 text-primary">MY SKILLS</div>
                            <div className="display-6 fw-bold">
                                Crafting Stories through Design and Imagination
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12 d-flex align-items-center justify-content-center">
                            <div className="d-flex align-items-center justify-content-center gap-4">
                                <Button text="Download CV" icon="ph ph-download-simple" className="px-4 py-3 fw-bold" />
                                <Button text="Education" className="px-4 py-3 fw-bold " color="gray-900" />
                                <Button text="Biography" className="px-4 py-3 fw-bold" color="gray-900" />
                                <Button text="Experience" className="px-4 py-3 fw-bold" color="gray-900" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-150  g-4">
                        <div className="col-lg-6">
                            <div class="card skills-card px-3 " style={{width: "8rem;"}}>
                                <div class="card-body">
                                    <h6 className="card-title">Creative Agency</h6>
                                    <hr className="title-underline"/>
                                    <h5 className="card-sub-title">Framer Designer & Developer</h5>
                                    <h6>2019 - Present</h6>
                                    <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                                    <h6 className="card-footer px-0">Performence</h6>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30" style={{height: "5px"}}>
                                        <div className="progress-bar" style={{width: "75%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div class="card skills-card px-3 " style={{width: "8rem;"}}>
                                <div class="card-body">
                                    <h6 className="card-title">Creative Agency</h6>
                                    <hr className="title-underline"/>
                                    <h5 className="card-sub-title">Framer Designer & Developer</h5>
                                    <h6>2019 - Present</h6>
                                    <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                                    <h6 className="card-footer px-0">Performence</h6>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30" style={{height: "5px"}}>
                                        <div className="progress-bar" style={{width: "75%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div class="card skills-card px-3 " style={{width: "8rem;"}}>
                                <div class="card-body">
                                    <h6 className="card-title">Creative Agency</h6>
                                    <hr className="title-underline"/>
                                    <h5 className="card-sub-title">Framer Designer & Developer</h5>
                                    <h6>2019 - Present</h6>
                                    <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                                    <h6 className="card-footer px-0">Performence</h6>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30" style={{height: "5px"}}>
                                        <div className="progress-bar" style={{width: "75%"}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div class="card skills-card px-3 " style={{width: "8rem;"}}>
                                <div class="card-body">
                                    <h6 className="card-title">Creative Agency</h6>
                                    <hr className="title-underline"/>
                                    <h5 className="card-sub-title">Framer Designer & Developer</h5>
                                    <h6>2019 - Present</h6>
                                    <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                                    <h6 className="card-footer px-0">Performence</h6>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30" style={{height: "5px"}}>
                                        <div className="progress-bar" style={{width: "75%"}}></div>
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

export default SkillSection;