import Link from "next/link";
import React from "react";

const HeaderSection = () => {
  return (
    <header className="tf__header d-none d-lg-block">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tf__header_text">
              <Link href="/">
                <img
                  src="images/logo2.png"
                  alt="Eduor"
                  className="img-fluid w-100"
                />
              </Link>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fa fa-phone-alt"></i>
                  </div>
                  <div className="text">
                    <h4>+0(449) 123 452</h4>
                    <p>Requesting a Call:</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-clock"></i>
                  </div>
                  <div className="text">
                    <h4>09am - 08pm</h4>
                    <p>Sunday - Friday</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="text">
                    <h4>E-mail</h4>
                    <p>info@eduor.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
