import { Button } from "antd";
import work1 from '../assets/img/works/greenable.png'
import workData from '../assets/json/code.json'

export default function Works() {
  return (
    <div className="w-full min-h-[808px] md:min-h-[768px] bg-main bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center py-12">
      <div className="w-4/5 md:w-2/3 flex row justify-start z-[100] mb-6">
        {/* <Button
          className="backdrop-blur-xl bg-white hover:bg-white/70 text-black border-2 border-black p-3 mr-3 rounded-full"
        >
          Web
        </Button>
        <Button
          className="backdrop-blur-xl bg-white hover:bg-white/70 text-black border-2 border-black p-3 rounded-full"
        >
          Design
        </Button> */}
      </div>
      {
        workData.map((item)=>{
          return(
            <div className="p-6 bg-white">
              <div className="flex flex-row px-48">
                <img src={item.image} className="w-96"></img>
                <div className="flex flex-col">
                  <div>{item.title}</div>
                  <div></div>
                  <div>使用技術：</div>
                  <div>{item.label}</div>
                </div>
              </div>
            </div>
          )
        })
      }
      <img src={work1} className="bg-white border-black border-2 p-3 shadow-custom md:w-1/3 w-5/6 mb-4"></img>
    </div>
  );
}
