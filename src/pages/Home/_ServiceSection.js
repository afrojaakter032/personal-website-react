import React from "react";
import 'animate.css';

function ServiceSection() {
  let cards = [
    {
      icon: "ph ph-browser" ,
      title: "HTML DESIGN",
      text: "We offer professional web design services to help you create a stunning and functional website. Our team will work with you to understand your needs and build a site that reflects your brand",
    },
    {
      icon:"ph ph-framer-logo",
      title: "FIGMA TO HTML",
      text: "Transform your Figma designs into fully functional HTML websites with our expert conversion services. We ensure your designs come to life with pixel-perfect accuracy and responsiveness",
    },
    {
      icon: "ph ph-app-window",
      title: "REACTJS",
      text: "We specialize in converting your static HTML websites into dynamic and interactive ReactJS applications. Our services ensure your site is modern, efficient, and easy to maintain",
    },
  ];

  return (
    <>
        <section className="service-section px-3 mt-150 layout-space" id="service-section">
            <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                <div className="layout-space pb-5 text-center">
                    <div className="h3 text-primary  animate__animated animate__bounceInLeft animate__faster">MY SERVICE</div>
                    <div className="display-6 fw-bold">
                    Bringing your vision to life with precision and passion
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                {cards.map((card, index) => (
                <div className="col-lg-4 mt-150" key={index}>
                    <div className="card" style={{ width: "100%" , height:"250px"}}>
                    <div className="card-body pt-5">
                        <div className="card-badge d-flex align-items-center justify-content-center">
                        <i className={`${card.icon} card-badge-font display-2 fw-bloder`}></i>
                        </div>
                        <h5 className="card-title fs-4 pt-3 fw-bolder">
                        {card.title}
                        </h5>
                        <p className="card-text">{card.text}</p>
                        <a href={`#aboute-me-section-${index}`} className="btn btn-about-me-section">
                        Read More
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>
    </>
  );
}

export default ServiceSection;
