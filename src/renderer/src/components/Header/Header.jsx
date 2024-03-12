import React from 'react'
import { SearchOutlined, CloudFilled } from '@ant-design/icons';
import { Input, Button } from 'antd';
import syc from '../../assets/imgs/syc.jpg';
import '../../assets/Header.scss'
export default function Header() {
    return (
        <div id="header">

            <Input size="large" className='searchinput' placeholder="Search" prefix={<SearchOutlined />} />
            <div style={{ display: "flex", justifyContent: "space-between", width: "250px" }}>
                <Button className='uploadBtn'><CloudFilled /><span>Upload</span></Button>
                <div style={{ display: "flex", color: "black", alignItems: "center", justifyContent: "space-between", width: "115px" }}>
                    <img src={syc} alt="" />
                    <p style={{ fontWeight: "500" }}>Username</p>
                </div>
            </div>
        </div>
    )
}
