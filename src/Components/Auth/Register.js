import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./form.css"

import { auth,provider } from '../../firebase/firebaseConfig';
import { signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';

function Register() {
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let [firstName,setFirstName]=useState("")
    let [lastName,setLastName]=useState("")
  const [isDivVisible, setDivVisible] = useState(false);
  const navigate=useNavigate();
  
  const [isStudent, setIsStudent] = useState(true);

  const handleSignInClick = () => {
    setIsStudent(true);
    
  };
  const handleEmailAndPass=()=>{
    if(email==="" || password==="" ) {
   alert("Fill The Blanks ")
    }
    else{
     signInWithEmailAndPassword(auth,email,password).then((res)=>{
       console.log(res)
     }).catch((err)=>{
       alert(err)
     })
    }
   }
  const handleJoinInClick = () => {
    setIsStudent(false);
  };
  const showDiv = () => {
    setDivVisible(true);
  };

  const hideDiv = () => {
    setDivVisible(false);
  };
  const handleSingin=()=>{
    signInWithPopup(auth,provider).then((data)=>{
console.log(data)
navigate("/")
email=""
password="";
alert("Sing in Successes Full")
    })

  }
  const handleRegister=()=>{
    if(email==="" || password===""|| lastName===""|| firstName==="" ) {
   alert("Fill The Blanks ")
    }
    else{
     createUserWithEmailAndPassword(auth,email,password).then((res)=>{
       console.log(res) 
      navigate("/")
      email="";
      password="";
      lastName="";
      firstName=""
      alert("Registration is  Successes Full")
      }).catch((err)=>{
         alert(err)
       })
     }
   }

  return (
    <div>
<div   className={`form ${isDivVisible ? 'blur-background' : ''}`}>
  

<div className="form">
<h1>Sing-up and apply for free</h1>

<p className='para3'>1,50,000+ companies hiring on Internshala</p>
<div className="google-auth">
</div>
</div>
<div className='regi'>
   
   <div class="py-6">
     <div class="flex bg-white rounded-lg justify-center shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        
           <div class="w-full p-8 lg:w-1/2">
              
               <a onClick={handleSingin} class="flex items-center h-9 justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                   <div class="px-4 py-3">
                       <svg class="h-6 w-6" viewBox="0 0 40 40">
                           <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                           <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                           <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                           <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                       </svg>
                   </div>
                   <h1 class="px-4 py-3 w-5/6 text-center text-xl text-gray-600 font-bold">Sign in with Google</h1>
               </a>
               <div class="mt-4 flex items-center justify-between">
                   <span class="border-b w-1/5 lg:w-1/4"></span>
                   <a href="/" class="text-xs text-center text-gray-500 uppercase">or </a>
                   <span class="border-b w-1/5 lg:w-1/4"></span>
               </div>
               <div class="mt-4">
                   <label class="block text-gray-700 text-sm font-bold mb-2">Email </label>
                   <input value={email} onChange={(e)=>setEmail(e.target.value)} class=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" placeholder='john@example.com'/>
               </div>
               <div class="mt-4">
                   <div class="flex justify-between">
                       <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                   
                   <input value={password} onChange={(e)=>setPassword(e.target.value)} class=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"   placeholder='Must be atleast 6 characters' type="password"/>
                   </div>
               </div>
               <div className="mt-4 flex justify-between">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
          <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} className=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" placeholder='John' type="text"/>
        </div>
        <div>
          <label className="block  ml-3 text-gray-700 text-sm font-bold mb-2">Last Name</label>
          <input value={lastName} onChange={(e)=>setLastName(e.target.value)} className=" ml-7 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" placeholder='Doe' type="text"/>
        </div>
      </div>
      <small>By signing up, you agree to our <span className='text-blue-500'>Term and Conditions</span>.</small>
               <div class="mt-8">
                   <button class="bg-blue-500 h-9 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600" onClick={handleRegister}>Sing up</button>
               </div>
               <div class="mt-4 flex items-center justify-between">
                   <span class="-b w-1/5 md:w-1/4"></span>
                   <Link href="/login" class="text-sm text-black  ">Already registered?  <span className='text-blue-500' onClick={showDiv}>Login</span> </Link>
                   <span class="-b w-1/5 md:w-1/4"></span>
               </div>
           </div>
       </div>
   </div>
   {


   }
       </div>
    </div>
    <div className="all">


    {isDivVisible && (
    
    <div className="account-auth">
    <button   className='close' id='loginClose' onClick={hideDiv}><i class="bi bi-x"></i></button>
 <h5 id="state" className="mb-4 justify-center text-center" style={{marginTop:"34px"}}>
   <span id="Sign-in" style={{cursor:"pointer"}} className={`auth-tab ${ isStudent? 'active' : ''}`} onClick={handleSignInClick}>
 Student
   </span>
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <span id="join-in" className={`auth-tab ${!isStudent ? 'active' : ''}`} onClick={handleJoinInClick}>
  Employee and T&P
   </span>
 </h5>

 {isStudent ? (
<div class="py-6">
<div class="flex bg-white rounded-lg justify-center  overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
   
      <div class="w-full p-8 lg:w-1/2">
         
          <a onClick={handleSingin}  class="flex items-center h-9 justify-center mt-4 text-white bg-slate-100 rounded-lg = hover:bg-gray-100">
              <div class="px-4 py-3">
                  <svg class="h-6 w-6" viewBox="0 0 40 40">
                      <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
                      <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
                      <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
                      <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
                  </svg>
              </div>
              <h1 class="px-4 py-3 w-5/6 text-center text-sm text-gray-600 font-bold">Login with Google</h1>
          </a>
          <div class="mt-4 flex items-center justify-between">
              <span class="border-b w-1/5 lg:w-1/4"></span>
              <a href="/" class="text-xs text-center text-gray-500 uppercase">or </a>
              <span class="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <div class="mt-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">Email </label>
              <input class=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='john@example.com'/>
          </div>
          <div class="mt-4">
              <div class="flex justify-between">
                  <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                  <a href="/" class="text-xs text-blue-500">Forget Password?</a>
              </div>
              <input class=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"   placeholder='Must be atleast 6 characters' value={password} onChange={(e)=>setPassword(e.target.value)} type="password"/>
          </div>
      

          <div class="mt-8">
              <button class="bg-blue-500 h-9 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600" onClick={handleEmailAndPass}>Login</button>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <p className='text-sm'>New to Internshala? Register (<span className='text-blue-500 cursor-pointer ' onClick={hideDiv}>Student</span>/ <span className='text-blue-500 cursor-pointer'>Company</span>)</p>
          </div>
      </div>
  </div>
</div>
 ):
 (
   <div class="py-6">
   <div class="flex bg-white rounded-lg justify-center  overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
      
         <div class="w-full p-8 lg:w-1/2">
            
         
             <div class="mt-4 flex items-center justify-between">
            
             </div>
             <div class="mt-4">
                 <label class="block text-gray-700 text-sm font-bold mb-2">Email </label>
                 <input class=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='john@example.com'/>
             </div>
             <div class="mt-4">
                 <div class="flex justify-between">
                     <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                     <a href="/" class="text-xs text-blue-500">Forget Password?</a>
                 </div>
                 <input value={password} onChange={(e)=>setPassword(e.target.value)} class=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"   placeholder='Must be atleast 6 characters' type="password"/>
             </div>
             <div class="mt-8">
                 <button class="bg-blue-500 h-9 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600">Login</button>
             </div>
             <div class="mt-4 flex items-center justify-between">
             <p className='text-sm'>New to Internshala? Register (<span className='text-blue-500 cursor-pointer ' onClick={hideDiv}>Student</span>/ <span className='text-blue-500 cursor-pointer'>Company</span>)</p>
             </div>
         </div>
     </div>
 </div>
 )}
</div>

      )}
          </div>
    </div>


  )
}

export default Register
