import React from "react";

function ServiceSection() {
  let cards = [
    {
      icon: "ph ph-browser" ,
      title: "WEBSITE DESIGN",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
    {
      icon:"ph ph-framer-logo",
      title: "LOGO DESIGN",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
    {
      icon: "ph ph-app-window",
      title: "APPS DEVELOPMENT",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    },
  ];

  return (
    <>
        <section className="service-section mt-150 layout-space">
            <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                <div className="layout-space pb-5 text-center">
                    <div className="h3 text-primary">MY SERVICE</div>
                    <div className="display-6 fw-bold">
                    Bringing your vision to life with precision and passion
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                {cards.map((card, index) => (
                <div className="col-lg-4 mt-150" key={index}>
                    <div className="card" style={{ width: "18rem" }}>
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
