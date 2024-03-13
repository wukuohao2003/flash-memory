import React, { useState } from 'react'
import gugeLogo from '../../assets/gugeLogo.svg'
// import { Input } from 'antd';
// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input } from 'react-vant';
import './Login1.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';

axios.defaults.baseURL = 'http://localhost:3000/'
export default function Register() {
    // 用户名、邮箱、密码
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwd, setPwd] = useState('')
    const navigate = useNavigate()

    // 判断 用户名、邮箱、密码
    const [flg, setflg] = useState('')

    return (
        <div className="login-right-navs">
            <h1>Create Account</h1>
            <div className='login-right-nav' style={{ border: flg === '请输入用户名' ? '1px solid red' : '' }}>
                <p>Username</p>
                <input type="text" placeholder='Enter your Username' value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div className='login-right-nav' style={{ border: flg === '请输入邮箱' || flg === '请输入正确的邮箱' ? '1px solid red' : '' }}>
                <p>Email</p>
                <input type="text" placeholder='Enter your Email' value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className='login-right-nav' style={{ border: flg === '请输入密码' || flg === '两次输入密码不一致' ? '1px solid red' : '' }}>
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
                    placeholder='Enter Password'
                />
            </div>
            <div className='login-right-nav' style={{ border: flg === '请确认密码' || flg === '两次输入密码不一致' ? '1px solid red' : '' }}>
                <p>Confirm Password</p>
                <Input
                    value={pwd}
                    type='password'
                    onChange={password => setPwd(password)}
                    placeholder='Confirm Password'
                />
            </div>
            <font>{flg}</font>
            <div className="login-right-center" style={{ height: '100px' }}>
                <div className='login-right-center-t'>

                </div>
                <button
                    onClick={async () => {
                        // 用户名
                        if (username) {
                            setflg('')
                            // 邮箱
                            if (email) {
                                setflg('')
                                // 邮箱格式
                                let Reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                                if (Reg.test(email)) {
                                    setflg('')
                                    // 密码
                                    if (password) {
                                        setflg('')
                                        // 确认密码
                                        if (pwd) {
                                            setflg('')
                                            // 密码和确认密码
                                            if (password === pwd) {
                                                setflg('')
                                                let obj = { username, password, email }
                                                let { data } = await axios.post('/users/register', obj)
                                                if (data.code === 200) {
                                                    // 注册成功跳转至登录
                                                    navigate('/app/login/login')
                                                    message.success(data.msg)
                                                } else {
                                                    message.warning(data.msg)
                                                }
                                            } else {
                                                setflg('两次输入密码不一致')
                                            }
                                        } else {
                                            setflg('请确认密码')
                                        }
                                    } else {
                                        setflg('请输入密码')
                                    }
                                } else {
                                    setflg('请输入正确的邮箱')
                                }
                            } else {
                                setflg('请输入邮箱')
                            }
                        } else {
                            setflg('请输入用户名')
                        }
                    }}
                >Create Account</button>
                <div className='login-right-center-b'>
                    <hr />or<hr />
                </div>
            </div>
            <div className="login-right-bottom">
                <div className="login-right-bottom-t">
                    <img src={gugeLogo} alt="" />
                </div>
                <p>Don't have an account? <span onClick={() => { navigate('/app/login/login') }}>Login</span></p>
            </div>
        </div>
    )
}
