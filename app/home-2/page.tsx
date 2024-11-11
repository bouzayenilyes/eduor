import React from 'react'
import type { Metadata } from 'next'
import TopbarSection from '@/component/topbar/TopbarSection'
import HeaderSection from '@/component/header/HeaderSection'
import NavbarSection2 from '@/component/navbar/NavbarSection2'
import BannerSection2 from '@/component/banner/BannerSection2'
import CategorySection2 from '@/component/category/CategorySection2'
import AboutSection2 from '@/component/about/AboutSection2'
import PopularServiceSection from '@/component/service/PopularServiceSection'
import EventSection from '@/component/event/EventSection'
import TestimonialSection2 from '@/component/testimonial/TestimonialSection2'
import CourseSection from '@/component/course/CourseSection'
import TeamSection from '@/component/team/TeamSection'
import BlogSection2 from '@/component/blog/BlogSection2'
import FooterSection2 from '@/component/footer/FooterSection2'
import VideoModal from '@/component/modal/VideoModal'
import ScrollToTopButton from '@/component/utils/ScrollToTopButton'
import { getBlog, getCategory, getCourse, getEvent, getService, getTeam, getTestimonial } from '@/sanity/sanity.query';
import { BlogType, CategoryType, CourseType, EventType, ServiceType, TeamType, TestimonialType } from '@/types';
export const metadata: Metadata = {
    title: "Eduor Home 2",
    description: "Developed by Azizur Rahman",
  }
const page = async() => {
  const blogData: BlogType[] = await getBlog();
  const categoryData: CategoryType[] = await getCategory();
  const eventData: EventType[] = await getEvent();
  const testimonialData: TestimonialType[] = await getTestimonial();
  const courseData: CourseType[] = await getCourse();
  const serviceData: ServiceType[] = await getService();
  const teamData: TeamType[] = await getTeam();
  return (
    <div className='home_2'>
      <TopbarSection style="tf__topbar" />
      <HeaderSection />
      <NavbarSection2 />
      <BannerSection2 />
      {categoryData && <CategorySection2 categoryData={categoryData}/>}
      <AboutSection2 />
      {serviceData && <PopularServiceSection serviceData={serviceData}/>}
      {eventData && <EventSection
        section="tf__upcoming_event mt_100 pt_95 pb_100"
        endIndex={-4}
        eventData={eventData}
      />}
      {testimonialData && <TestimonialSection2 testimonialData={testimonialData}/>}
      {courseData && <CourseSection style="tf__courses_2" courseData={courseData}/>}
      {teamData && <TeamSection style="tf__team_2 mt_100 pt_95 pb_100" teamData={teamData}/>}
      {blogData && <BlogSection2 blogData={blogData}/>}
      <FooterSection2 style="tf__footer_2" logo="images/footer_logo2.png" />
      <VideoModal />
      <ScrollToTopButton style="style-2" />
    </div>
  )
}

export default page