"use client";
import { CourseType } from "@/types";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
interface Props {
  courseData: CourseType[];
}
const CourseSlider = ({courseData} : Props) => {
  return (
    <Slider
      className="row event_slider"
      slidesToShow={3} // Set the number of slides to show
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
      {courseData.slice(0, 4).map((item) => (
        <div className="col-xl-4 wow fadeInUp" key={item._id}>
          <div className="tf__single_courses">
            <div className="tf__single_courses_img">
              <img
                src={item.imgSrc.image}
                alt="courses"
                className="img-fluid w-100"
              />
              <a className={`categories ${item.color}`} href="#">
                {item.category}
              </a>
              <span>${item.price}.00</span>
            </div>
            <ul className="tf__single_course_header">
              <li>
                <i className="fas fa-user"></i> {item.instructor}
              </li>
              <li>
                <i className="fas fa-folder-open"></i> {item.lessons} lessons
              </li>
            </ul>
            <div className="tf__single_courses_text">
              <Link className="title" href={`/courses/${item.slug}`}>
                {item.title}
              </Link>
              <p className="description">{item.description}</p>
              <ul>
                <li>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <span>(0{item.rating})</span>
                </li>
                <li>{item.students}+ students</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default CourseSlider;
