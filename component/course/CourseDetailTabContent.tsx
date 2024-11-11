import { CourseType } from "@/types";
import React, { useState } from "react";
import { Tab, Nav } from "react-bootstrap";

interface Props {
  courseData: CourseType;
}

const CourseDetailTabContent = ({ courseData } : Props) => {
  const [activeKey, setActiveKey] = useState<string>("overview");

  const handleSelect = (key: string | null) => {
    setActiveKey(key || "overview"); // Use a default value if key is null
  };

  return (
    <Tab.Container activeKey={activeKey} onSelect={handleSelect}>
      <div>
        <Nav
          variant="pills"
          className="nav nav-pills"
          id="pills-tab"
          role="tablist"
        >
          <Nav.Item>
            <Nav.Link eventKey="overview">Overview</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="instructors">Instructors</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="reviews" id="reviews">
              Reviews
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <Tab.Content id="pills-tabContent">
        <Tab.Pane eventKey="overview">
          <div className="tf__course_overview">
            <h3>Description</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              minus soluta! Facere alias, eos dolorem explicabo vitae nulla
              atque, aspernatur corrupti asperiores neque fuga id odit adipisci
              et dolores ut rerum placeat distinctio dicta. Dolorum distinctio
              iure quos iste beatae, cumque possimus nobis labore quae
              laudantium sequi tenetur.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              minus soluta! Facere alias, eos dolorem explicabo vitae nulla
              atque, aspernatur corrupti asperiores neque fuga id odit adipisci
              et dolores ut rerum placeat.
            </p>
            <h3>We Curabitur iaculis Course:</h3>
            <ul>
              <li>Business school's Institut constructivism.</li>
              <li>We give management school best.</li>
              <li>We give management school best.</li>
              <li>Business school's Institut constructivism.</li>
              <li>We give management school best.</li>
              <li>We give management school best.</li>
            </ul>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              minus soluta! Facere alias, eos dolorem explicabo vitae nulla
              atque, aspernatur corrupti asperiores neque fuga id odit adipisci
              et dolores ut rerum placeat distinctio dicta. Dolorum distinctio
              iure quos iste beatae, cumque possimus nobis.
            </p>

            <h3>Course features:</h3>
            <ul>
              <li>Business school's Institut constructivism.</li>
              <li>We give management school best.</li>
              <li>We give management school best.</li>
              <li>Business school's Institut constructivism.</li>
              <li>We give management school best.</li>
              <li>We give management school best.</li>
            </ul>
            <p>
              Amet consectetur adipisicing elit. Aliquam, minus soluta! Facere
              alias, eos dolorem explicabo vitae nulla atque, aspernatur
              corrupti asperiores neque fuga id odit adipisci et dolores ut
              rerum placeat distinctio dicta. Dolorum distinctio iure quos iste
              beatae, cumque possimus nobis.
            </p>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="instructors">
          <div className="tf__course_instructor">
            <div className="row">
              <div className="col-xl-5 col-md-6">
                <div className="tf__course_instructor_img">
                  <img
                    src={courseData.instructorImg.image}
                    alt="instructor"
                    className="img-fluid w-100"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-md-6">
                <div className="tf__course_instructor_text">
                  <h4>{courseData.instructor}</h4>
                  <p>+958754125215456</p>
                  <p>example@gmail.com</p>
                  <p>
                    <span>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                    </span>
                    ({courseData.rating} Rating)
                  </p>
                  <ul className="d-flex flex-wrap align-items-center">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-pinterest-p"></i>
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Tab.Pane>
        <Tab.Pane eventKey="reviews">
          <div className="tf__courses_review">
            <div className="tf__blog_comment">
              <h3>reviews (03)</h3>
              <div className="tf__single_comment">
                <div className="tf__single_comment_img">
                  <img
                    src="/images/client_img_1.png"
                    alt="client"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="tf__single_comment_text">
                  <h4>
                    Rubel Merat <span>31 jan 2023 at 03.16 pm</span>
                  </h4>
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                  <p>
                    Lorem ipsum is simply free textdolor sit amet, consectetur
                    notted adipisicing elit sed do iusmod tempor incididu.
                  </p>
                </div>
              </div>
              <div className="tf__single_comment">
                <div className="tf__single_comment_img">
                  <img
                    src="/images/client_img_2.png"
                    alt="client"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="tf__single_comment_text">
                  <h4>
                    Korat Berata <span>31 jan 2023 at 03.16 pm</span>
                  </h4>
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                  <p>
                    Lorem ipsum is simply free textdolor sit amet, consectetur
                    notted adipisicing elit sed do iusmod tempor incididu.
                  </p>
                </div>
              </div>
              <div className="tf__single_comment">
                <div className="tf__single_comment_img">
                  <img
                    src="/images/client_img_3.png"
                    alt="client"
                    className="img-fluid w-100"
                  />
                </div>
                <div className="tf__single_comment_text">
                  <h4>
                    Norat Berata <span>31 jan 2023 at 03.16 pm</span>
                  </h4>
                  <span className="rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </span>
                  <p>
                    Lorem ipsum is simply free textdolor sit amet, consectetur
                    notted adipisicing elit sed do iusmod tempor incididu.
                  </p>
                </div>
              </div>
            </div>
            <div className="tf__comment_reply mt_65">
              <h3>leave a review</h3>
              <p>
                <span>select your rating:</span>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </p>
              <form>
                <div className="row">
                  <div className="col-xl-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-xl-6">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="col-xl-12">
                    <textarea rows={5} placeholder="Text..."></textarea>
                    <button type="submit">submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default CourseDetailTabContent;
