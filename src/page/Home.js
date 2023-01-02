import { Button } from 'antd';
import myImg from '../assets/img/me.jpeg';

export default function Home() {

  return (
    <div className="w-full h-screen min-h-[808px] md:min-h-[768px] bg-main flex items-center justify-center">
      <div className="w-4/5 md:w-2/3 backdrop-blur-xl bg-white  border-black border-2 shadow-custom z-[100]">
        <div className="h-full text-black flex md:flex-row flex-col justify-center items-center py-10">
          <img className="rounded-full mx-6 border-black border-2" src={myImg} style={{width:'120px',height:'120px'}}></img>
          <div className="text-2xl font-bold tracking-wider">賴薇如&nbsp;&nbsp;Alice Lai</div>
        </div>
        <div className='text-center font-bold md:mx-12 mx-6 md:mb-8 mb-6'>歡迎來到我的個人網站，在這裡想與你分享我的經歷、我的作品</div>
        <hr className='md:mx-12 mx-6 border-black border-[1px]'/>
        <div className='md:mx-12 mx-6 flex justify-center my-3'>
          <div className='font-bold tracking-wide md:mx-12 mx-0'>
            <ul className='ml-4' style={{listStyle:'disc'}}>
              <li className='my-2'>現為<span className='border-black font-black border-b-2'>碩士二年級</span></li>
              <li className='my-2'>個性<span className='border-black border-b-2'>樂觀、謹慎、有責任感</span></li>
              <li className='my-2'><span className='border-black border-b-2'>前端工程師</span></li>
              <li className='my-2'>擅長框架：<span className='border-black border-b-2'>React</span>．<span className='border-black border-b-2'>Vue</span></li>
              <li className='my-2'>也喜歡<span className='border-black border-b-2'>網頁設計</span>、<span className='border-black border-b-2'>平面設計</span></li>
            </ul>
          </div>
        </div>
        <hr className='md:mx-12 mx-6 border-black border-[1px] mb-6'/>
        <div className='md:mx-12 mx-6 h-24 flex justify-center items-center mt-6 mb-8'>
          <Button className='border-black border-2 shadow-custom bg-main h-12 font-bold p-2 mx-3 hover:mb-6' href='/about'>我的經歷</Button>
          <Button className='border-black border-2 shadow-custom bg-main h-12 font-bold p-2 mx-3 hover:mb-6' href='/work'>我的作品</Button>
        </div>
      </div>
      
    </div>
  );
}
