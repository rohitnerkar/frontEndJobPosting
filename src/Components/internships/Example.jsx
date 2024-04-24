import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Features/Userslice';
import axios from 'axios';

function Detailspage() {
  const user = useSelector(selectUser);
  const [jobDetails, setJobDetails] = useState(null);
  const [availability, setAvailability] = useState('');
  const [jobOpening, setJobOpening] = useState([]);
  const [isDivVisible, setDivVisible] = useState(false);

  const navigate = useNavigate();

  let search = window.location.search;
  const params = new URLSearchParams(search);
  const id = params.get("q");

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jobpostingbackend.onrender.com/api/job/${id}`);
        setJobOpening(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    if (Array.isArray(jobOpening) && jobOpening.length > 0) {
      const foundJob = jobOpening.find((job) => job.id === id);
      if (foundJob) {
        setJobDetails(foundJob);
      } else {
        console.log("Job not found");
      }
    }
  }, [id, jobOpening]);

  if (!jobDetails) {
    return <div>Loading...</div>; // You can show a loading indicator while fetching data
  }

  const showDiv = () => {
    if (user === "") {
      navigate("/register");
    } else {
      setDivVisible(true);
    }
  };

  const hideDiv = () => {
    setDivVisible(false);
  };

  return (
    <div>
      <h1>{jobDetails.title}</h1>
      <p>Description: {jobDetails.description}</p>
      <p>Location: {jobDetails.location}</p>
      {/* Add more details as needed */}

      <button onClick={showDiv}>Show Div</button>
      {isDivVisible && <div>This is a visible div</div>}

      <button onClick={hideDiv}>Hide Div</button>
    </div>
  );
}

export default Detailspage;
