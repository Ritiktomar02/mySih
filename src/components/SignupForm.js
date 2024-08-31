import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";



const SignupForm = () => {
    

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    

       
    


  return (
          <div>
           <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"  
                            placeholder="Enter First Name"
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>
                        <input
                            required
                            type="text"  
                            placeholder="Enter Last Name"
                            className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
            </div>
            <div className='mt-[20px]'>
            <label className='w-full mt-[20px]'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="email"
                        placeholder="Enter Email Address "
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
            </label>
            </div>
            

            <div className='w-full flex gap-x-4 mt-[20px]'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        placeholder="Enter Password"
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span
                     className='absolute right-3 top-[38px] cursor-pointer' 
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? 
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type= {showConfirmPassword ? ("text") : ("password")}
                        placeholder="Confirm Password"
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                    <span 
                     className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ?

                         (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                         (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>
        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
            Create Account
        </button>
    

    </div>
  )
}

export default SignupForm
