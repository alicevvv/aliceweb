import myimg from '../assets/img/me.jpeg';
import data from '../assets/json/about';

export default function About(){
    return(
        <div className='w-screen h-screen min-h-[896px] md:min-h-[768px] bg-aurora bg-center bg-cover bg-no-repeat flex items-center justify-center'>
            <div className="w-4/5 md:w-2/3 backdrop-blur-xl bg-white/10  border-white border-2 rounded-3xl z-[100]">
                <div className="h-full text-white px-12 py-12">
                    <div className='flex row items-end mb-12'>
                        <img src={myimg} className="rounded-full" alt="author" width='120px' height='120px'/>
                        <div className="text-3xl font-bold px-6 mb-3">賴薇如&nbsp;&nbsp;|&nbsp;&nbsp;Alice Lai</div>
                    </div>
                    {data.map((info)=>(
                        <div className='mb-12'>
                        <div className='text-3xl font-bold'>{info.title}</div>
                        <hr className='my-3 border-[1px]'/>
                        <ul className='list-disc text-lg ml-6'>
                            {info.list.map((deed)=>(
                                <li>{deed.name}</li>
                            ))}
                        </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}