import React, { useState } from 'react'
import gugeLogo from '../assets/gugeLogo.svg'
// import { Input } from 'antd';
// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'react-vant';
import './Login1.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/'
export default function Login1() {
    // 用户名、邮箱、密码
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    // 判断 用户名、邮箱、密码
    const [usernameflg, setUsernameflg] = useState(false)
    const [emailflg, setEmailflg] = useState(false)
    const [eflg, setEflg] = useState(false)
    const [passwordflg, setPasswordflg] = useState(false)
    const [pflg, setPflg] = useState(false)

    return (
        <div className="login-right-navs">
            <h1>Login</h1>
            <div className='login-right-nav'>
                <p>Username</p>
                <input type="text" placeholder='Enter your Username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
            </div>
            <div className='login-right-nav'>
                <p>Email</p>
                <input type="text" placeholder='Enter your Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className='login-right-nav'>
                <p>Password</p>
                {/* <Input.Password
                            placeholder='Enter your Password'
                            iconRender={(visible) => (password ? (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />) : '')}
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        /> */}
                <Input
                    value={password}
                    type='password'
                    onChange={password => setPassword(password)}
                    placeholder='Enter your Password'
                />
            </div>
            <div className="login-right-center">
                <div className='login-right-center-t'>
                    <div className="login-right-center-t-l">
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </div>
                    <a href="javascript:;">Forgot password?</a>
                </div>
                <button
                    onClick={async () => {
                        // 用户名
                        if (username) {
                            // 邮箱
                            if (email) {
                                // 邮箱格式
                                let Reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                                if (Reg.test(email)) {
                                    // 密码
                                    if (password) {
                                        let obj = { username, password, email }
                                        let { data } = await axios.post('/users/login', obj)
                                        if (data.code === 200) {
                                            // 存储token跳转至首页
                                            localStorage.setItem('token', JSON.stringify(data.token))
                                            navigate('/app/home')
                                            console.log(data.msg);
                                        } else {
                                            console.log(data.msg);
                                        }
                                    } else {
                                        setPasswordflg(true)
                                    }
                                } else {
                                    setEflg(true)
                                }
                            } else {
                                setEmailflg(true)
                            }
                        } else {
                            setUsernameflg(true)
                        }
                    }}
                >Login</button>
                <div className='login-right-center-b'>
                    <hr />or<hr />
                </div>
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
