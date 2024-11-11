import Link from "next/link";
import React from "react";

const ContactSection = () => {
  return (
    <section className="tf__study_contact">
      <div className="container">
        <div className="row">
          <div className="col-12 wow fadeInUp">
            <div className="tf__study_contact_text">
              <div className="img">
                <img
                  src="images/study_contact_img.jpg"
                  alt="contact"
                  className="img-fluid w-100"
                />
              </div>
              <div className="text">
                <h4>Study Off Flexibly</h4>
                <p>
                  We can provide you with a reliable handyan in this school cros
                  students Please input an email address down below we can be
                  collage apply school. Please input anand school. included the
                  today.
                </p>
              </div>
              <Link href="/contact">contact us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
