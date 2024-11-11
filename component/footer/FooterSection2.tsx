"use client";
import { toggleVideoOpen } from "@/redux/features/videoSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import React from "react";
type Props = {
  style: string;
  logo: string;
}
const FooterSection2 = ({ style, logo } : Props) => {
  const dispatch = useAppDispatch()
  const handleVideoShow = () => {
    dispatch(toggleVideoOpen())
  }  
  return (
    <footer className={style}>
      <div className="container">
        <div className="tf__footer_apply">
          <div className="tf__footer_apply_overlay">
            <a className="venobox" role="button" onClick={handleVideoShow}>
              <i className="fas fa-play"></i>
            </a>
            <h3>Let’s See More About Eduor!</h3>
            <p>
              There are many variations of passages of agency Lorem Ipsum Fasts
              injecte.
            </p>
            <Link className="apply_btn" href="#">
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      <div className="tf__footer">
        <div className="tf__footer_overlay pt_225">
          <div className="container">
            <div className="tf__footer_2_content_area">
              <div className="row justify-content-between g-4">
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_logo_area">
                    <Link className="footer_logo" href="/">
                      <img src={logo} alt="Eduor" className="img-fluid w-100" />
                    </Link>
                    <p>
                      Nemo enim ipsam voluptate quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia magni this dolores eos qui
                      ratione .
                    </p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-pinterest-p"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-google-plus-g"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-2 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Quick Links</h3>
                    <ul>
                      <li>
                        <Link href="/courses">Best Services</Link>
                      </li>
                      <li>
                        <Link href="/events">Events</Link>
                      </li>
                      <li>
                        <Link href="/about">About Our Company</Link>
                      </li>
                      <li>
                        <Link href="/contact">Business Contact</Link>
                      </li>
                      <li>
                        <Link href="/contact">Make An Appointment</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Our Contacts</h3>
                    <p>Adress: 27 Division St, Berakuti, NY 121102, USA</p>
                    <p>
                      <span> Phone: <Link href='tel: +8 1440 456 782'>+8 1440 456 782</Link></span>
                      <span>Fax: <Link href='tel: +8 846512 456 788'>+8 846512 456 788</Link></span>
                    </p>
                    <p>
                      <span>Email: <Link href='mailTo: example@mail.com'>example@mail.com</Link> </span>
                      <span>Website: <Link href='yourwebsite.com'>yourwebsite.com</Link></span>
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>News Letter</h3>
                    <p>
                      Our approach to itis unique around know work an we know
                      Get hands on the you like
                    </p>
                    <form>
                      <input type="text" placeholder="Your Email" />
                      <button>send</button>
                    </form>
                  </div>
                </div>

                <div className="col-12">
                  <div className="tf__copyright">
                    <p>Copyright ©Eduor all rights reserved.</p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <Link href="/privacy-policy">Privacy policy</Link>
                      </li>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection2;
