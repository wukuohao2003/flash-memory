import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneLogo from '../../assets/gugeLogo.svg'
import { message } from 'antd'
import axios from 'axios'

export default function Phone() {
    const [phone, setPhone] = useState('')
    const [verify, setVerify] = useState('')
    const navigate = useNavigate()
    const [e, setE] = useState('发送验证码')
    const [time, setTime] = useState(60)
    const [flg, setFlg] = useState(false)

    return (
        <div className="login-right-navs">
            <h1>Phone Login</h1>
            <div className='login-right-nav'>
                <p>Phone</p>
                <input type="text" placeholder='Enter your Username' value={phone} onChange={(e) => { setPhone(e.target.value) }} />
            </div>
            <div className='login-right-nav'>
                <p>Verify</p>
                <div style={{ display: 'flex', alignItems: 'center', height: '18.4px' }}>
                    <input type="text" placeholder='Enter your Email' value={verify} onChange={(e) => { setVerify(e.target.value) }} style={{ width: '85%' }} />
                    <button
                        style={{
                            border: '0',
                            background: 'white',
                            fontSize: '12px',
                            flex: '1',
                            cursor: 'pointer',
                            justifyContent: 'center'
                        }}
                        onClick={async () => {
                            let reg = /^1[3-9]\d{9}$/
                            if (!phone) {
                                message.warning('请输入手机号！')
                                return
                            }
                            if (!reg.test(phone)) {
                                message.warning('请输入正确手机号！')
                                return
                            }
                            if (flg) {
                                return
                            }
                            setFlg(true)
                            let l = time

                            // 发送验证码
                            let { data } = await axios.post('http://localhost:3000/sms/sendSMS', { mobile: phone })
                            console.log(data);
                            let timer = setInterval(() => {
                                l--
                                setTime(l)
                                if (l === 0) {
                                    setTime(60)
                                    clearInterval(timer)
                                    setFlg(false)
                                    setE('重新发送')
                                }
                            }, 1000)
                        }}
                    >{time !== 60 ? time + 's' : e}</button>
                </div>
            </div>
            <div className="login-right-center">
                <button
                    onClick={async () => {
                        if (phone) {
                            if (verify) {
                                const { data } = await axios.post('http://localhost:3000/sms/login', { phone, verify })
                                if (data.code === 200) {
                                    localStorage.setItem('token', JSON.stringify(data.token))
                                    message.success(data.msg)
                                } else {
                                    message.error(data.msg)
                                }
                            } else {
                                message.warning('请填写验证码')
                            }
                        } else {
                            message.warning('手机号不能为空')
                        }
                    }}
                >Login</button>
                <div className='login-right-center-b'>
                    <hr />or<hr />
                </div>
            </div>
            <div className="login-right-bottom">
                <div className="login-right-bottom-t">
                    <img src={PhoneLogo} alt="" onClick={() => { navigate('/app/login/phone') }} style={{ cursor: 'pointer' }} />
                </div>
                <p>Don't have an account? <span onClick={() => { navigate('/app/login/register') }}>Create Account</span></p>
            </div>
        </div>
    )
}
