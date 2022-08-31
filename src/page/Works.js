import { Button } from "antd";
import work1 from '../assets/img/works/greenable.png'
import work2 from '../assets/img/works/chili.png'
import work3 from '../assets/img/works/mushroom.png'
import work4 from '../assets/img/works/workout.png'

export default function Works() {
  return (
    <div className="w-screen min-h-[808px] md:min-h-[768px] bg-main bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center py-12">
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
      <img src={work1} className="bg-white border-black border-2 p-3 shadow-custom md:w-1/3 w-5/6 mb-4"></img>
        <img src={work2} className="bg-white border-black border-2 p-3 shadow-custom md:w-1/6 w-5/6 mb-4"></img>
          <img src={work3} className="bg-white border-black border-2 p-3 shadow-custom md:w-1/6 w-5/6 mb-4"></img>
          <img src={work4} className="bg-white border-black border-2 p-3 shadow-custom md:w-1/6 w-5/6 mb-4"></img>
    </div>
  );
}
