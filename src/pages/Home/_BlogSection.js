import React from "react";
import { useState,  useEffect } from "react";



function BlogSection() {
    let[blogs, setBlog] = useState([]);
    // let blogs = [
    //     {
    //         image: "/assets/images/4.jpg",
    //         admin: "By admin",
    //         comment: "comments (05)",
    //         title: "Where passion and purpose colide",
    //         article: "Lorem Ipsum is simply dummy text of the printing and types etting in our company here thisn designers give me more design here […]"
    //     },

    //     {
    //         image: "/assets/images/5.jpg",
    //         admin: "By admin",
    //         comment: "comments (05)",
    //         title: "Where passion and purpose colide",
    //         article: "Lorem Ipsum is simply dummy text of the printing and types etting in our company here thisn designers give me more design here […]"
    //     },

    //     {
    //         image: "/assets/images/6.jpg",
    //         admin: "By admin",
    //         comment: "comments (05)",
    //         title: "Where passion and purpose colide",
    //         article: "Lorem Ipsum is simply dummy text of the printing and types etting in our company here thisn designers give me more design here […]"
    //     }
    // ]
    useEffect(() => {

        fetch('https://dev.to/api/articles?per_page=6&tag=javascript')
        .then(res => res.json())
        .then((data) => {
            setBlog(data)

        }, [])
    });
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
                        {blogs.map((blog,index) => (
                            <div className="col-lg-4 py-5" key={index}>
                            <img src={blog.cover_image} alt="image" style={{height:350, width: 350}} />
                            <div className="d-flex gap-3">
                                <div><i class="ph ph-user-circle px-3"></i>{blog.user.username} </div>
                                <div><i class="ph ph-chats-circle px-3"></i>{blog.comments_count} </div>
                            </div>
                            <div className="h3 py-3">{blog.title}</div>
                            <p className="fs-4">{blog.description}</p>

                        </div>
                        ))

                        }

                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogSection;