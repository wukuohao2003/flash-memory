import React, { useState } from 'react'
import './Forgotpwd.scss'
import gugeLogo from '../../assets/gugeLogo.svg'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'
export default function Forgotpwd() {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    return (
        <div className="login-right-navs">
            <div className="login-right-navs-nav">
                <h1 >Forgot your password?</h1>
                <p>Enter your email address and we will send you instructions on how to reset your password.</p>
                <div className='login-right-nav' style={{ marginTop: '30px', marginBottom: '30px' }}>
                    <p>Email</p>
                    <input type="text" placeholder='Enter your Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="login-right-center">
                    <button onClick={async () => {
                        if (email) {
                            // 邮箱格式
                            let Reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                            if (Reg.test(email)) {
                                const { data } = await axios.post('/users/email', { email })
                                if (data.code === 200) {
                                    localStorage.setItem('Email', JSON.stringify(email))
                                    navigate('/app/login/sendEmail')
                                    console.log(data.info);
                                    message.success(data.msg)
                                } else {
                                    message.error(data.msg)
                                }
                            } else {
                                message.warning('请输入正确邮箱')
                            }
                        } else {
                            message.warning('请输入你的邮箱')
                        }
                    }}>Recover Email</button>
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
