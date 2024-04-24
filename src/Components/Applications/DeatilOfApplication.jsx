import axios from 'axios';
import React, { useEffect, useState } from 'react'


function DeatilOfApplication() {
    const [Applications,setApplications]=useState([])
    let search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("a");
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://jobpostingbackend.onrender.com/api/application/${id}`);
          setApplications([response.data.data]); // Wrap response.data in an array
          console.log(response.data.data, "this is a Info");
          console.log(Applications);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [id]);
    const handleAcceptReject = async (id, action) => {
      try {
        const response = await axios.put(`https://jobpostingbackend.onrender.com/api/application/${id}`, { action });
        const updatedApplications = Applications.map(app => (app._id === id ? response.data.data : app));
        setApplications(updatedApplications);
        console.log(Applications)
      } catch (err) {
        console.error(err);
      }
    };
  return (
    <div>
  <h1 className='text-center font-bold text-2xl'>More Information about the Application</h1>
  {Applications.map((app)=>(
      <>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">

   
    <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
      <img alt="Not Found" class="object-cover object-center h-full w-full" src={app.user.photo} style={{"filter": "invert(0);"}} />
    </div>
    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
        <i class="bi bi-person-badge-fill"></i>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Applicant Name</h2>
          <p class="leading-relaxed text-base">{app.user.name}</p>
         
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
        <i class="bi bi-envelope-fill"></i>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Applicant Email</h2>
          <p class="leading-relaxed text-base">{app.user.email}</p>
       
        </div>
      </div>
      <div class="flex flex-col mb-10 lg:items-start items-center">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
        <i class="bi bi-card-text"></i>
        </div>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Cover Letter</h2>
          <p class="leading-relaxed text-base">{app.coverLetter}</p>
         
        </div>
        <div class="flex-grow">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
        <i class="bi bi-calendar-check-fill"></i>
        </div>
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Application Date</h2>
          <p class="leading-relaxed text-base">{new Date(app?.createdAt).toLocaleDateString()}</p>
         
        </div>
        <div class="flex-grow mt-11">
        <div className="inline mt-6 ">

<button className='check bg-black w-24 ' onClick={() => handleAcceptReject(app._id, 'accept')}><i class="bi bi-check2-square"></i> Accept </button>
<button className='reject bg-black w-24 ml-6' onClick={() => handleAcceptReject(app._id, 'reject')}><i class="bi bi-x-octagon-fill"></i> Reject </button>
</div>
         
        </div>
      </div>
    </div>
  </div>

</section>

      </>
      
    ))
  }

    </div>
  )
}

export default DeatilOfApplication
