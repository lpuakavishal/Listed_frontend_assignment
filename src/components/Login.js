import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom';
import {FcGoogle} from "react-icons/fc"
import {AiFillApple} from "react-icons/ai"

function Login() {
  return (
   

    <div className="flex">
        <div className='basis-[40%] h-[100vh] border box1 bg-black'> 
            <div className='mt-[45vh] mx-[11.5vw]'>
               <h1 className='l_board'>Board.</h1>

            </div>
    

        </div>
        <div className='basis-[60%]  mt-[24vh] mx-[15.5vw] '>
            <div>
                <div>
                    <h2 className='sing_1'>Sign In</h2>
                    <p className='sing_1_1'>Sign in to your account</p>
                </div>
                <div className='g_bar'>
                    <span className='span_1'>
                        <span className='px-[0.75rem]'><FcGoogle/></span>
                        <span className='span_1t'>Sign in with Google</span>
                    </span>
                    <span className='span_1'>
                        <span className='px-[0.75rem]'><AiFillApple/></span>
                        <span className='span_1t'>Sign in with IOS</span>
                    </span>
                </div>
                <div>
                    <div className='bg-[#FFFFFF] lo_box'>
                        <div className='pt-[3.7vh] px-[1.95vw]'>
                            <p>Email address</p>
                            <input type='text' className='lo_input' placeholder=' Enter_your_mail'/>
                            <p className='mt-[20px]'>Password</p>
                            <input type='Password' className='lo_input' placeholder=' Password'/>
                            <p className='mt-[20] fo_lo_input'>Forgot password?</p>
                            <div className='bu_div'><Link to="/home"><button className='lo_button'>Sign In</button></Link></div>

                        </div>

                    </div>
                    <div className='mt-[5vh] px-[3rem]'>
                        <span className='ou_div'>Don’t have an account?</span>
                        <span className='ou_div1'>Register here</span>
                    </div>

                </div>

            </div>
         
        </div>
    </div>
  )
}

export default Login