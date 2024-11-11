import { ActivityType } from "@/types";
import React from "react";
interface Props {
  activityData: ActivityType[];
}
const ActivitySection = ({activityData}: Props) => {
  return (
    <section className="tf__activities mt_100 xs_mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__heading_area tf__heading_area_left mb_20">
              <h5>OUR Best ACTIVITIES</h5>
              <h2>Engage, Explore, Excel: Our Vibrant Activities</h2>
            </div>
            <div className="tf__activities_text">
              <p>
                Business tailored it design, management & support services
                business agency elit, sed do eiusmod tempor.{" "}
              </p>
              <div className="row">
                <div className="col-xl-6 col-sm-6">
                  {activityData.slice(0,2).map((item) => (
                   <div className={`tf__activities_item ${item.color}`} key={item._id}>
                    <span>
                      <i className={item.iClassName}></i>
                    </span>
                    <h3>{item.title}</h3>
                  </div> 
                  ))}
                </div>
                <div className="col-xl-6 col-sm-6 xs_mt_0 mt_30 md_margin">
                  {activityData.slice(2,4).map((item) => (
                    <div className={`tf__activities_item ${item.color}`} key={item._id}>
                      <span>
                        <i className={item.iClassName}></i>
                      </span>
                      <h3>{item.title}</h3>
                    </div> 
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-9 col-lg-6 wow fadeInRight">
            <div className="tf__activities_img">
              <img
                src="images/activities_img.jpg"
                alt="activities"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitySection;
