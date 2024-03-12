import React, { useState } from 'react'
import './Forgotpwd.scss'
import gugeLogo from '../assets/gugeLogo.svg'

export default function Forgotpwd() {
    const [email,setEmail] = useState('')
    return (
        <div className="login-right-navs">
            <div className="login-right-navs-nav">
                <h1 >Forgot your password?</h1>
                <p>Enter your email address and we will send you instructions on how to reset your password.</p>
                <div className='login-right-nav' style={{marginTop:'30px',marginBottom:'30px'}}>
                    <p>Email</p>
                    <input type="text" placeholder='Enter your Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="login-right-center">
                    <button>Recover Email</button>
                </div>
            </div>
            <div className='login-right-center-b'>
                <hr />or<hr />
            </div>
            <div className="login-right-bottom">
                <div className="login-right-bottom-t">
                    <img src={gugeLogo} alt="" />
                </div>
                <p>Don't have an account? <span onClick={() => { navigate('/app/login/register') }}>Create Account</span></p>
            </div>
        </div>
    )
}
