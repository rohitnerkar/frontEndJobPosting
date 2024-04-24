import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./applications.css"
import { Link } from 'react-router-dom';
export default function Application() {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('https://jobpostingbackend.onrender.com/api/application');
        setApplications(response.data);
        console.log(response.data)
      } catch (err) {
        console.error(err);
        setError('Error fetching applications');
      }
    };

    fetchApplications();
  }, []);
  return (
    <div >
      <h1 className='text-3xl font-semibold'>My applications</h1>
    <div className='flex justify-center' id='table'>

<div class="applications flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr className='bg-gray-200'>
           
              <th scope="col" class="px-6 py-4">Company</th>
              <th scope="col" class="px-6 py-4">Category</th>
              <th scope="col" class="px-6 py-4">Applied On</th>
              <th scope="col" class="px-6 py-4">Application Status</th>
            </tr>
          </thead>
          <tbody>

            {applications.map((app)=>(


            <tr class="border-b dark:border-neutral-500">
           
              <td class="whitespace-nowrap px-6 py-4">{app.company}</td>
              <td class="whitespace-nowrap px-6 py-4">{app.category}   &nbsp; &nbsp;<i class="bi bi-arrow-up-right-square text-blue-300"></i></td>
              <td class="whitespace-nowrap px-6 py-4">{new Date(app?.createdAt).toLocaleDateString()}</td>
              <td class="whitespace-nowrap px-6 py-4 w-14"><span className='bg-blue-200 rounded-2xl w-24 text-blue-500'>Applied</span> <i class="bi bi-question-circle text-blue-400"></i></td>
            </tr>
                    ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
    

<section class=" toBeHide text-gray-600 body-font ">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
    {applications.map((app) => (
  <div key={app._id} className="p-4 md:w-1/3">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium mb-1">{app.company}</h2>
        <h1 className="justify-start text-lg text-gray-900 mb-3 text-left font-bold">{app.category}</h1>
        <div className="flex items-center flex-wrap">
          <p className="text-indigo-500 inline-flex cursor-pointer items-center md:mb-2 lg:mb-0">
            Review Application
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </p>
          &nbsp; &nbsp; &nbsp;
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <i className="bi bi-calendar"></i> Applied on &nbsp; &nbsp; {new Date(app?.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  </div>
))}
  
    </div>
  </div>
</section>

    </div>
  )
}
