"use client";
import React from "react";
import RegisterForm from "../form/RegisterForm";
import Link from "next/link";

const RegisterSection = () => {
  return (
    <section className="tf__registration mt_195 xs_mt_95">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xxl-5 col-xl-6 col-md-9 col-lg-7 m-auto">
            <div className="tf__login_area">
              <h2>Welcome to Eduor!</h2>
              <p>sign up to continue</p>
              <RegisterForm />
              <p className="or">
                <span>or</span>
              </p>
              <ul className="d-flex">
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
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
              </ul>
              <p className="create_account">
                Dont’t have an aceount ? <Link href="/sign-in">login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
