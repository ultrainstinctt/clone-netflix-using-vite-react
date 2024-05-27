import React ,{useState}from 'react'
import {Link} from "react-router-dom";
const login = () => {
 
    const[remlogin,setremlogin]=useState(true);
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
  
        const handleFormSubmit=(e)=>{
          e,prevent();
          console.log(email);
          console.log(password)
        }


  return (
    <div className=' w-full  h-screen'>
    <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_large.jpg'
     alt=''/>
     <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'/>


     <div className='fixed w-full px-4 py-24 z-20'>
      <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
        <div className='max-w-[320px] mx-auto py-16'>
          <h1 className=' text-3xl font-nsans-bold'>Sign In</h1>
          <form onSubmit= {handleFormSubmit} className="w-full flex flex-col py-4">
            <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' 
              value={email}
              onChange={(e)=>setemail(e.target.value)} required/>
            
            <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current=password'
            value={password}
            onChange={(e)=>setpassword(e.target.value)} required/>


            <button className='bg-red-600 py-3 my-6 rounded-font-nsans-bold'>Sign In</button>
            <div className='flex justify-between items-center text-gray-600'>
              <p>
              <input className="mr-2" type='checkbox'checked={remlogin} onChange={(e)=>setremlogin(e.target.value)} />Remember me
              </p>
              <p>Need Help?</p>
            </div>
            <p className='my-4'> <span className='text-gray-600 mr-2'>Do not have Netflix Account?</span>
            <Link to ="/signup"> Sign up</Link>
             </p>
        
            

          </form>
        </div>
      </div>
     </div>
      
  </div>
  )
}

export default login;