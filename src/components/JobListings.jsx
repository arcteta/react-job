import React from "react";
import { useEffect, useState } from "react";
import JobListing from "./JobListing";

const JobListings = ({isHome = false}) => {
  
  const [jobs,setJobs]=useState([]);
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    const fetchJobData = async()=>{
      try {
          const response = await fetch(`http://localhost:3000/jobs`)
          const data = await response.json()
          setJobs(data);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false);
      }
    }
    fetchJobData()
  },[])
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'recent Jobs' : 'browse Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job,index) => (
            <JobListing job={job} key={job.id}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
