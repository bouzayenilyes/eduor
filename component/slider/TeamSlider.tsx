"use client";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { TeamType } from "@/types";
interface Props {
  teamData: TeamType[];
}
const TeamSlider = ({teamData} : Props) => {
  return (
    <Slider
      className="row event_slider"
      slidesToShow={3} // Set the number of slides to show
      infinite={true}
      dots={true}
      autoplay={true}
      arrows={false}
      slidesToScroll={1} // Set to 1 to scroll one slide at a time
      responsive={[
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
          },
        }
      ]}
    >
      {teamData.slice(0, 4).map((item) => (
        <div className="col-xl-4 wow fadeInUp" key={item._id}>
          <div className="tf__single_team">
            <div className="tf__single_team_img">
              <img
                src={item.imgSrc.image}
                alt={item.name}
                className="img-fluid w-100"
              />
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="tf__single_team_text">
              <Link className="title" href={`/team/${item.slug}`}>
                {item.name}
              </Link>
              <p>{item.designation}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TeamSlider;
