"use client";
import React from "react";
import ActivitySlider from "../slider/ActivitySlider";
import { ActivityType } from "@/types";

type Props = {
  style: string;
  activityData: ActivityType[];
}

const ActivitySection2 = ({ style,activityData } : Props) => {
  return (
    <div className={style}>
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>OUR Best ACTIVITIES</h5>
              <h2>We School Be Happy With Our Activities.</h2>
            </div>
          </div>
        </div>
        <ActivitySlider activityData={activityData}/>
      </div>
    </div>
  );
};

export default ActivitySection2;
