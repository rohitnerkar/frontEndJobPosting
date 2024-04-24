import React, { useEffect, useState } from 'react'
import "./intern.css"

import compLogo from '../../Assets/netflix.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Internships() {
  const [searchCategory, setSearchCategory] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [filteredInternships, setFilteredInternships] = useState([]);
  const [InternOpning,setInternOpning]=useState([]);
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
    filterInternships(categoryValue, searchLocation);
  };

  const handleLocationChange = (e) => {
    const locationValue = e.target.value;
    setSearchLocation(locationValue);
    filterInternships(searchCategory, locationValue);
  };

  useEffect(()=>{
    const fecthData=async()=>{
  try {
    const response=await axios.get('https://jobpostingbackend.onrender.com/api/intern');
    setInternOpning(response.data.data)
  } catch (error) {
    console.log(error)
  }
    }
    fecthData()
  },[])
  const filterInternships = (category, location) => {
    const filteredData = InternOpning.filter(
      (internship) =>
        internship.category.toLowerCase().includes(category.toLowerCase()) &&
        internship.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredInternships(filteredData);
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

<p className='mt-3 mb-1 text-sm ml-3 '>Desired minimum monthly Stipend (₹)</p>
<input type="range"    name="stipend" id="income" className='mt-3 w-2/3 h-1 ml-3 mr-3' />
<p className='mt-2 ml-3 mr-3'>0  2K  &nbsp;  4k  &nbsp;  6K &nbsp;  8k   &nbsp; 10K</p>
    
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
  <p className='font-bold text-lg '>
    {filteredInternships.length} Total Internships &nbsp;&nbsp;<i class="bi bi-chevron-down"> </i>

    </p>
    {filteredInternships.map((item) => (
        

    
      
        <div   class="shadow-lg rounded-lg bg-white m-7 " id='display'  >
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
            <p className='mt-3'> <i class="bi bi-calendar2-fill"></i>Duration <br />{item.Duration}</p>
            <p className='mt-3'> <i class="bi bi-cash-stack"></i> Stipend  <br />{item.stipend}</p>
          </div>
            <p className='bg-slate-300 text-slate-500 text-sm w-16 mt-2'>  internship</p>
            <p className='text-green-300 text-sm mt-4'> <i class="bi bi-clock-history"></i> 2 days ago</p>
            </div>
            <div id='hr' className="flex justify-end mb-2">
              <hr  className='bg-slate-500 w-full '  />
              <Link to={`/details?q=${item?._id}`}>
              <button id='viewButtons' className='bg-transparent text-blue-500'>View Details</button>
              </Link>
            </div>
        </div>
 
 
 ))}
</div>
{isDivVisible && (
  <>

<div className="filter-section2 w-full " >
  <p className='text-center cursor-pointer' onClick={hideDiv}> <i class="bi bi-funnel text-blue-500"></i>Filters</p>

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

export default Internships
