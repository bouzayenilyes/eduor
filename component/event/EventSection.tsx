"use client";
import React from "react";
import EventSlider from "../slider/EventSlider";
import { EventType } from "@/types";
type Props = {
  section: string;
  startIndex?: number;
  endIndex: number;
  eventData: EventType[];
}
const EventSection = ({ section, startIndex, endIndex,eventData }: Props) => {
  return (
    <section className={section}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_40">
              <h5>Our Upcoming Events</h5>
              <h2>Educate & Elevate: Events That Inspire Learning</h2>
            </div>
          </div>
        </div>
        <EventSlider startIndex={startIndex} endIndex={endIndex} eventData={eventData}/>
      </div>
    </section>
  );
};

export default EventSection;
