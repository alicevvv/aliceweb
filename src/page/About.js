import myimg from '../assets/img/me.jpg';
import data from '../assets/json/about';

export default function About(){
    return(
        <div className='w-full h-full min-h-[808px] md:min-h-[768px] bg-main bg-center bg-cover bg-no-repeat flex items-center justify-center py-12'>
            <div className="w-4/5 md:w-2/3 backdrop-blur-xl bg-white  border-black border-2 z-[100] mt-10">
                <div className="h-full text-black md:px-12 px-8 py-12">
                    <div className='flex row flex-wrap items-center md:mb-12 mb-6'>
                        <img src={myimg} className="rounded-full border-2 border-black" alt="author" width='120px' height='120px'/>
                        <div className='md:px-6 px-0 md:mt-0 mt-4'>
                            <div className="text-2xl font-bold mb-1">賴薇如&nbsp;&nbsp;|&nbsp;&nbsp;Alice Lai</div>
                            <div className='text-lg font-bold'>Front-End Engineer</div>
                        </div>
                    </div>
                    {data.map((info)=>(
                        <div className='mb-12'>
                            <div className='md:text-2xl text-xl'>{info.title}</div>
                            <hr className='my-3 border-[1px] border-black'/>
                            <ul className='list-disc text-lg ml-6 tracking-wide font-bold'>
                                {info.list.map((deed)=>(
                                    <li className='font-bold'>{deed.name}
                                    {
                                        deed.tasks?
                                        <ul className='list-disc ml-6 mb-6 font-normal'>
                                        {deed.tasks.map((tasks)=>(
                                            <li>
                                                {tasks.name}
                                            </li>
                                        ))}
                                        </ul>:<></>
                                    }
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}