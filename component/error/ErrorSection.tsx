import Link from "next/link";
import React from "react";
type Props = {
  type: string;
}
const ErrorSection = ({ type } : Props) => {
  return (
    <section className="tf__error_page mt_195 xs_mt_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 m-auto wow fadeInUp">
            <div className="tf__error_text">
              <div className="img">
                <img
                  src="/images/error_img.png"
                  alt="error"
                  className="img-fluid w-100"
                />
              </div>
              <h4>{type} not found</h4>
              <p>Sorry {type} Not found</p>
              <Link className="common_btn" href="/">
                go back home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;
