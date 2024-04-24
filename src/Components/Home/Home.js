import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import first from "../../Assets/Firstslide.png"
import second from "../../Assets/secondslide.webp"
import third from "../../Assets/thirdsilde.webp"
import fourth from "../../Assets/fourthslide.webp"
import org from "../../Assets/org.png"
import "./home.css"
import "./home.css"
import Jobs from './Jobs'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Features/Userslice'
import axios from 'axios'


function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
const user=useSelector(selectUser);
const [InterShipData,setInterShipData]=useState([]);
useEffect(()=>{
  const fecthData=async()=>{
try {
  const response=await axios.get(`https://jobpostingbackend.onrender.com/api/intern`);
  setInterShipData(response.data.data)
} catch (error) {
  console.log(error)
}
  }
  fecthData()
},[])
  const filteredInternships = InterShipData.filter(
    (item) => !selectedCategory || item.category === selectedCategory
  );

 
  
  return (
    <>
    <div className="first-section">
    {user?(
      <>
            <h1>Hi, {user.name}  👋</h1>
        <p className='text-center'>Let’s help you land your dream career</p>
     <p className='text-center text-xl font-bold'>Trending on InternArea 🔥</p>
          </> 
    ):
   

      (
        <>
        <h1 className='flex text-center text-4xl font-bold'>Make your dream career a reality </h1>
            <p className='text-center text-xl font-bold'>Trending on InternArea 🔥</p>
      </>
    
      )
      }
    </div>
    <div className="imgs">
      
 <div className="slide flex juc mt-10" id="imageSlider">
<img src={first} alt="" className=' cursor-pointer' />
<img src={second} alt=""className=' cursor-pointer' />
<img src={third} alt=""className=' cursor-pointer' />
<img src={fourth} alt=""className=' cursor-pointer' />
 </div>
 </div>
 <div className="infosys">


 <div className="info-inter mt-12">


  <h1 className='text-center text-4xl mt-8 '>Latest internships on InternArea</h1>
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
{filteredInternships.map((item) => (
        <div className="int-1 mt-6" >
        <p className='mb-4' id='boxer'> <i class="bi bi-arrow-up-right text-blue-500"></i> Actively hiring </p>
      <p>{item.title}</p> 
      <img src={org}  id="org" alt="" className='w-12 float-end mt-3' />
      <small className='text-slate-400 text-sm'>{item.company}</small>
      <hr />
      <p><i class="bi bi-geo-alt text-slate-400"></i>  {item.location}</p>
      <p><i class="bi bi-cash-stack text-slate-400"></i> {item.stipend}</p>
      <p> <i class="bi bi-calendar4 text-slate-400"></i> {item.Duration}</p>
      
      <div className="more flex justify-between mt-8">
        <span className='bg-slate-200 text-slate-400' >Internship</span>
        <Link to={`/details?q=${item?._id}`}>  <span className='text-blue-500 mr-2'>View details  </span></Link>
          </div>
      </div>
      ))}



</div>
 </div>
<Jobs/>
 </div>


 <hr />
 <div className="analytics flex flex-wrap justify-center items-center text-center">
  <div className="text-block">
    <span className='font-bold text-6xl text-blue-600'>300K+</span>
    <p>companies hiring</p>
  </div>

  <div className="text-block">
    <span className='font-bold text-6xl text-blue-600'>10K+</span>
    <p>new openings everyday</p>
  </div>
<br />
  <hr className="mx-4 my-8 border-t border-blue-600" />

  <div className="text-block">
    <span className='font-bold text-6xl text-blue-600'>21Mn+</span>
    <p>active students</p>
  </div>

  <div className="text-block">
    <span className='font-bold text-6xl text-blue-600'>600K+</span>
    <p>learners</p>
  </div>


</div>
<div className="logins flex bg-blue-600 h-32">
<div className="cont">
<p className="flex justify-center text-white text-2xl items-center mt-4">Empower your career with InternArea today</p>
</div>
<div className="loginfo flex justify-between">


<Link href="/register" id='buttons' class="flex items-center  bg-white h-9 justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
               <div class="px-4 py-3">
                   <svg class="h-6 w-6" viewBox="0 0 40 40">
                       <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                       <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                       <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                       <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                   </svg>
               </div>
               <h1 class="px-4 py-3 w-5/6 text-center text-sm text-gray-600 font-bold ">Sign in with Google</h1>
  </Link>
  <Link to="/register">
    <button className='btn6 '> Register</button></Link>
    </div>
</div>

    </>
  )
}

export default Home
