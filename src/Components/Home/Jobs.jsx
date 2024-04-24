import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import org from "../../Assets/org.png"


function Jobs() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [JobsData , setJobData]=useState('')

    useEffect(()=>{
      const fecthData=async()=>{
    try {
      const response=await axios.get(`https://jobpostingbackend.onrender.com/api/job`);
      setJobData(response.data.data)
    } catch (error) {
      console.log(error)
    }
      }
      fecthData()
    },[])
    const filteredJobs = Array.isArray(JobsData)
    ? JobsData.filter((item) => !selectedCategory || item.category === selectedCategory)
    : [];
  return (
    <div>
      <div className="info-inter mt-12">


<h1 className='text-center text-4xl mt-8 '>Latest jobs on InternArea</h1>
<div className="categories flex flex-wrap mt-5 ">
<p>POPULAR CATEGORIES:</p> 
<span  className={`category mr-4 ml-6 ${
          selectedCategory === 'Big Brands' ? 'bg-blue-500 text-white' : ''
        }`} 
        onClick={() => setSelectedCategory('Big Brands')}
      >Big Brands</span>
<span className={`category mr-4 ml-6 ${
          selectedCategory === 'Work From Home' ? 'bg-blue-500 text-white' : ''
        }`} onClick={() => setSelectedCategory('Work From Home')}>Work from home</span>
<span className={`category mr-4 ml-6 ${
          selectedCategory === 'Part-time' ? 'bg-blue-500 text-white' : ''
        }`} onClick={() => setSelectedCategory('Part-time')}>Part-time</span>
<span className={`category mr-4 ml-6 ${
          selectedCategory === 'MBA' ? 'bg-blue-500 text-white' : ''
        }`} onClick={() => setSelectedCategory('MBA')}>MBA</span>
<span className={`category mr-4 ml-6 ${
          selectedCategory === 'Engineering' ? 'bg-blue-500 text-white' : ''
        }`} onClick={() => setSelectedCategory('Engineering')}>Engineering</span>
<span className={`category mr-4 ml-6 ${
          selectedCategory === 'media' ? 'bg-blue-500 text-white' : ''
        }`} onClick={() => setSelectedCategory('media')}>Media</span>
<span className={`category mr-4 ml-6 ${
          selectedCategory === 'Design' ? 'bg-blue-500 text-white' : ''
        }`} onClick={() => setSelectedCategory('Design')}>Design</span>
<span className={`category mr-4 ml-6 ${
          selectedCategory === 'Data Science' ? 'bg-blue-500 text-white' : ''
        }`} onClick={() => setSelectedCategory('Data Science')}>Data Science</span>

</div>
</div>
{/*  For internship sections */}
<div className="internships ">


<div className="internShip-Info flex">
{/*  Firs Container */}
{filteredJobs.map((item) => (
      <div className="int-1 mt-6 w-3/4 " >
      <p className='mb-4' id='boxer'> <i class="bi bi-arrow-up-right text-blue-500"></i> Actively hiring </p>
    <p>{item.title}</p> 
    <img src={org}  id="org" alt="" className='w-8 float-end ' />
    <small className='text-slate-400 text-sm'>{item.company}</small>
    <div id='hr'>

    < hr />
    </div>
    <p><i class="bi bi-geo-alt text-slate-400"></i>  {item.location}</p>
    <p><i class="bi bi-cash-stack text-slate-400"></i> {item.CTC}/year</p>
  
    
    <div className="more flex justify-between mt-8">
      <span className='bg-slate-200 text-black-300 text-sm' >Jobs</span>
      <Link to={`/detailsJob?q=${item?._id}`}>  <span className='text-blue-500 mr-2'>View details  </span></Link>
        </div>
    </div>
    ))}



</div>
</div>
    </div>
  )
}

export default Jobs
