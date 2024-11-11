import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/component/layout/Layout';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection';
import ErrorSection from '@/component/error/ErrorSection';
import CourseDetailSection from '@/component/course/CourseDetailSection';
import { CourseType } from '@/types';
import { getCourse } from '@/sanity/sanity.query';
 
export const metadata: Metadata = {
  title: "Eduor Course Details",
  description: "Developed by Azizur Rahman",
}
const page = async({ params }: { params: { slug: string } }) => {
    const course: CourseType[] = await getCourse();
    const courseDesc = course.find((item) => item.slug === params.slug); // Use 'slug' here

  return (
    <Layout>
    <BreadcrumbSection header="Course Details" title="Course Details" />
    {courseDesc ? (
      <CourseDetailSection courseData={courseDesc} courseDataArray={course}/>
    ) : (
      <ErrorSection type="Course" />
    )}
  </Layout>
  )
}

export default page