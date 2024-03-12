import React, { useState } from 'react'
import Header from '../Header/Header'
import '../../assets/dashboard.scss'
import leftbottom from '../../assets/loginleftbottom.svg'
import { Flex, Progress, ConfigProvider } from 'antd';
import syc from '../../assets/imgs/syc.jpg';
import { AppstoreFilled, FolderFilled, VideoCameraFilled, StarFilled, FileImageFilled } from '@ant-design/icons';
export default function DashBoard() {
  const customTheme = {
    components: {
      Progress: {
        // 自定义 Progress 组件的线条颜色  
        circleTextFontSize: "13px"
        // 自定义 Progress 组件的背景颜色（如果适用）  
        // backgroundColor: '#f0f0f0',  
        // ... 其他你想要覆盖的样式变量  
      },
    },
  };
  const [total_capacity, setTotalCapacity] = useState(128)
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
  const [sorts, setSorts] = useState([
    { id: 1, title: 'Documents', storage: 12, last_update: '10:15am,10Oct' },
    { id: 2, title: 'Images', storage: 20, last_update: '10:15am,10Oct' },
    { id: 3, title: 'Video,Audio', storage: 20, last_update: '10:15am,10Oct' },
    { id: 4, title: 'Others', storage: 38, last_update: '10:15am,10Oct' },
  ])
  const [contactList, setContactList] = useState([
    { id: 1, src: syc, name: 'Alice Emma', email: 'emmaart1234@gmail.com' },
    { id: 2, src: syc, name: 'Anne Jennifer', email: "jennifer@gmail.com" },
    { id: 3, src: syc, name: "Bush Mathew", email: "mathew0909@gmail.com" },
    { id: 4, src: syc, name: "Henry Rebecca", email: "herryrebecca@gmail.com" },
    { id: 5, src: syc, name: "Geogre Michael", email: "art1234@gmail.com" },
    { id: 6, src: syc, name: "Robert Laura", email: "laura@gmail.com" },
  ])
  return (
    <ConfigProvider theme={customTheme}>
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
                  return <li className='navli' key={item.id} style={{ backgroundColor: navi === index ? '#7288FA' : '' }}
                    onClick={() => {
                      setnavi(index)
                    }}>
                    <span style={{ color: navi === index ? 'white' : '#C2C6CA' }} >{item.icons}</span>
                    <p style={{ color: navi === index ? 'white' : '' }}>{item.title}</p>
                  </li>
                })
              }
            </ul>
            <div className="leftimg">
              <img src={leftbottom} alt="" />
              <svg width="253" height="127" viewBox="0 0 253 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.1" width="253" height="127" rx="30" fill="#7288FA" />
              </svg>

            </div>

          </div>

        </div>
        <div className="right">
          <Header></Header>
          <div className="down">
            <div className="down-left">
              <div className="progress-bar">
                <Progress type="dashboard" className='progress'
                  format={(percent) => (
                    <div style={{ whiteSpace: "pre-line", color: "white" }}>
                      <span style={{ fontWeight: "700", fontSize: "20px", }}>{percent}%</span>{`\n`}Space used
                    </div>
                  )}
                  percent={75} gapDegree={30} strokeWidth={11} strokeColor='white' trailColor='#8EA0FB' />
                <div >
                  <p className='progress-bar_p1'>Avaliable Storage</p>
                  <p className='progress-bar_p2' >82GB/{total_capacity}GB</p>
                </div>
              </div>
              <div className="sorts">

                <svg style={{ position: "absolute", zIndex: "100", top: "-8px", left: "-15px" }} width="60" height="60" viewBox="0 0 95 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4" filter="url(#filter0_f_85_1551)">
                    <circle cx="47.2363" cy="48" r="33" fill="#FF7474" />
                  </g>
                  <circle cx="47.2363" cy="43" r="33" fill="#FF7474" />
                  <path d="M57.1509 32.3806C57.3273 32.6578 57.0251 32.9808 56.7047 32.908C56.0781 32.7213 55.3847 32.628 54.6781 32.628H50.3366C50.0899 32.628 49.8575 32.5119 49.7093 32.3147L48.2114 30.3213C48.0236 30.0552 48.2011 29.668 48.5268 29.668H52.1981C54.2794 29.668 56.1128 30.7489 57.1509 32.3806Z" fill="white" />
                  <path d="M58.091 35.7213C57.5176 35.308 56.8643 35.0013 56.1576 34.828C55.6776 34.6946 55.1843 34.628 54.6776 34.628H49.7176C48.9443 34.628 48.891 34.5613 48.4776 34.0146L46.611 31.5346C45.7443 30.3746 45.0643 29.668 42.891 29.668H39.7976C36.5443 29.668 33.9043 32.308 33.9043 35.5613V50.4413C33.9043 53.6946 36.5443 56.3346 39.7976 56.3346H54.6776C57.931 56.3346 60.571 53.6946 60.571 50.4413V40.5213C60.571 38.5346 59.5976 36.788 58.091 35.7213ZM50.4243 48.788H44.0376C43.5176 48.788 43.1176 48.3746 43.1176 47.8546C43.1176 47.348 43.5176 46.9213 44.0376 46.9213H50.4243C50.9443 46.9213 51.3576 47.348 51.3576 47.8546C51.3576 48.3746 50.9443 48.788 50.4243 48.788Z" fill="white" />
                  <defs>
                    <filter id="filter0_f_85_1551" x="0.111328" y="0.875" width="94.25" height="94.25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="7.0625" result="effect1_foregroundBlur_85_1551" />
                    </filter>
                  </defs>
                </svg>


                <svg style={{ position: "absolute", zIndex: "100", top: "155px", left: "-15px" }} width="60" height="60" viewBox="0 0 95 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4" filter="url(#filter0_f_85_5566)">
                    <circle cx="47.2363" cy="48" r="33" fill="#3DD9B3" />
                  </g>
                  <circle cx="47.2363" cy="43" r="33" fill="#3DD9B3" />
                  <path d="M59.437 35.2273C58.8903 34.934 57.7436 34.6273 56.1836 35.7207L54.2236 37.1073C54.077 32.9607 52.277 31.334 47.9036 31.334H39.9036C35.3436 31.334 33.5703 33.1073 33.5703 37.6673V48.334C33.5703 51.4006 35.237 54.6673 39.9036 54.6673H47.9036C52.277 54.6673 54.077 53.0406 54.2236 48.894L56.1836 50.2806C57.0103 50.8673 57.7303 51.054 58.3036 51.054C58.797 51.054 59.1836 50.9073 59.437 50.774C59.9836 50.494 60.9036 49.734 60.9036 47.8273V38.174C60.9036 36.2673 59.9836 35.5073 59.437 35.2273ZM45.9036 42.174C44.5303 42.174 43.397 41.054 43.397 39.6673C43.397 38.2807 44.5303 37.1607 45.9036 37.1607C47.277 37.1607 48.4103 38.2807 48.4103 39.6673C48.4103 41.054 47.277 42.174 45.9036 42.174Z" fill="white" />
                  <defs>
                    <filter id="filter0_f_85_5566" x="0.111328" y="0.875" width="94.25" height="94.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="7.0625" result="effect1_foregroundBlur_85_5566" />
                    </filter>
                  </defs>
                </svg>

                <svg style={{ position: "absolute", zIndex: "100", top: "-8px", left: "135px" }} width="60" height="60" viewBox="0 0 95 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4" filter="url(#filter0_f_85_2255)">
                    <circle cx="47.2363" cy="48" r="33" fill="#56B8FF" />
                  </g>
                  <circle cx="47.2363" cy="43" r="33" fill="#56B8FF" />
                  <path d="M39.5675 51.5092C38.5234 51.5073 37.5062 51.1841 36.6589 50.585C35.8117 49.986 35.1771 49.1413 34.8444 48.1697L34.7977 48.0191C34.6484 47.5602 34.5706 47.0818 34.5671 46.6001V37.6747L31.3321 48.2757C31.1341 49.03 31.2456 49.8305 31.6426 50.505C32.0396 51.1794 32.6904 51.674 33.455 51.8823L54.074 57.3032C54.3313 57.3687 54.5887 57.4001 54.842 57.4001C56.1701 57.4001 57.3836 56.5348 57.7236 55.2597L58.925 51.5092H39.5675ZM43.2344 37.7637C44.7052 37.7637 45.9013 36.5895 45.9013 35.1455C45.9013 33.7016 44.7052 32.5273 43.2344 32.5273C41.7636 32.5273 40.5675 33.7016 40.5675 35.1455C40.5675 36.5895 41.7636 37.7637 43.2344 37.7637Z" fill="white" />
                  <path d="M59.9016 28.5996H39.9C39.0162 28.6006 38.1689 28.9458 37.544 29.5593C36.919 30.1728 36.5675 31.0047 36.5664 31.8723V46.2723C36.5664 48.0763 38.0625 49.5451 39.9 49.5451H59.9016C61.7391 49.5451 63.2352 48.0763 63.2352 46.2723V31.8723C63.2352 30.0684 61.7391 28.5996 59.9016 28.5996ZM39.9 31.2178H59.9016C60.0785 31.2178 60.2481 31.2868 60.3731 31.4095C60.4981 31.5323 60.5684 31.6987 60.5684 31.8723V41.1656L56.356 36.3403C56.1333 36.0891 55.8586 35.8874 55.5503 35.7486C55.242 35.6097 54.9071 35.537 54.5679 35.5352C54.2275 35.5369 53.8917 35.6117 53.5839 35.7544C53.2762 35.8971 53.004 36.1042 52.7864 36.3612L47.834 42.1971L46.2205 40.6171C45.7818 40.187 45.1871 39.9454 44.5671 39.9454C43.947 39.9454 43.3524 40.187 42.9136 40.6171L39.2333 44.2288V31.8723C39.2333 31.6987 39.3035 31.5323 39.4286 31.4095C39.5536 31.2868 39.7232 31.2178 39.9 31.2178Z" fill="white" />
                  <defs>
                    <filter id="filter0_f_85_2255" x="0.111328" y="0.875" width="94.25" height="94.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="7.0625" result="effect1_foregroundBlur_85_2255" />
                    </filter>
                  </defs>
                </svg>


                <svg style={{ position: "absolute", zIndex: "100", top: "155px", left: "135px" }} width="60" height="60" viewBox="0 0 95 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.4" filter="url(#filter0_f_85_5021)">
                    <circle cx="47.2363" cy="48" r="33" fill="#EEA8FD" />
                  </g>
                  <circle cx="47.2363" cy="43" r="33" fill="#EEA8FD" />
                  <path d="M61.4155 35.5932C60.4769 32.4105 57.8222 29.7558 54.6394 28.8171C52.2194 28.1131 50.5474 28.1718 49.3887 29.0371C47.9953 30.0785 47.834 31.9559 47.834 33.2905V36.9426C47.834 40.5507 49.4767 42.384 52.7034 42.384H56.9128C58.2328 42.384 60.1249 42.2227 61.1662 40.8293C62.0609 39.6853 62.1342 38.0133 61.4155 35.5932Z" fill="white" />
                  <path d="M57.3683 44.9951C56.987 44.5551 56.4296 44.3058 55.8576 44.3058H50.6069C48.0255 44.3058 45.9281 42.2084 45.9281 39.627V34.3763C45.9281 33.8042 45.6788 33.2469 45.2388 32.8656C44.8135 32.4842 44.2268 32.3082 43.6694 32.3816C40.2227 32.8216 37.0547 34.7136 34.9866 37.559C32.9039 40.419 32.1412 43.9097 32.8013 47.4005C33.7546 52.4459 37.788 56.4793 42.8481 57.4326C43.6548 57.594 44.4614 57.6673 45.2681 57.6673C47.9228 57.6673 50.4896 56.846 52.6749 55.2473C55.5203 53.1792 57.4123 50.0112 57.8523 46.5645C57.9257 45.9925 57.7497 45.4204 57.3683 44.9951Z" fill="white" />
                  <defs>
                    <filter id="filter0_f_85_5021" x="0.111328" y="0.875" width="94.25" height="94.25" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                      <feGaussianBlur stdDeviation="7.0625" result="effect1_foregroundBlur_85_5021" />
                    </filter>
                  </defs>
                </svg>


                {
                  sorts.map((item, index) => {
                    return (
                      <div key={item.id} className="sort_item">
                        <p style={{ fontSize: "16px", fontWeight: "500" }} className='sort_item_p1'>{item.storage}GB</p>
                        <div className='sort_item_p2'>
                          <p style={{ fontSize: "16px", fontWeight: "700" }}>{item.title}</p>
                          <p style={{ color: "#CCD4E0", fontSize: "14px", paddingTop: "10px", marginTop: "10px", borderTop: "1px solid black", borderColor: "#CCD4E0" }}>Last update</p>
                          <p style={{ fontSize: "14px" }}> {item.last_update}</p>
                        </div>

                      </div>
                    )
                  })
                }



              </div>
            </div>
            <div className="down-right">
              <div className="contact">
                <div className="contact-header">
                  <h3>Contact</h3>
                  <div className='addContactBtn'>+</div>
                </div>

                <div className="contact-list">
                  {
                    contactList.map((item, index) => {
                      return (
                        <div key={item.id} className="contact-list-item">
                          <div className="contact-list-item-left">
                            <img src={(item.src)} alt="avatar" />
                          </div>
                          <div className="contact-list-item-right">
                            <p className="contact-list-item-name">{item.name}</p>
                            <p className="contact-list-item-email">{item.email}</p>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
              <div className="invite">

              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}
