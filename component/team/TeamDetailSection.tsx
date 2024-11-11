"use client";
import { TeamType } from "@/types";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
interface Props {
  teamInfo: TeamType;
  teamDataArray: TeamType[];
}
const TeamDetailSection = ({ teamInfo,teamDataArray } : Props) => {
  return (
    <section className="tf__team_details_page mt_195 xs_mt_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-6 col-lg-6 wow fadeInLeft">
            <div className="tf__team_details_img">
              <img
                src={teamInfo.imgSrc.image}
                alt={teamInfo.imgSrc.alt}
                className="img-fluid w-100"
              />
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 wow fadeInRight">
            <div className="tf__team_details_text">
              <h3>Team Details:</h3>
              <p>Name : {teamInfo.name}</p>
              <p>About : {teamInfo.about}</p>
              <p>Call: {teamInfo.phone}</p>
              <ul className="d-flex flex-wrap align-items-center">
                <li>Follow us:</li>
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
          </div>
          <div className="col-12 wow fadeInUp">
            <div className="tf__team_description mt_55">
              <p>
                There are many variations of passages of Lorem Ipsum Fasts There
                are many variations of passages of Lorem Ipsum Fastsby we are
                the fast to mane injected humour,by injected humour, or
                randomised coved ceilings. are bound to ensue; and equal blame
                belongs can to bo erwtg mont be fao go not be hie best to those
                who through weakness. There are many variations of passages of
                Lorem Ipsum Fasts There are many variations of passages of Lorem
                Ipsum Fastsby we are the fast to mane injected humour,by
                injected humour, or randomised coved ceilings. are bound to
                ensue; and equal blame belongs can to bo erwtg mont.
              </p>
              <ul className="d-flex flex-wrap mt_10">
                <li>Business school's Institut constructivism.</li>
                <li>We give management school best.</li>
                <li>Media in this school solution.</li>
                <li>Business school's Institut constructivism.</li>
                <li>We give management school best.</li>
                <li>Media in this school solution.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tf__counter_area mt_95 wow fadeInUp">
          <ul className="d-flex flex-wrap">
            <li className="tf__single_counter">
              <h2 className="counter">
                <CountUp end={22} />
              </h2>
              <h4>Successflly Trained</h4>
            </li>
            <li className="tf__single_counter">
              <h2 className="counter">
                <CountUp end={69} />
              </h2>
              <h4>Keywords Updated</h4>
            </li>
            <li className="tf__single_counter">
              <h2 className="counter">
                <CountUp end={56} />
              </h2>
              <h4>Google Search</h4>
            </li>
            <li className="tf__single_counter">
              <h2 className="counter">
                <CountUp end={13} />
              </h2>
              <h4>Success Rate</h4>
            </li>
          </ul>
        </div>
        <div className="tf__another_team mt_95">
          <div className="row wow fadeInUp">
            <div className="col-xl-6 col-md-8 col-lg-6 m-auto">
              <div className="tf__heading_area mb_15">
                <h5>OUR Meet Team</h5>
                <h2>Become A Instruction Instructor Teacher.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {teamDataArray.slice(0, 6).map((item) => (
              <div className="col-xl-4 col-md-6 wow fadeInUp" key={item._id}>
                <div className="tf__single_team">
                  <div className="tf__single_team_img">
                    <img
                      src={item.imgSrc.image}
                      alt="team"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDetailSection;
