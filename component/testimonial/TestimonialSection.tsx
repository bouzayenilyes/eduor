import React from "react";
import TestimonialSlider from "../slider/TestimonialSlider";
import { TestimonialType } from "@/types";
interface Props {
  testimonialData: TestimonialType[];
}
const TestimonialSection = ({testimonialData} : Props) => {
  return (
    <section className="tf___testimonial mt_100 pt_95 pb_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-xxl-5 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_50">
              <h5>Our Testiomonials</h5>
              <h2>Voices of Success: Our Community's Testimonials</h2>
            </div>
          </div>
        </div>
        <TestimonialSlider testimonialData={testimonialData}/>
      </div>
    </section>
  );
};

export default TestimonialSection;
