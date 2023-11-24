import React from "react";
import Button from "../../components/Layout/UI/Button";
function SkillSection() {
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
                                <Button text="Education" className="px-4 py-3 fw-bold btn-gray-900 btn-gray w-100" />
                                <Button text="Biography" className="px-4 py-3 fw-bold btn-gray-900" />
                                <Button text="Experience" className="px-4 py-3 fw-bold btn-gray-900" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                        <div class="card" style={{width: "8rem;"}}>
                                <div class="card-body">
                                    <h6 className="card-title">Creative Agency</h6>
                                    <h5 className="card-sub-title">Framer Designer & Developer 2019 - Present</h5>
                                    <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                                    <h6 className="card-footer">Performence</h6>
                                    
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