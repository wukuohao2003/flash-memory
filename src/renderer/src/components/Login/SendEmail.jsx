import React, { useEffect, useState } from 'react'
import './Forgotpwd.scss'
import sendEmail from '../../assets/sendEmail.svg'
import gugeLogo from '../../assets/gugeLogo.svg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/'
export default function SendEmail() {
    const navigate = useNavigate()
    const [flg, setFlg] = useState(false)

    const getflg = async () => {
        let { data } = await axios.get('/users/flg')
        setFlg(data.flg)
    }

    useEffect(() => {
        const interval = setInterval(async () => {
            await getflg()
            if (flg) {
                clearInterval(interval); // 停止轮询
                navigate('/app/login/login')
            }
        }, 1000); // 每秒轮询一次

        return () => clearInterval(interval); // 在组件卸载时清除定时器
    }, [flg, navigate]);
    return (
        <div className='login-right-navs' style={{ textAlign: 'center' }}>
            <h1>Check your email</h1>
            <img src={sendEmail} alt="" style={{ width: '35%', height: '35%' }} />
            <p style={{ width: '60%', textAlign: 'center', fontSize: '12px', margin: '0 auto' }}>We've sent an email to {JSON.parse(localStorage.getItem('Email'))} to verify your account.</p>
            <div className="login-right-center" style={{ marginTop: '6%' }}>
                <button onClick={() => { window.open('https://mail.qq.com', '_blank') }}>Open My Email</button>
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
