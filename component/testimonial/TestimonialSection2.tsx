import React from "react";
import TestimonialSlider2 from "../slider/TestimonialSlider2";
import { TestimonialType } from "@/types";
import CounterArea from "../counter/CounterArea";
interface Props {
  testimonialData: TestimonialType[];
}

const TestimonialSection2 = ({testimonialData} : Props) => {
  return (
    <section className="tf__testimonial_2 mt_250 pb_45">
      <div className="tf__counter_2 wow fadeInUp">
        <div className="container">
          <CounterArea marginTop="mt_95" showAll={true}/>
        </div>
      </div>

      <div className="tf__testimonial_2_area">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
              <div className="tf__heading_area mb_25">
                <h5>OUR Testiomonials</h5>
                <h2>Voices of Success: Our Community's Testimonials</h2>
              </div>
            </div>
          </div>
          <TestimonialSlider2 testimonialData={testimonialData}/>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection2;
