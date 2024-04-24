import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Admin() {
    const [adminName,setAdminName]=useState("")
    const [adminpassword,setAdminpassword]=useState("")

const navigate=useNavigate();
   const handleAdminLogin= async()=>{
    if (adminName==="" ||adminpassword==="") {
        alert("Fill the Required")
    }
    else{
        const bodyJson={
            username:adminName,
            password:adminpassword,
        }
        await axios.post('https://jobpostingbackend.onrender.com/api/admin/loginAdmin/',bodyJson).then((res)=>{
            alert("Logged In successfully")
    navigate("/adminPanel")
        }).catch((err)=>{
            console.log(err)
        })
            
    }
   }
  return (
    <>
      <div class="bg-cover bg-center " style={{"background-image": "url('https://shorturl.at/vPR13')"}}>
    <div class="h-screen flex justify-center items-center">
        <div class="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
            <h1 class="text-3xl font-bold mb-8 text-center">Admin Login</h1>
            <form>
                <div class="mb-4">
                    <label class="block font-semibold text-gray-700 mb-2" for="email">
                        Admin Name
                    </label>
                    <input
                        class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email"value={adminName} onChange={(e)=>setAdminName(e.target.value)} placeholder=" Admin Name" />
                </div>
                <div class="mb-4">
                    <label class="block font-semibold text-gray-700 mb-2" for="password">
                        Password 
                    </label>
                    <input
                        class="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" value={adminpassword} onChange={(e)=>setAdminpassword(e.target.value)} type="password" placeholder="Enter your password" />
                  
                </div>
                <div class="mb-6">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button" onClick={handleAdminLogin}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
    </>
  )
}

export default Admin
