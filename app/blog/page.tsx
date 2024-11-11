import AllBlogSection from '@/component/blog/AllBlogSection'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout from '@/component/layout/Layout'
import React from 'react'
import type { Metadata } from 'next'
import { BlogType } from '@/types'
import { getBlog } from '@/sanity/sanity.query'
 
export const metadata: Metadata = {
  title: "Eduor Blog",
  description: "Developed by Azizur Rahman",
}
const page = async() => {
  const blogData: BlogType[] = await getBlog();
  return (
    <Layout>
        <BreadcrumbSection header="Blog" title="Blog"/>
        {blogData && <AllBlogSection blogData={blogData}/>}
    </Layout>
  )
}

export default page