
import './App.css';
import Navbar from './Components/Navbars/Navbar';
import { Route, Routes } from 'react-router-dom';

import { auth } from './firebase/firebaseConfig';
import Home from './Components/Home/Home';
import Internships from './Components/internships/Internships';

import Footer from './Components/Footer/Footer';
import DetailsPage from './Components/internships/DetailsPage';
import Jobs from './Components/Jobs/Jobs';
import Detailspage from './Components/Jobs/DetailspageJob';
import Register from './Components/Auth/Register';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './Features/Userslice';
import { useEffect } from 'react';
import Profile from './Components/Profile/Profile';
import Application from './Components/Applications/Application';
import Example from './Components/internships/Example';
import DownNav from './Components/Navbars/DownNav';
// import AdminPanel from './Components/Admin/AdminPanel';
// import PostInternships from './Components/Admin/PostInternship';
// import AdminLogin from './Components/Applications/Admin';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(() => {
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch(login({

        uid:authUser.uid,
        photo:authUser.photoURL,
        name:authUser.displayName,
        email:authUser.email,
        phoneNumber:authUser.phoneNumber
      }))
    }
      else{
        dispatch(logout())
      }
  })
  },[dispatch] );
  return (

    <>
<Navbar/>
<Example/>
<Routes>

    <Route path='/register' element={<Register />} />
    <Route path='/internships' element={<Internships />} />
    <Route path='/Jobs' element={<Jobs />} />
    <Route path="/details" Component={DetailsPage} />
    <Route path="/detailsJob" Component={Detailspage} />
    <Route path='/' element={<Home/>} />
    <Route path='/profile' element={<Profile/>} />
    {/* <Route path='/adminePanel' element={<AdminPanel />} />
    <Route path='/adminLogin' element={<AdminLogin />} />
    <Route path='/postInternship' element={<PostInternships />} /> */}
    <Route path='/applications' element={<Application/>} />
  
  </Routes>
  <DownNav/>
  <Footer/>
   </>
  );
}

export default App;
