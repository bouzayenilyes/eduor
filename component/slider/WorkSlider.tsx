'use client'
import { WorkType } from "@/types";
import React from "react";
import Slider from "react-slick";
interface Props {
  workData: WorkType[]
}
const WorkSlider = ({workData} : Props) => {
  return (
    <Slider
      className="row work_slider"
      slidesToShow={3} // Set the number of slides to show
      infinite={true}
      dots={true}
      autoplay={true}
      arrows={false}
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ]}
    >
      {workData.map((item) => (
        <div className="col-xl-4 wow fadeInUp" key={item._id}>
          <div className={`tf__work_single ${item.color}`}>
            <div className="tf__work_single_img">
              <img src={item.imgSrc.image} alt={item.imgSrc.alt} className="img-fluid w-100" />
            </div>
            <div className="tf__work_single_text">
              <h3>{item.task}</h3>
              <p>{item.desc}</p>
              <a href="#">
                <i className="fas fa-long-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default WorkSlider;
