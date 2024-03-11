import React, { useState } from 'react'
import './Login.scss'
import loginleftbottom from '../assets/loginleftbottom.svg'
import { Outlet, useLocation } from 'react-router-dom'

export default function Login() {
    const location = useLocation()
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
                <Outlet></Outlet>
            </div>
        </div>
    )
}
