"use client";
import React from "react";
import { Form } from "react-bootstrap";

const ContactSection2 = () => {
  return (
    <section className="tf__contact_3 mt_100">
      <div className="container">
        <div className="tf__contact_3_area">
          <div className="row">
            <div className="col-xl-6 col-lg-6 wow fadeInLeft">
              <div className="tf__contact_3_text">
                <h2>
                  Sing Up to <span>Complete</span> Students University
                  Education.
                </h2>
                <p>
                  Business tailored it design, management & support services
                  business agency elit, sed do eiusmod tempoIn capacity social
                  science, agency is defined as the
                </p>
                <a href="#">apply now</a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInRight">
              <form className="tf__contact_3_form">
                <div className="row">
                  <div className="col-12">
                    <input type="text" placeholder="Your Name*" />
                  </div>
                  <div className="col-12">
                    <input type="text" placeholder="Your Email*" />
                  </div>
                  <div className="col-12">
                    <input type="text" placeholder="Phone Number*" />
                  </div>
                  <div className="col-12">
                    <Form.Select className="select_js">
                      <option value="">Select a Course</option>
                      <option value="">Red</option>
                      <option value="">Black</option>
                      <option value="">Orange</option>
                      <option value="">Rose Gold</option>
                      <option value="">Pink</option>
                    </Form.Select>
                  </div>
                  <div className="col-12">
                    <button type="submit">Send Request</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection2;
