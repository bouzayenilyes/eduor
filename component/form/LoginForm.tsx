"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!password || !email) {
      toast.error("Please fill out all fields.", { position: "top-right" });
    } else {
      // If the form is successfully submitted, show a success toast
      toast.success("Logged In successfully!", {
        position: "top-right",
      });
      setPassword("");
      setEmail("");
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput tf__login_check_area">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remeber Me
              </label>
            </div>
            <a href="#">Forget Password ?</a>
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <button type="submit" className="common_btn">
              login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
