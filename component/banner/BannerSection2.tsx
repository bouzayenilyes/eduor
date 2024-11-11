"use client";
import { toggleVideoOpen } from "@/redux/features/videoSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import React from "react";

const BannerSection2 = () => {
  const dispatch = useAppDispatch()
  const handleVideoShow = () => {
    dispatch(toggleVideoOpen())
  }
  return (
    <section className="tf__banner_2">
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <div className="tf__banner_text tf__banner_2_text wow fadeInUp">
              <h5>experts advisors / 56+ Courses / program</h5>
              <h1>
                Start Learning <span>Courses</span> From Eduor.
              </h1>
              <p>
                Our agency can only be as strong as our people & because of team
                have designed game changing products.
              </p>
              <ul className="d-flex flex-wrap align-items-center">
                <li>
                  <Link className="common_btn_2" href="/courses">
                    our courses
                  </Link>
                </li>
                <li>
                  <a
                    className="venobox play_btn"
                    role="button"
                    onClick={handleVideoShow}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection2;
