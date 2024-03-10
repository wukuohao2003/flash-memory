import React from 'react'
import './Login.scss'
import loginleftbottom from '../assets/loginleftbottom.svg'
import gugeLogo from '../assets/gugeLogo.svg'

export default function Login() {
    return (
        <div style={{ display: 'flex', width: '100%', height: '100%' }}>
            <div className='login-left'>
                <div className="login-left-top">
                    <div className="login-left-top-t">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="82.630859375" height="81.0703125" viewBox="0 0 82.630859375 81.0703125" fill="none">
                            <g opacity="0.2">
                                <rect x="0" y="0" width="74.83" height="74.83" rx="37.4161491394043" fill="#acbaff" >
                                </rect>
                            </g>
                            <rect x="32.739131927490234" y="31.180124282836914" width="49.89" height="49.89" rx="37.4161491394043" fill="#FFFFFF" >
                            </rect>
                        </svg>
                        <h2>Storage</h2>
                    </div>
                    <div className="login-left-top-b">
                        <h2>Manage your files the best way</h2>
                        <p>Awesome, we've created the perfect place for you to store all your documents.</p>
                    </div>
                </div>
                <div className="login-left-bottom">
                    <img src={loginleftbottom} alt="" />
                </div>
            </div>
            <div className='login-right'>
                <div className="login-right-navs">
                    <h1>Login</h1>
                    <div className='login-right-nav'>
                        <p>Username</p>
                        <input type="text" placeholder='Enter your Username' />
                    </div>
                    <div className='login-right-nav'>
                        <p>Email</p>
                        <input type="text" placeholder='Enter your Email' />
                    </div>
                    <div className='login-right-nav'>
                        <p>Password</p>
                        <input type="text" placeholder='Enter your Password' />
                    </div>
                    <div className="login-right-center">
                        <div className='login-right-center-t'>
                            <div className="login-right-center-t-l">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <a href="javascript:;">Forgot password?</a>
                        </div>
                        <button>Login</button>
                        <div className='login-right-center-b'>
                            <hr />or<hr />
                        </div>
                    </div>
                    <div className="login-right-bottom">
                        <div className="login-right-bottom-t">
                            <img src={gugeLogo} alt="" />
                        </div>
                        <p>Don't have an account? <span>Create Account</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
