import React from "react";

function BlogSection() {
    return(
        <>
            <section className="blog-section mt-150 px-3 layout-space">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="layout-space py-5 text-center">
                            <div className="h3 text-primary animate__animated animate__fadeInTopRight">ALL BLOG</div>
                            <div className="display-6 fw-bold w-75 mx-auto">
                                Rafting Unique Experiences Inspiring Connections
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 py-5">
                            <img src="/assets/images/4.jpg" alt="image" />
                            <div className="d-flex gap-3">
                                <div><i class="ph ph-user-circle px-3"></i>By admin </div>
                                <div><i class="ph ph-chats-circle px-3"></i>Comments (05) </div>
                            </div>
                            <div className="h3 py-3">Where passion and purpose colide</div>
                            <p className="fs-4">Lorem Ipsum is simply dummy text of the printing and types etting in our company here thisn designers give me more design here […]</p>

                        </div>
                        <div className="col-lg-4 py-5">
                            <img src="/assets/images/5.jpg" alt="image" />
                            <div className="d-flex gap-3">
                                <div><i class="ph ph-user-circle px-3"></i>By admin </div>
                                <div><i class="ph ph-chats-circle px-3"></i>Comments (05) </div>
                            </div>
                            <div className="h3 py-3">Where passion and purpose colide</div>
                            <p className="fs-4">Lorem Ipsum is simply dummy text of the printing and types etting in our company here thisn designers give me more design here […]</p>

                        </div>
                        <div className="col-lg-4 py-5">
                            <img src="/assets/images/6.jpg" alt="image" />
                            <div className="d-flex gap-3">
                                <div><i class="ph ph-user-circle px-3"></i>By admin </div>
                                <div><i class="ph ph-chats-circle px-3"></i>Comments (05) </div>
                            </div>
                            <div className="h3 py-3">Where passion and purpose colide</div>
                            <p className="fs-4">Lorem Ipsum is simply dummy text of the printing and types etting in our company here thisn designers give me more design here […]</p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogSection;