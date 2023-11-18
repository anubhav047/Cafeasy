import React from 'react'
import backgroundImage from '../images/food-login-bg.jpeg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast} from 'react-toastify';

const Stafflogin = () => {
    const navigate = useNavigate()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const notifysuccess = (msg) => toast.success(msg);
    const notifyerror = (error) => toast.error(error);
    const handlesubmit = async (e) => {
        e.preventDefault();
        const url ="http://localhost:2000/login";
        const res = await fetch(url,{
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            email,password
          })
        })
        const parsed =await res.json();
        if(parsed.success)
        {
          notifysuccess(parsed.msg);
          navigate("/staffhome");
        }
        else
        {
          notifyerror(parsed.error);
        }
      };
  return (
    <>
    <section class="bg-gray-50" 
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          opacity: 0.9,
        }}
    >
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="custom-heading-font flex items-center mb-6 text-5xl font-bold text-gray-900 text-teal-700">
                <img class="w-12 h-12 mr-2" src="https://img.freepik.com/premium-vector/cute-cupcake_38517-5.jpg?w=2000" alt="logo"/>
                Cafeasy  
            </a>
            <div class="w-full bg-rose-200 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="custom-body-font text-xl font-bold leading-tight tracking-tight text-teal-800 md:text-2xl">
                        Greetings Staff!
                    </h1>
                    <form class="space-y-4 md:space-y-6" action="#" onSubmit={handlesubmit}>
                        <div>
                            <label for="email" class="custom-body-font block mb-2 text-xl font-medium text-teal-800">Your email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={email} required="" onChange={(e) => {
                      setemail(e.target.value)
                    }}/>
                        </div>
                        <div>
                            <label for="password" class="custom-body-font block mb-2 text-xl font-medium text-teal-800">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                        </div>
                        <button type="submit" class="custom-body-font w-full text-teal-800 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Stafflogin