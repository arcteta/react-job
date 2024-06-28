import React from 'react'

import Hero from '../components/Hero'
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
    <Hero title={'React Jobs'} subtitle={'Find Easy Jobs with React Jobs'}/>
    <HomeCard/>
    <JobListings isHome={true}/>
    <ViewAllJobs/>
    </>
  )
}

export default HomePage