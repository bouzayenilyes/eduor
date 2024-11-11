"use client";
import { FaqType } from "@/types";
import React, { useState } from "react";
interface Props {
  faqData: FaqType[];
}
const AllFaqSection = ({faqData} : Props) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const handleAccordionBtn = (itemId: number) => {
    setOpenAccordion((prevState) => (prevState === itemId ? null : itemId));
  };
  return (
    <section className="tf__faq tf__faq_page pt_190 xs_pt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_10">
              <h5>OUR EDUCATION Faq</h5>
              <h2>District is Made of about Students Childhood.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-10 col-lg-9 m-auto wow fadeInUp">
            <div className="tf__faq_text">
              <div className="tf__faq_accordion">
                <div className="accordion" id="accordionExample">
                  {faqData?.map((item,index) => (
                    <div
                      className={`accordion-item ${item.color}`}
                      key={index}
                    >
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className={`accordion-button ${
                            openAccordion === index ? "" : "collapsed"
                          }`}
                          onClick={() => handleAccordionBtn(index)}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className={`accordion-collapse collapse ${
                          openAccordion === index ? "show" : ""
                        }`}
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllFaqSection;
