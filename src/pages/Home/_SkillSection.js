
import Button from "../../components/Layout/UI/Button";
import ProgressBar from "@ramonak/react-progress-bar";


function SkillSection() {
    let skills = [
        {
            title:"Creative Agency",
            sub_title:"Framer Designer & Developer",
            text:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
            footer:"Performence",
            date:"2019 - Present",
            completed: 70
        },

        {
            title:"Apple Technology",
            sub_title:"Web Application Manager",
            text:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
            footer:"Performence",
            date:"2009 - 2012",
            completed: 80
        },

        {
            title:"Softech Agency",
            sub_title:"Wordpress and End Developer",
            text:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
            footer:"Performence",
            date:"2014 - 2018",
            completed: 65
        },
        {
            title:"Kent State University",
            sub_title:"Wordpress and End Developer",
            text:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed thisnquia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt",
            footer:"Performence",
            date:"2005 - 2009",
            completed: 50
        }
    ]

    return(
        <>
            <section className="skills-section mt-150 px-3 layout-space" id="skills-section">
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
                    <div className="row mt-150 py-5  g-4">
                        {skills.map((skill, index) => (
                            <div className="col-lg-6" key={index}>
                                <div className="card skills-card px-3">
                                    <div className="card-body">
                                        <h6 className="card-title">{skill.title}</h6>
                                        <hr className="title-underline"/>
                                        <h5 className="card-sub-title">{skill.sub_title}</h5>
                                        <h6>{skill.date}</h6>
                                        <p className="card-text">{skill.text}</p>
                                        <h6 className="card-footer px-0">{skill.footer}</h6>
                                        <ProgressBar
                                            height="5px"
                                            bgColor="#83A2FF"
                                            isLabelVisible={false}
                                            animateOnRender={true}
                                            transitionDuration="3s"
                                            completed={skill.completed}>
                                        </ProgressBar>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default SkillSection;