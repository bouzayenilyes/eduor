"use client";
import { EventType } from "@/types";
import React from "react";
interface Props {
  eventDesc: EventType;
}
const EventDetailSection = ({ eventDesc } : Props) => {
  return (
    <section className="tf__event_details mt_195 xs_mt_100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="tf__event_details_img wow fadeInUp">
              <img
                src={eventDesc.imgSrc.image}
                alt="event details"
                className="img-fluid w-100"
              />
            </div>
            <div className="tf__event_details_text mt_35 wow fadeInUp">
              <span className="categories">{eventDesc.category}</span>
              <ul className="location d-flex flex-wrap">
                <li>
                  <i className="far fa-map-marker-alt"></i> {eventDesc.location}
                </li>
                <li>
                  <i className="far fa-clock"></i> {eventDesc.time}
                </li>
              </ul>
              <h2>{eventDesc.longTitle}</h2>
              <p>{eventDesc.desc}</p>
              <h3>Description Event:</h3>
              <p>
                Wras congue, sapien sed mollis accumsan, justo orci pulvinar
                nisl, ut fermentum ante velit in ante. Vivamus blandit urna
                urna, quis tincidunt turpis sagittis ut. In interdum sem quis
                congue accumsan. Pellentesque convallis scelerisque eros far
                away, behind the word mountains far from the countries vokalia
                and Consonantia, there live the blind texts. Separated they live
                in Book m.{" "}
              </p>
              <div className="row">
                <div className="col-xl-6 col-lg-6 wow fadeInUp">
                  <div className="tf__event_det_center_img">
                    <img
                      src="/images/event_det_center_img.jpg"
                      alt="event"
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 wow fadeInUp">
                  <div className="tf__event_det_center_text">
                    <h3>
                      Qualified And Highly Equipped Elit ut aliquam purus.
                    </h3>
                    <p>
                      Business tailored it design, management & support services
                      business agency elit, sed do eiusmod tempor.{" "}
                    </p>
                    <ul>
                      <li>Business school's Institut constructivism.</li>
                      <li>We give management school best.</li>
                      <li>Media in this school solution.</li>
                      <li>Business school's Institut constructivism.</li>
                      <li>Media in this school solution.</li>
                    </ul>
                    <p>
                      Business tailored it design, management & support services
                      business agency elit, sed do eiusmod tempor.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <p>
                Wras congue, sapien sed mollis accumsan, justo orci pulvinar
                nisl, ut fermentum ante velit in ante. Vivamus blandit urna
                urna, quis tincidunt turpis sagittis ut. In interdum sem quis
                congue accumsan. Pellentesque convallis scelerisque eros far
                away, behind the word mountains far from the countries vokalia
                and Consonantia, there live the blind texts. Separated they live
                in Book m.{" "}
              </p>
              <p>
                Wras congue, sapien sed mollis accumsan, justo orci pulvinar
                nisl, ut fermentum ante velit in ante. Vivamus blandit urna
                urna, quis tincidunt turpis sagittis ut. In interdum sem quis
                congue accumsan. Pellentesque convallis scelerisque.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailSection;
