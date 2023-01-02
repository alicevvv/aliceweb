import { DownOutlined,UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space,Button,message, Tooltip } from 'antd';
import React from 'react';


export default function Headers() {
  return (
    <div className="w-full absolute flex justify-center shadow-light bg-main border-black border-b-2 z-[200]">
      <div className="md:w-8/12 w-9/12 h-12 flex flex-row flex-wrap justify-between items-center bg-transparent">
        <Button className="text-black" href="/"><span className='text-black font-bold text-lg'>Alice website</span></Button>
        <div>
          <Button href="/about" className="md:mx-4 mx-2"><span className='text-black font-bold text-lg'>about</span></Button>
          <Button className="md:mx-4 mx-2" href='/works'><span className='text-black font-bold text-lg'>works</span></Button>
          {/* <button variant="text" className="mx-4 bg-white border-black border-2 px-2" href='/works'><span className='text-black font-bold'>contacts</span></button> */}
          {/* <button href="https://github.com/alicevvv">github</button> */}
          {/* <button href="https://codepen.io/aavlice">codepen</button> */}
        </div>
      </div>
    </div>
  );
}
