import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/component/layout/Layout'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import TermSection from '@/component/terms/TermSection'

export const metadata: Metadata = {
    title: "Eduor Privacy And Policy",
    description: "Developed by Azizur Rahman",
  }
const page = () => {
  return (
    <Layout>
        <BreadcrumbSection title='Privacy Policy' header='Privacy Policy'/>
        <TermSection/>
    </Layout>
  )
}

export default page