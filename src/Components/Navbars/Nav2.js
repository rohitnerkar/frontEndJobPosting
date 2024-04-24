import React, { useState, useEffect } from 'react';
import logo from '../../Assets/logo.png';
import './nav2.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Features/Userslice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';


function Nav2() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user=useSelector(selectUser);
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarOpen && !e.target.closest('.sidebar') && !e.target.closest('.open-btn')) {
        closeSidebar();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [sidebarOpen]);

  return (
    <>
      <div className="App2 -mt-2 overflow-hidden"  >
      <Link to="/">
  <img src={logo} alt=""  id='nav2-img'/>    </Link>  
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <span  className="cursor-pointer close-btn" onClick={closeSidebar}>
            &times;
          </span>
          {user?(
  <>
  <div className="profile">
   <Link to={"/profile"}>
   <img className='rounded-full justify-center' src={user.photo} alt="" srcset="" />
   </Link> 
    <p className=' text-center'>Profile name <span className='font-bold text-blue-500'>{user?.name}</span></p>
  </div>
  </>
):
(

  
  <div className="auth">
  
</div>
  ) 
}
          <Link to="/internships">internships </Link>
    <Link to="/Jobs">Jobs  </Link>
       
       <Link href="/cont" className='small'>contact Us</Link> 
<hr />
{user?(
  <>
  <div className="addmore">
    
    {user?(
  <Link to={"/applications"}>
  <p>My Applications</p>
  </Link>
    ):(
      <Link to={"/register"}>
      <p>My Applications</p>
      </Link>
    )

    }

  <Link>
  
  <p>View Resume</p>
  </Link>
  <Link>
  <p>More</p>
  </Link>
  <br />
  <br />
<button onClick={()=>{
  signOut(auth)
}}>Log Out <i class="bi bi-box-arrow-right"></i></button>
  
  </div>
  </>
):
(

  
  <div className="addmore">
  <p>Register- As a Student</p>
  <p>Register- As a Employer</p>
  <br />
  <br />

  </div>
  ) 
}

        </div>


        <div className="main">
          <span style={{fontSize:"22px"}} className="open-btn" onClick={openSidebar}>
            &#9776; 
          </span>
        </div>
        
<div className="search2">
<i class="bi bi-search"></i>
    <input type="search"  placeholder='Search'/>
</div>


{user?(
  <>
Book marks
<i  class="text-red-600 bi bi-bookmarks"></i>
  </>
):
(

  
  <Link to="/register" >   <button  className='btn4'>
  Register</button></Link>

  ) 
}



<div className="hire2">
    <hr />
<p>Heir Talent</p>
</div>
      </div>
    </>
  );
}

export default Nav2;
