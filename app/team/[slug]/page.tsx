import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/component/layout/Layout';
import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection';
import ErrorSection from '@/component/error/ErrorSection';
import TeamDetailSection from '@/component/team/TeamDetailSection';
import { TeamType } from '@/types';
import { getTeam } from '@/sanity/sanity.query';

export const metadata: Metadata = {
    title: "Eduor Team Details",
    description: "Developed by Azizur Rahman",
  }
const page = async({ params } : { params : { slug: string} }) => {
    const teamData: TeamType[] = await getTeam();
    const teamDesc = teamData.find((item) => item.slug === params.slug);
  return (
    <Layout>
        <BreadcrumbSection header="Team Details" title="Team Details" />
        {teamDesc ? (
        <TeamDetailSection teamInfo={teamDesc} teamDataArray={teamData}/>
        ) : (
        <ErrorSection type="Team Member" />
        )}
    </Layout>
  )
}

export default page