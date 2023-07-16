import { DownOutlined,UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space,Button,message, Tooltip } from 'antd';
import { Link } from 'react-scroll';
import React from 'react';
import { useState } from 'react';
import { CaretUpOutlined, ContainerFilled, PictureFilled, SignalFilled } from '@ant-design/icons';

export default function Headers() {
  const [changeNavColor, setChangeNavColor] = useState(false);
  const changeNav=()=>{
    if(window.scrollY >= 80){
      setChangeNavColor(true)
    }else{
      setChangeNavColor(false)
    }
  }
  const transition = `transition: 0.8s all ease;`
  window.addEventListener("scroll",changeNav)

  return (
    <div className=''>
      <div className={changeNavColor?`w-full justify-center z-[200] fixed hidden lg:flex`:
      `w-full flex justify-center shadow-light bg-white border-main border-b-2 z-[200] fixed`}>
        <div className="w-full h-12 px-12 md:px-6 flex justify-between items-center bg-transparent">
          <Button className={`text-black font-bold text-lg px-3 py-2 bg-white rounded-full hover:bg-main hover:text-white ${changeNavColor?`shadow-light`:``}`}>
            Alice website</Button>
          <div>
            <Link to="about" className={`md:mx-2 text-black font-bold text-lg hover:cursor-default px-3 py-2 bg-white rounded-full hover:bg-main hover:text-white ${changeNavColor?`shadow-light`:``}`} smooth={true}>About</Link>
            <Link to="skills" className={`md:mx-2  text-black font-bold text-lg  hover:cursor-default px-3 py-2 bg-white rounded-full hover:bg-main hover:text-white  ${changeNavColor?`shadow-light`:``}`} smooth={true}>Skills</Link>
            <Link to="works" className={`md:mx-2 text-black font-bold text-lg  hover:cursor-default px-3 py-2 bg-white rounded-full hover:bg-main hover:text-white ${changeNavColor?`shadow-light`:``}`} smooth={true}>Works</Link>
          </div>
        </div>
      </div>
      <div className='fixed lg:hidden bottom-6 right-6 z-[200]'>
        <div className='flex flex-col'>
          <Link to='works' className='bg-white rounded-full flex items-center justify-center align-middle w-10 h-10 shadow-light mt-2' smooth={true}>
            <PictureFilled className='text-xl text-textMain'/>
          </Link>
          <Link to='skills' className='bg-white rounded-full flex items-center justify-center align-middle w-10 h-10 shadow-light mt-2' smooth={true}>
            <SignalFilled className='text-xl text-textMain'/>
          </Link>
          <Link to='about' className='bg-white rounded-full flex items-center justify-center align-middle w-10 h-10 shadow-light mt-2' smooth={true}>
            <ContainerFilled className='text-xl text-textMain'/>
          </Link>
          <Link to='top' className='bg-white rounded-full align-middle text-center w-10 h-10 shadow-light mt-2' smooth={true}>
            <CaretUpOutlined className='text-3xl text-textMain'/>
          </Link>
        </div>
      </div>
    </div>
  );
}
