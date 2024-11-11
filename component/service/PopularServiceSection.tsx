import { ServiceType } from "@/types";
import React from "react";
interface Props {
  serviceData: ServiceType[];
}
const PopularServiceSection = ({serviceData} : Props) => {
  return (
    <section className="tf__popular_services_2 mt_95">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-7 col-xxl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>OUR Popular Service</h5>
              <h2>Empowering Futures: Our Education Services</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceData.map((item) => (
          <div className="col-xl-4 col-md-6 col-lg-4 wow fadeInUp" key={item._id}>
            <div className="tf__single_services">
              <span>
                <i className={item.iClassName}></i>
              </span>
              <h3>{item.title}</h3>
              <p>
                {item.desc}
              </p>
              <a href="#">
                <i className="fa fa-long-arrow-right"></i>
              </a>
            </div>
          </div>  
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default PopularServiceSection;
