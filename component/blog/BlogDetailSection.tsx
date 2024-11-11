"use client";
import { BlogType } from "@/types";
import Link from "next/link";
import React from "react";
interface Props {
  blogDesc: BlogType;
  blogDataArray: BlogType[];
}
const BlogDetailSection = ({ blogDesc,blogDataArray } : Props) => {
  return (
    <section className="tf__blog_details_page mt_195 xs_mt_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="tf__blog_details_area">
              <div className="tf__blog_details_img wow fadeInUp">
                <img
                  src={blogDesc.imgSrc.image}
                  alt={blogDesc.imgSrc.alt}
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__blog_details_text wow fadeInUp">
                <ul className="date d-flex flex-wrap">
                  <li>
                    <i className="far fa-user-edit"></i> {blogDesc.author}
                  </li>
                  <li>
                    <i className="fal fa-calendar-alt"></i> {blogDesc.date}
                  </li>
                </ul>
                <h3>{blogDesc.longTitle}</h3>
                <p>{blogDesc.desc}</p>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum,bean you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend to repeat predefined chunks
                  necessary, making this the first true generator on the
                  Internet.{" "}
                </p>
                <div className="tf__details_quot_text">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, oris ut. In interdum sem quis
                    congue accumsan. Pellentesque convallis scelerisque eros.
                    Etiam vestibulum ultricies finibus. . Nunc ac sem sit amet
                    purus luctus lobortis dui inorci.
                  </p>
                  <h4>Porata Masat</h4>
                  <h5>Devlopment</h5>
                </div>
                <div className="tf__blog_details_center_img">
                  <img
                    src="/images/blog_details_center_img.jpg"
                    alt="blog details"
                    className="img-fluid w-100"
                  />
                </div>
                <p>
                  Lorem ipsum is simply free text dolor sit amet, consectetur
                  notted adipisicing elit eiusmod tempor incididunt ut abore et
                  dolore magna aliqua lonm andhn is a lon established fact that
                  a reader will be distracted by the readable content
                </p>
                <ul className="list">
                  <li>Business school's Institut constructivism.</li>
                  <li>We give management school best.</li>
                  <li>Media in this school solution.</li>
                </ul>
              </div>
              <div className="tf__blog_comment mt_60 wow fadeInUp">
                <h3>Comments (3)</h3>
                <div className="tf__single_comment">
                  <div className="tf__single_comment_img">
                    <img
                      src="/images/client_img_1.png"
                      alt="client"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_comment_text">
                    <h4>Rubel Merat</h4>
                    <p>
                      Lorem ipsum is simply free textdolor sit amet, consectetur
                      notted adipisicing elit sed do iusmod tempor incididu.
                    </p>
                    <span>
                      31 jan 2023 at 03.16 pm <a href="#">reply</a>
                    </span>
                  </div>
                </div>
                <div className="tf__single_comment reply">
                  <div className="tf__single_comment_img">
                    <img
                      src="/images/client_img_2.png"
                      alt="client"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="tf__single_comment_text">
                    <h4>Korat Berata</h4>
                    <p>
                      Lorem ipsum is simply free textdolor sit amet, consectetur
                      notted adipisicing elit sed do iusmod tempor incididu.
                    </p>
                    <span>
                      31 jan 2023 at 03.16 pm <a href="#">reply</a>
                    </span>
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
                    <h4>Norat Berata</h4>
                    <p>
                      Lorem ipsum is simply free textdolor sit amet, consectetur
                      notted adipisicing elit sed do iusmod tempor incididu.
                    </p>
                    <span>
                      31 jan 2023 at 03.16 pm <a href="#">reply</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="tf__comment_reply mt_65 wow fadeInUp">
                <h3>leave a Comment</h3>
                <form>
                  <div className="row">
                    <div className="col-xl-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-xl-6">
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="col-xl-12">
                      <textarea rows={5} placeholder="Comment..."></textarea>
                      <button type="submit">submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="tf__sidebar" id="sticky_sidebar">
              <div className="tf__sidebar_search">
                <form>
                  <input type="text" placeholder="Search..." />
                  <button type="submit">
                    <i className="far fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="tf__sidebar_certificate">
                <span>
                  <i className="fas fa-share-alt"></i>
                </span>
                <h3>Online Certificates</h3>
                <p>
                  We can provide you with a reliable handyan in London. you need
                  to included the today.
                </p>
                <a href="#">
                  <i className="fas fa-long-arrow-right"></i>
                </a>
              </div>
              <div className="tf__sidebar_blog sidebar_item">
                <h3>Recent Post</h3>
                <ul>
                  {blogDataArray.slice(0, 3).map((item) => (
                    <li key={item._id}>
                      <div className="img">
                        <img
                          src={item.imgSrc.image}
                          alt="blog"
                          className="img-fluid w-100"
                        />
                      </div>
                      <div className="text">
                        <p>
                          <i className="far fa-calendar-alt"></i> {item.date}
                        </p>
                        <Link href={`/blog/${item.slug}`}>{item.title}</Link>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tf__sidebar_category sidebar_item">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      Business <span>(08)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Maintenance <span>(14)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Professional <span>(20)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Technology<span>(29)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Single-Business<span>(32)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Innovation <span>(22)</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tf__sidebar_tags sidebar_item pr_10">
                <h3>Tag</h3>
                <ul className="d-flex flex-wrap">
                  <li>
                    <a href="#">design</a>
                  </li>
                  <li>
                    <a href="#">service</a>
                  </li>
                  <li>
                    <a href="#">top</a>
                  </li>
                  <li>
                    <a href="#">help</a>
                  </li>
                  <li>
                    <a href="#">new</a>
                  </li>
                  <li>
                    <a href="#">best</a>
                  </li>
                  <li>
                    <a href="#">UI/UX</a>
                  </li>
                  <li>
                    <a href="#">sound</a>
                  </li>
                </ul>
              </div>
              <div className="tf__sidebar_apply">
                <img
                  src="/images/sidebar_img.jpg"
                  alt="apply"
                  className="img-fluid w-100"
                />
                <a href="#">apply now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailSection;
