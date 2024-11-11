import React from "react";
import BlogSlider from "../slider/BlogSlider";
import { BlogType } from "@/types";
interface Props {
  blogData: BlogType[];
}
const BlogSection = ({blogData} : Props) => {
  return (
    <div className="tf__blog mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_15">
              <h5>LATEST NEWS & BLOG</h5>
              <h2>Our latest Blog And News.</h2>
            </div>
          </div>
        </div>
        <BlogSlider  blogData={blogData}/>
      </div>
    </div>
  );
};

export default BlogSection;
