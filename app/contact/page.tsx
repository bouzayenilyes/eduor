import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import ContactPageSection from '@/component/contact/ContactPageSection'
import Layout from '@/component/layout/Layout'
import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Eduor Contact",
  description: "Developed by Azizur Rahman",
}
const page = () => {
  return (
    <Layout>
        <BreadcrumbSection header='Contact Us' title="Contact us"/>
        <ContactPageSection/>
    </Layout>
  )
}

export default page