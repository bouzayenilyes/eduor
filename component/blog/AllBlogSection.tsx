"use client";
import { BlogType } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
interface Props {
  blogData: BlogType[];
}
const AllBlogSection = ({blogData} : Props) => {
  const blogPerPage = 6;

  const [currentBlogPage, setCurrentBlogPage] = useState(1);

  const startBlogIndex = (currentBlogPage - 1) * blogPerPage;
  const endBlogIndex = startBlogIndex + blogPerPage;
  const currentBlogItems = blogData.slice(startBlogIndex, endBlogIndex);

  const totalBlogPages = Math.ceil(blogData.length / blogPerPage);

  const handleBlogPageChange = (newPage : number) => {
    setCurrentBlogPage(newPage);
    setTimeout(() => {
      window.scrollTo(0, 200);
    }, 500);
  };
  return (
    <section className="tf__blog_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto">
            <div className="tf__heading_area mb_15">
              <h5>LATEST NEWS & BLOG</h5>
              <h2>Our latest Blog And News.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {currentBlogItems.map((item) => (
            <div className="col-xl-4 col-md-6 wow fadeInUp" key={item._id}>
              <div className="tf__single_blog">
                <Link
                  className="tf__single_blog_img"
                  href={`/blog/${item.slug}`}
                >
                  <img
                    src={item.imgSrc.image}
                    alt={item.imgSrc.alt}
                    className="img-fluid w-100"
                  />
                </Link>
                <div className="tf__single_blog_text">
                  <Link className={`category ${item.color}`} href="#">
                    {item.category}
                  </Link>
                  <Link className="title" href={`/blog/${item.slug}`}>
                    {item.title}
                  </Link>
                  <p>{item.desc}</p>
                  <Link className="read_btn" href={`/blog/${item.slug}`}>
                    Read More <i className="fas fa-chevron-circle-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tf__pagination mt_50">
          <div className="row">
            <div className="col-12">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a
                      className={`page-link ${
                        currentBlogPage === 1 ? "disabled" : ""
                      }`}
                      aria-label="Previous"
                      onClick={() => handleBlogPageChange(currentBlogPage - 1)}
                    >
                      <i className="far fa-angle-left"></i>
                    </a>
                  </li>
                  {Array.from({ length: totalBlogPages }, (_, index) => (
                    <li className="page-item" key={index}>
                      <a
                        className={`page-link ${
                          currentBlogPage === index + 1 ? "active" : ""
                        }`}
                        onClick={() => handleBlogPageChange(index + 1)}
                      >
                        {index + 1}
                      </a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a
                      className={`page-link ${
                        currentBlogPage === totalBlogPages ? "disabled" : ""
                      }`}
                      aria-label="Next"
                      onClick={() => handleBlogPageChange(currentBlogPage + 1)}
                    >
                      <i className="far fa-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllBlogSection;
