"use client";
import { ActivityType } from "@/types";
import React from "react";
import Slider from "react-slick";
interface Props {
  activityData: ActivityType[];
}
const ActivitySlider = ({activityData} : Props) => {
  return (
    <Slider
      className="row popular_service_slider wow fadeInUp"
      slidesToShow={4} // Set the number of slides to show
      infinite={true}
      dots={true}
      arrows={false}
      autoplay={true}
      slidesToScroll={1} // Set to 1 to scroll one slide at a time
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
            slidesToShow: 2,
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
      {activityData.map((item) => (
        <div className="col-xl-3" key={item._id}>
          <div className={`tf__activities_item ${item.color}`}>
            <span>
              {" "}
              <i className={item.iClassName}></i>{" "}
            </span>
            <h3>{item.title}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ActivitySlider;
