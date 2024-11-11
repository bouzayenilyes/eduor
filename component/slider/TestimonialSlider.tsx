'use client'
import { TestimonialType } from "@/types";
import React from "react";
import Slider from "react-slick";
interface Props {
  testimonialData: TestimonialType[];
}
const TestimonialSlider = ({testimonialData} : Props) => {
  return (
    <Slider
      className="row testimonial_slider"
      slidesToShow={2} // Set the number of slides to show
      infinite={true}
      dots={false}
      arrows={false}
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
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
      {testimonialData.map((item) => (
        <div className="col-xl-6 wow fadeInUp" key={item._id}>
          <div className="tf__single_testimonial">
            <div className="icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p className="description">{item.desc}</p>
            <div className="img">
              <img src={item.imgSrc.image} alt="client" className="img-f;uid w-100" />
            </div>
            <h3 className="title">{item.name}</h3>
            <p className="designation">{item.designation}</p>
            <p className="rating">
              <i className="fas fa-star fill"></i>
              <i className="fas fa-star fill"></i>
              <i className="fas fa-star fill"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialSlider;
