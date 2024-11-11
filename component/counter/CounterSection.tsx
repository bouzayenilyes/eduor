import React from "react";
import CounterArea from "./CounterArea";

const CounterSection = () => {

  return (
    <section className="tf__counter_3">
      <div className="container">
        <div className="tf__counter_3_area">
          <div className="row">
            <div className="col-xxl-6 col-lg-8 wow fadeInUp">
              <div className="tf__counter_3_text">
                <div className="tf__heading_area tf__heading_area_left mb_25">
                  <h5>OUR BEST COUNTER</h5>
                  <h2>Complete About Students University Education.</h2>
                </div>
                <p>
                  Business tailored it design, management & support services
                  business agency elit, sed do eiusmod tempor.{" "}
                </p>
              </div>
            </div>
            <div className="col-xl-9 wow fadeInUp">
              <CounterArea marginTop="" showAll={false}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
