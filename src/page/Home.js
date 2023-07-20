import myImg from '../assets/img/me.jpg';
import aboutMe from '../assets/json/about';
import workData from '../assets/json/code.json'
import skills from '../assets/json/skill.json'

import { gsap } from 'gsap';
import { Tween, Timeline } from 'react-gsap';
import { Collapse, Button, Modal } from 'antd';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { CloseCircleOutlined } from '@ant-design/icons';

export default function Home() {
  const [modalOpen,setModalOpen] = useState(false)
  const [modalInfo,setModalInfo] = useState({})

  const panelStyle = {
    marginBottom: 6,
    background: '#f0f4fa', //text-second
    borderRadius: 24,
    border: 'none',
    fontWeight: 500,
  };

  const showModal=(item)=>{
    console.log(item);
    setModalInfo(item)
    console.log(modalInfo);
    console.log('in show modal');
    setModalOpen(true);
  }

  const handleModal=()=>{
    setModalOpen(false);
  }

  return (
    <div className="w-full min-h-[808px] md:min-h-[768px] bg-white flex flex-col" id="top">
      <div className='w-full px-2 md:px-16 min-h-screen bg-white flex flex-col mt-12 md:mt-24'>
        <div className="text-black flex md:flex-row flex-col justify-center items-center pt-10 md:py-10">
          <Timeline target={<img className="rounded-full mx-6 border-textMain border-2 myImg" src={myImg} style={{width:'140px',height:'140px'}}></img>}>
            <Tween from={{opacity:0,y:'15%'}} to={{opacity:1,y:0}} duration={2}></Tween>
          </Timeline>
          <div className='md:mt-0 mt-4 pr-1'>
            <div className="text-3xl font-bold tracking-wider mb-1">賴薇如&nbsp;&nbsp;Alice Lai</div>
            <div className='text-xl font-bold font-serif text-main'>Front-End Engineer</div>
          </div>
        </div>
       
        <hr className='md:mx-12 mx-6 my-20 border-gray-100 border-[1px]'/>
       
        <div className='md:mx-12 mx-6 flex justify-center my-3'>
          <div className='font-bold text-xl tracking-wide md:mx-12 mx-0'>
            <ul className='ml-4 leading-9' style={{listStyle:'disc'}}>
              <li className='my-2'><span className='font-black'>數位科技設計學系 玩具與遊戲設計所 碩士</span></li>
              <li className='my-2'>個性<span className='border-black border-b-2'>樂觀、謹慎、有責任感</span></li>
              <li className='my-2'><span className='border-black border-b-2'>前端工程師</span>、平面設計師</li>
              <li className='my-2'>擅長前端框架：<span className='border-black border-b-2'>React.js</span>．<span className='border-black border-b-2'>Vue.js</span></li>
              <li className='my-2'>也喜歡<span className='border-black border-b-2'>網頁設計</span>、<span className='border-black border-b-2'>平面設計</span></li>
            </ul>
          </div>
        </div>
        
        <hr className='md:mx-12 mx-6 my-20 border-gray-100 border-[1px]' id="about"/>
        
        <div className='flex flex-col items-center bg-white'>
          <div className='text-4xl text-textMain font-bold font-serif whitespace-nowrap'>About Me</div>
            {aboutMe.map((info)=>{
              return(
                <div className='w-4/5 md:w-3/5 mt-16'>
                    <div className='md:text-2xl text-xl font-bold font-serif text-textMain'>{info.title}</div>
                    <hr className='my-3 border-[1px] border-black'/>
                    <ul className='list-disc text-lg ml-6 tracking-wide font-bold'>
                        {info.list.map((deed)=>(
                            <li className='font-bold mt-2'>{deed.name}
                            {
                                deed.tasks?
                                <ul className='list-disc mb-12 font-normal text-xl leading-8'>
                                {deed.tasks.map((tasks)=>(
                                    <div>
                                      {
                                        tasks.discription?
                                        <Collapse
                                          accordion={true}
                                          items={[
                                            {
                                              key:1,
                                              label:`${tasks.name}`,
                                              children:`${tasks.discription}`,
                                              style:panelStyle
                                            }
                                          ]}
                                          className='bg-white border-none mt-2 text-[18px] font-bold whitespace-pre-line'
                                        >
                                        </Collapse>
                                        :<li className='ml-6'>
                                        {tasks.name}
                                       </li>
                                      }
                                      
                                    </div>
                                ))}
                                </ul>:<></>
                            }
                            </li>
                            
                        ))
                        }
                    </ul>
                </div>
              )
            })}
        </div>
        
        <hr className='md:mx-12 mx-6 my-20 border-gray-100 border-[1px]' id="skills"/>
        
        <div className='flex flex-col items-center bg-white'>
          <div className='text-4xl text-textMain font-bold font-serif whitespace-nowrap'>Skills</div>
          <div className='w-full flex flex-col items-center'>
            {skills.map((item)=>{
                return(
                  <div className='w-4/5 md:w-3/5 xl:w-2/5 mt-16'>
                    <div className='md:text-2xl text-xl'>{item.title}</div>
                      <hr className='my-3 border-[1px] border-black'/>
                      <ul className='list-disc text-lg ml-6 tracking-wide font-bold'>
                        {item.skills.map((skillname)=>(
                              <li>{skillname.name}</li>
                          ))
                        }
                      </ul>
                  </div>
                )
              })
            }
          </div>
        </div>
        
        <hr className='md:mx-12 mx-6 my-20 border-gray-100 border-[1px]' id="works"/>
        
        <div className='flex flex-col items-center bg-white mb-0 md:mb-20'>
          <div className='text-4xl text-textMain font-bold font-serif whitespace-nowrap mb-12'>Works</div>
          <div className='w-full flex flex-wrap drop-shadow-lg mb-16'>
            {
              workData.map((item)=>{
                return(
                    <Button className="w-full md:w-1/2 xl:w-1/4 mx-4 mb-8 md:mx-0 md:mb-0 p-0 bg-white h-fit border-none relative"
                      onClick={()=>showModal(item)}
                    >
                      <img src={item.image} className="">
                      </img>
                      <div className="absolute top-0 w-full  h-full whitespace-nowrap bottom-0 text-transparent hover:bg-opacity-70 hover:text-white hover:bg-black">
                        <div className='w-full  h-full flex flex-col items-center justify-center font-bold'>
                          <div className='text-2xl mb-2'>{item.title}</div>
                          <div className='flex items-center'>
                            {
                              item.label.map((text)=>{
                                return(
                                  <span className='text-base mx-2'>{text.name}</span>
                                )
                              })
                            }
                          </div>
                        </div>
                      </div>
                    </Button>
                )
              })
            }
            <Modal title={<div className='font-bold text-xl'>{modalInfo["title"]}</div>} open={modalOpen} onOk={handleModal} onCancel={handleModal} destroyOnClose={true} footer={null}>
              <div className='flex flex-row justify-between items-baseline'>
                <div className='flex'>
                  {
                    modalInfo["label"]?<>
                      {
                        modalInfo["label"].map((item)=>{
                          return(
                            <div className='bg-light text-textMain font-medium text-base rounded-md mt-2 px-3 mr-2'>{item.name}</div>
                          )
                        })
                      }
                    </>:<></>
                  }
                </div>
                {
                  modalInfo["url"]?
                  <Button href={modalInfo["url"]} target='_blank' className='bg-main text-white align-middle font-bold rounded-full hover:bg-white'>Visit</Button>:<></>
                }
              </div>
              <img src={modalInfo["image"]} className='shadow-light mt-6 mb-4'></img>
            </Modal>
          </div>
        </div>

      </div>

      <div className='w-full flex justify-center items-center bg-main h-12 text-white font-bold text-sm md:text-base'>LAi WEI JU©2023 Copyright. All Rights Reserved.</div>
    
    </div>
  );
}
