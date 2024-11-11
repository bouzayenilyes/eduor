import { CategoryType } from "@/types";
import React from "react";
interface Props {
  categoryData: CategoryType[];
}
const CategorySection = ({categoryData} : Props) => {
  return (
    <section className="tf__categories mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-8 col-lg-6 m-auto wow fadeInUp">
            <div className="tf__heading_area mb_15">
              <h5>OUR COURSE CATEGORIES</h5>
              <h2>Creative categories for students.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {categoryData.map((item) => (
            <div className="col-xl-4 col-md-6 wow fadeInUp" key={item._id}>
            <div className={`tf__single_category ${item.color}`}>
              <div className="tf__single_category_icon">
                <i className={item.icon}></i>
              </div>
              <div className="tf__single_category_text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
