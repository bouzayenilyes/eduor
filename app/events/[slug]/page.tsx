import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/component/layout/Layout'
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import ErrorSection from '@/component/error/ErrorSection'
import EventDetailSection from '@/component/event/EventDetailSection'
import { EventType } from '@/types'
import { getEvent } from '@/sanity/sanity.query'

export const metadata: Metadata = {
    title: "Eduor Event Details",
    description: "Developed by Azizur Rahman",
  }
const page = async({ params } : { params : { slug: string } }) => {
    const eventData: EventType[] = await getEvent()
    const eventDesc = eventData.find((item) => item.slug === params.slug)
  return (
    <Layout>
        <BreadcrumbSection header='Event Details' title='Event Details'/>
        {eventDesc ? (
            <EventDetailSection eventDesc={eventDesc}/>
        ):(
            <ErrorSection type='Event'/>
        )}
    </Layout>
  )
}

export default page