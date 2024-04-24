
import React, { useEffect, useState } from 'react';
import "./job.css";
import compLogo from '../../Assets/netflix.png';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Jobs() {
  const [searchCategory, setSearchCategory] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [jobOpening, setJobOpening] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isDivVisible, setDivVisible] = useState(false);
  const showDiv = () => {

    setDivVisible(true);
  };

  
  const hideDiv = () => {

    setDivVisible(false);
  };

  const handleCategoryChange = (e) => {
    const categoryValue = e.target.value;
    setSearchCategory(categoryValue);
    filterJobs(categoryValue, searchLocation);
  };

  const handleLocationChange = (e) => {
    const locationValue = e.target.value;
    setSearchLocation(locationValue);
    filterJobs(searchCategory, locationValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jobpostingbackend.onrender.com/api/job');
        setJobOpening(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const filterJobs = (category, location) => {
    if (!category && !location) {
      // No filter criteria entered, show all jobs
      setFilteredJobs(jobOpening);
    } else {
      const filteredData = jobOpening.filter(
        (job) =>
          job.category.toLowerCase().includes(category.toLowerCase()) &&
          job.location.toLowerCase().includes(location.toLowerCase())
      );
      setFilteredJobs(filteredData);
    }
  };

  
  return (
    < div className='internship-filter flex'>


      <div className='first-int'>

<div className="filter-section w-1/6 " >
  <p className='text-center'> <i class="bi bi-funnel text-blue-500"></i>Filters</p>

<div className="fill flex flex-col ml-2">
  
  <label htmlFor="pro">Profile</label>
  <input type="text" name="profile" id="pro"  value={searchCategory}
        onChange={handleCategoryChange} className='border mr-3' placeholder='e.g. Marketing' />
  <label htmlFor="loc"  className='mt-3'>Location</label>
  <input type="text" name="location"  value={searchLocation}
          onChange={handleLocationChange} id="loc" className='border mr-3' placeholder='e.g. mumbai' />

  </div>
  <div className="preferences flex flex-col">

  <div class="flex items-center mt-3 ml-3 mr-3">
  <input type="checkbox" name="wfh" id="wfh" class="mr-2 ml-3" />
  <label htmlFor="wfh">Work from home</label>
</div>

<div class="flex items-center mt-3 ml-3 mr-3">
  <input type="checkbox" name="pt" id="pt" class="mr-2 ml-3" />
  <label htmlFor="pt">Part-time</label>
</div>
<div class="flex items-center mt-3 ml-3 mr-3">
  <input type="checkbox" name="pt" id="pt" class="mr-2 ml-3" />
  <label htmlFor="pt">Include all internships</label>
</div>

<p className='mt-3 mb-1 text-sm ml-3 '>Annual salary (in lakhs)</p>
<input type="range"    name="stipend" id="income" className='mt-3 w-2/3 h-1 ml-3 mr-3' />
<p className='mt-2 ml-3 mr-3'>0   &nbsp;  &nbsp; 2  &nbsp;  &nbsp;  4  &nbsp;  &nbsp;  6 &nbsp;  &nbsp;  8   &nbsp; &nbsp; 10</p>
<label  htmlFor="loc"  className='mt-3 ml-3'>Experience</label>
  <input type="text"            id="ex" className='border mr-3 ml-2' placeholder='e.g. 0-1 year' />
</div>
<p className='text-blue-500 mt-3 ml-3 mr-3'>View more filters <i class="bi bi-chevron-down"></i></p>
<span className='flex justify-end text-blue-500 mr-3'>Clear all</span>
</div>
<div className="search-2">
  <div className="search-container">
    <input type="text" placeholder='e.g Design, Mumbai, Infosys' />
    <div className="search-icon">
      <i class="bi bi-search"></i>
    </div>
  </div>
</div>
      </div>




{/*  Avaliable Internships */}
<div className="all-internships">
  <div className="show flex justify-center">
  <p className=' filterico text-center' onClick={showDiv} > <i class="bi bi-funnel text-blue-500"></i>Filters</p>

  </div>
  <p className='font-bold text-lg  ' id='titleHead'>
     {filteredJobs.length}Total Jobs &nbsp;&nbsp;<i class="bi bi-chevron-down"> </i>

    </p>
    {filteredJobs.map((item,index) => (
        

    
      
        <div class="shadow-lg rounded-lg bg-white m-7 " id='display'  key={index}>
            <div className='m-4'>
            

            <p  className='border w-32 relative top-4 '><i class="bi bi-arrow-up-right text-blue-500"></i> Actively hiring </p>
         <div className="flex justify-end">
<img src={compLogo} className='w-14' alt="" />
         </div>
            <div class="text-lg text-black m-2 mt-7 ml-0.5 font-bold ">{item.title}</div>
            <p  className='text-sm text-slate-300 font-bold' >{item.company}</p>
            <p className='mt-2' ><i class="bi bi-geo-alt"></i>{item.location}</p>
            
          <div className="flex text-sm justify-between">
            <p className='mt-3'> <i class="bi bi-play-circle"></i> Start Date <br />{item.StartDate}</p>
            <p className='mt-3'> <i class="bi bi-calendar2-fill"></i>Experience <br />{item.Experience}</p>
            <p className='mt-3'> <i class="bi bi-cash-stack"></i> salary  <br />{item.CTC}</p>
          </div>
            <p className='bg-slate-300 text-slate-500 text-sm w-16 mt-2'>  Jobs</p>
            <p className='text-green-300 text-sm mt-4'> <i class="bi bi-clock-history"></i> 2 days ago</p>
            </div>
            <div className="flex justify-end mb-11 -mt-12">
              <hr  className='bg-slate-500 w-full -mt-12'  />
              <Link to={`/detailsJob?q=${item?._id}`}>
              <button id='viewButtons2' className='bg-transparent text-blue-500'>View Details</button>
              </Link>
            </div>
        </div>
 
 
 ))}
</div>
{isDivVisible && (
  <>

<div className="filter-section2 w-full " >
  <p className='text-center' onClick={hideDiv}> <i class="bi bi-funnel text-blue-500"></i>Filters</p>

<div className="fill flex flex-col ml-2">
  
  <label htmlFor="pro">Profile</label>
  <input type="text" name="profile" id="pro"  value={searchCategory}
        onChange={handleCategoryChange} className='border mr-3' placeholder='e.g. Marketing' />
  <label htmlFor="loc"  className='mt-3'>Location</label>
  <input type="text" name="location"  value={searchLocation}
          onChange={handleLocationChange} id="loc" className='border mr-3' placeholder='e.g. mumbai' />

  </div>
  <div className="preferences flex flex-col">

  <div class="flex items-center mt-3 ml-3 mr-3">
  <input type="checkbox" name="wfh" id="wfh" class="mr-2 ml-3" />
  <label htmlFor="wfh">Work from home</label>
</div>

<div class="flex items-center mt-3 ml-3 mr-3">
  <input type="checkbox" name="pt" id="pt" class="mr-2 ml-3" />
  <label htmlFor="pt">Part-time</label>
</div>
<div class="flex items-center mt-3 ml-3 mr-3">
  <input type="checkbox" name="pt" id="pt" class="mr-2 ml-3" />
  <label htmlFor="pt">Include all internships</label>
</div>

<p className='mt-3 mb-1 text-sm ml-3 '>Annual salary (in lakhs)</p>
<input type="range"    name="stipend" id="income" className='mt-3 w-2/3 h-1 ml-3 mr-3' />
<p className='mt-2 ml-3 mr-3'>0   &nbsp;  &nbsp; 2  &nbsp;  &nbsp;  4  &nbsp;  &nbsp;  6 &nbsp;  &nbsp;  8   &nbsp; &nbsp; 10</p>
<label  htmlFor="loc"  className='mt-3 ml-3'>Experience</label>
  <input type="text"            id="ex" className='border mr-3 ml-2' placeholder='e.g. 0-1 year' />
</div>
<p className='text-blue-500 mt-3 ml-3 mr-3'>View more filters <i class="bi bi-chevron-down"></i></p>
<span className='flex justify-end text-blue-500 mr-3'>Clear all</span>
</div>

  </>
      )}
    </div>
  )
}

export default Jobs