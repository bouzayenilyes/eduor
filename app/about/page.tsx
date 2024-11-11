import AboutSection3 from '@/component/about/AboutSection3'
import ActivitySection2 from '@/component/activity/ActivitySection2'
import BlogSection from '@/component/blog/BlogSection'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import CourseSection from '@/component/course/CourseSection'
import FaqSection from '@/component/faq/FaqSection'
import Layout from '@/component/layout/Layout'
import PopularServiceSection2 from '@/component/service/PopularServiceSection2'
import React from 'react'
import type { Metadata } from 'next'
import { ActivityType, BlogType, CourseType, FaqType, ServiceType } from '@/types'
import { getActivity, getBlog, getCourse, getFaq, getService } from '@/sanity/sanity.query'
 
export const metadata: Metadata = {
  title: "Eduor About",
  description: "Developed by Azizur Rahman",
}
const page = async() => {
  const serviceData: ServiceType[] = await getService();
  const courseData: CourseType[] = await getCourse();
  const faqData: FaqType[] = await getFaq();
  const activityData: ActivityType[] = await getActivity();
  const blogData: BlogType[] = await getBlog();
  return (
    <Layout>
        <BreadcrumbSection header="About us" title="About us"/>
        <section className="tf__about_us_page mt_195 xs_mt_100">
            <AboutSection3 style=''/>
            {serviceData && <PopularServiceSection2 services={serviceData}/>}
            {courseData && <CourseSection style="tf__popular_courses" courseData={courseData}/>}
            {faqData && <FaqSection img="images/faq_img_2.jpg" faqData={faqData}/>}
            {activityData && <ActivitySection2 style="tf__activities_slider_area pt_95 pb_100" activityData={activityData}/>}
            {blogData && <BlogSection blogData={blogData}/>}
        </section>
    </Layout>
  )
}

export default page