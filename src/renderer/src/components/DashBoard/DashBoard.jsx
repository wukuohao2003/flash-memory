import React, { useState } from 'react'
import '../../assets/dashboard.scss'
import { AppstoreFilled, FolderFilled, VideoCameraFilled, StarFilled, FileImageFilled } from '@ant-design/icons';
export default function DashBoard() {
  let svgs = [
    {
      id: 1,
      icons: <AppstoreFilled />,
      title: 'Dashboard'
    },
    {
      id: 2,
      icons: <FolderFilled />,
      title: 'Documents'
    },
    {
      id: 3,
      icons: <VideoCameraFilled />,
      title: 'Video,Audio'
    },
    {
      id: 4,
      icons: <StarFilled />,
      title: 'Others'
    },
    {
      id: 5,
      icons: <FileImageFilled />,
      title: 'Images'
    }
  ]
  let [navi, setnavi] = useState(0)
  

  return (
    <div id="dashboard">
      <div className="left" >
        <div className='logo'>
          <svg width="53" className='logoimg' height="53" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" rx="24" fill="#CAD2FF" />
            <rect x="21" y="20" width="32" height="32" rx="16" fill="#7288FA" />
          </svg>
          <p className='storage'>Storage</p>
        </div>
        <div className="nav">

          <ul>
            {
              svgs.map((item, index) => {
                return <li className='navli' key={item.id}  style={{backgroundColor:navi===index?'#7288FA':''}}
                onClick={()=>{
                  setnavi(index)
                }}>
                  <span style={{color:navi===index?'white':'#C2C6CA'}} >{item.icons}</span>
                  <p style={{color:navi===index?'white':''}}>{item.title}</p>
                </li>
              })
            }
          </ul>

        </div>

      </div>
      <div className="right">

      </div>
    </div>
  )
}
