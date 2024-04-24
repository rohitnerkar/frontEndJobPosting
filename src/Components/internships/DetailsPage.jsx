import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./details.css"
import { useSelector } from 'react-redux';
import { selectUser } from '../../Features/Userslice';
import axios from 'axios';


function DetailsPage() {
  const user=useSelector(selectUser);


  const [coverLetter,SetCoverLetter]=useState("")
  const [InterShipDetails, setIntershipDetails] = useState([]);
  const [availability, setAvailability] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  }
  const navigate=useNavigate();
  const [isDivVisible, setDivVisible] = useState(false);

  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("q");
   

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jobpostingbackend.onrender.com/api/intern/${id}`);
        setIntershipDetails(response.data.data);
        const { company, category } = response.data.data;
        setCompany(company);
        setCategory(category);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);
  const showDiv = () => {
    if (user==="") {
      navigate("/register")
    }
    else{

      setDivVisible(true);
    }
  };

  const hideDiv = () => {
    setDivVisible(false);
  };
  
 

const resumeSubmitted=async()=>{
 let textarea= document.getElementById("textarea")
  if (textarea.value==="") {
    alert("Fill the Blanks")
  }
  const bodyJosn={
    InternShipId:id,
    coverLetter:coverLetter,
    user:user,
    ApplicationId:id,
    category:category,
    company:company,
  }
  
  await axios.post('https://jobpostingbackend.onrender.com/api/application',bodyJosn).then((res)=>{
    alert("Application Submitted")
    navigate("/")
  }).catch((err)=>{
    console.log(err)
  })
}
  return (
    <div className='details-app'>
         <h1 className='font-bold text-3xl'>{InterShipDetails.title}</h1>
      <div className='shadow-sm rounded-md border m-14'>
      <p  className='border w-32 relative top-4 '><i class="bi bi-arrow-up-right text-blue-500"></i> Actively hiring </p>
      <p className='text-xl font-bold mt-4'>
        {InterShipDetails.title}
        </p>
      <p className='text-sm text-slate-300 font-bold'>
        {InterShipDetails.company}
        </p>
        <p className='mt-2 ' ><i class="text-slate-400 font-bold  bi bi-geo-alt"></i>{InterShipDetails.location}</p>
        <div className="flex text-sm justify-between text-slate-400 mt-2">
            <p className='mt-3 ml-4'> <i class="bi bi-play-circle"></i>&nbsp; Start Date <br />{InterShipDetails.StartDate}</p>
            <p className='mt-3'> <i class="bi bi-calendar2-fill"></i>&nbsp;Duration <br />{InterShipDetails.Duration}</p>
            <p className='mt-3'> <i class="bi bi-cash-stack"></i>&nbsp; Stipend  <br />{InterShipDetails.stipend}</p>
            <p className='mt-3  mr-3'> <i class="bi bi-hourglass-split"></i>&nbsp; Apply By  <br />{InterShipDetails.stipend}</p>
          </div>
          <div className="flex">
            <p className='bg-green-100 text-green-400 rounded-md ml-3 text-sm'><i class="bi bi-clock-history"></i>&nbsp; Posted just now</p>

            <p className='bg-slate-100 text-slate-400 text-sm rounded-md ml-3'> Internship with job offer</p>
          </div>

          <div className="hr">
            <hr />
          </div>
          <div className="aboutCompany flex  justify-start ">
<p className='mt-3 text-xl font-bold text-start'>About {InterShipDetails.company}</p><br />

          </div>
          <p className='text-sm mt-3 text-blue-400'>Instagram page <i class="bi bi-arrow-up-right-square"></i></p>
<p p className='mt-3'>{InterShipDetails.aboutCompany}</p>
<p className='mt-3 text-xl font-bold text-start'>About Internship</p><br />
<p>{InterShipDetails.aboutInternship}</p>
<p className='font-bold text-base'>
Earn certifications in these skills
</p>
<p className='text-blue-500 mt-3' >
Learn Business Communication
</p>
<p className='font-bold'>Who can apply</p>
<p>{InterShipDetails.Whocanapply}</p>


<p className='font-bold mt-4'>Perks</p>
<p>{InterShipDetails.perks}</p>


<p className='font-semibold mt-4'>Additional Information</p>
<p>{InterShipDetails.AdditionalInfo}</p>

<p className='font-semibold mt-4'>Number of openings</p>
<p>{InterShipDetails.numberOfopning}</p>


<div className="flex justify-center">
  <button className='apply' onClick={showDiv}>Apply</button>
</div>
      </div>


      {isDivVisible && (
        <div div className='application-page'>
        <div className="bg">

       <button className='close' onClick={hideDiv}><i class="bi bi-x"></i></button>
       <p>Applying for {InterShipDetails.title}</p>
     
<p className='mt-3 text-xl font-bold text-start mb-3'>About {InterShipDetails.company}</p>
        </div>
        <div className="moreSteps">
          <p className='font-semibold text-xl'>Your resume</p>
          <small className='text-slate-400'>your current resume will be submitted along with the application</small>


          <p className='mt-5 font-semibold text-xl'>Cover letter</p>
          <br />
          <p>Why should you be hired for this role ?</p>
          <textarea placeholder="Mention in detail what relevant skill or past experience you have for this internship. What excites you about this internship? Why would you be a good fit?" name='coverLetter' id='textarea' value={coverLetter} onChange={(e)=>{
            SetCoverLetter(e.target.value)
          }}></textarea>

          <p className='mt-5 font-semibold text-xl'>Your availability</p>
          <p>Conform your availability</p>
          <div>
        <label>
          <input
            type="radio"
            value="Yes, I am available to join immediately"
            checked={availability === 'Yes, I am available to join immediately'}
            onChange={handleAvailabilityChange}
          />
          Yes, I am available to join immediately
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="No, I am currently on notice period"
            checked={availability === 'No, I am currently on notice period'}
            onChange={handleAvailabilityChange}
          />
          No, I am currently on notice period
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="No, I will have to serve notice period"
            checked={availability === 'No, I will have to serve notice period'}
            onChange={handleAvailabilityChange}
          />
          No, I will have to serve notice period
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value="Other"
            checked={availability === 'Other'}
            onChange={handleAvailabilityChange}
          />
          Other <span className='text-slate-500'>
          (Please specify your availability)  </span> 
        </label>
      </div>
      <p className='mt-5 font-semibold text-xl'>Custom resume <span className='text-slate-500'>(Optional)</span></p>
      <small className='text-slate-500'>Employer can download and view this resume</small>

    {/* <input type="file" name="resume" id="resume" placeholder='Chose File' /> */}
      <div className="submit flex justify-center">
        <button className='submit-btn' onClick={resumeSubmitted} >Submit application</button>
      </div>
        </div>
        </div>
      )}

    </div>
  );            
}

export default DetailsPage;
