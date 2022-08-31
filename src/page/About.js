import myimg from '../assets/img/me.jpeg';
import data from '../assets/json/about';

const workData=[{
    "title":"Work Experience",
    "list:":[{
        "name":"玩具與遊戲設計所 互動科技組 碩士 (2021.7 - 今)",
        "tasks":[
            {"name":"系網維護"},
            {"name":"教育部前瞻計畫"},
            {"name":"台電計畫"},
            {"name":"信義國小課後水彩班老師"}
        ]
    },{
        "name":"鑒真數位/區塊科技 前端實習生 約1.5年 (2020.11 - 2022.6)",
        "tasks":[
            {"name":"官網 UI 更新"},
            {"name":"月曆製作"},
            {"name":"報表設計及製作"},
            {"name":"參與專案前端製作"},
            {"name":"使用程式語言：HTML、CSS及CSS框架、Javascript、Vue.js"}
        ]
    },{
        "name":"大自然科學教室 美編人員 約2年 (2019.3 - 2021.4)",
        "tasks":[
            {"name":"平面海報、宣傳單設計"},
            {"name":"官網、粉絲專頁banner、內文圖設計製作"},
            {"name":"課本書籍、邀請卡、環境佈置設計製作"}
        ]
    }]
}]

export default function About(){
    return(
        <div className='w-screen h-full min-h-[808px] md:min-h-[768px] bg-main bg-center bg-cover bg-no-repeat flex items-center justify-center py-12'>
            <div className="w-4/5 md:w-2/3 backdrop-blur-xl bg-white  border-black border-2 z-[100] mt-10">
                <div className="h-full text-black md:px-12 px-8 py-12">
                    <div className='flex row flex-wrap items-end md:mb-12 mb-6'>
                        <img src={myimg} className="rounded-full border-2 border-black" alt="author" width='120px' height='120px'/>
                        <div className="text-2xl font-bold md:px-6 px-0 md:mt-0 mt-4 mb-3">賴薇如&nbsp;&nbsp;|&nbsp;&nbsp;Alice Lai</div>
                    </div>
                    {data.map((info)=>(
                        <div className='mb-4'>
                            <div className='md:text-2xl text-xl font-bold'>{info.title}</div>
                            <hr className='my-3 border-[1px] border-black'/>
                            <ul className='list-disc  ml-6 tracking-wide font-bold'>
                                {info.list.map((deed)=>(
                                    <li>{deed.name}
                                    {
                                        deed.tasks?
                                        <ul className='list-disc ml-6 mb-4'>
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

