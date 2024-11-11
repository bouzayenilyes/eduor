"use client";
import React from "react";
import CategorySlider from "../slider/CategorySlider";
import { CategoryType } from "@/types";
interface Props {
  categoryData: CategoryType[];
}
const CategorySection3 = ({categoryData} : Props) => {
  return (
    <div className="tf__popular_services_3">
      <div className="container">
        <CategorySlider categoryData={categoryData}/>
      </div>
    </div>
  );
};

export default CategorySection3;
