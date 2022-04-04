import { useSpring, animated } from "@react-spring/web";

export default function Bganimate(){
    const animateL = useSpring({
        loop: {reverse:true},
        from: { y:-10 },
        to: { y:10 },
        config: { duration: 3000},
      });
      const animateM = useSpring({
        loop: {reverse:true},
        from: { y:-10 },
        to: { y:10 },
        config: { duration: 3000},
      });
      const animateF = useSpring({
        loop: {reverse:true },
        from: { y:-10 },
        to: {y:10 },
        config: { duration: 3000 },
      });

    return(
        <div className="fixed w-screen h-screen">
      <animated.div
        className="fixed w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-blue-200 shadow-lg"
        style={{ left:'-2%',top:'45%', ...animateF}}
      />
      <animated.div
        className="fixed w-12 h-12 rounded-full bg-gradient-to-r from-blue-200 to-blue-300 shadow-lg"
        style={{ left:'3%',top:'3%', ...animateM}}
      />
      <animated.div
        className="fixed w-40 h-40 rounded-full bg-gradient-to-r from-purple-100 to-blue-400 shadow-lg"
        style={{ left:'6%',top:'85%', ...animateL}}
      />
      <animated.div
        className="fixed w-20 h-20 rounded-full bg-gradient-to-r from-blue-200 to-blue-100 shadow-lg"
        style={{ left:'20%',top:'12%', ...animateM}}
      />
      <animated.div
        className="fixed w-36 h-36 rounded-full bg-gradient-to-r from-blue-400 to-blue-200 shadow-lg"
        style={{ left:'45%',top:'45%', ...animateF}}
      />
      <animated.div
        className="fixed w-28 h-28 rounded-full bg-gradient-to-r from-purple-100 to-blue-400 shadow-lg"
        style={{ left:'60%',top:'75%', ...animateM}}
      />
      <animated.div
        className="fixed w-48 h-48 rounded-full bg-gradient-to-r from-blue-200 to-blue-100 shadow-lg"
        style={{ left:'75%',top:'15%', ...animateL}}
      />
      <animated.div
        className="fixed w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-blue-200 shadow-lg"
        style={{ left:'90%',top:'85%', ...animateF}}
      />
      <animated.div
        className="fixed w-16 h-16 rounded-full bg-gradient-to-r from-blue-300 to-blue-100 shadow-lg"
        style={{ left:'96%',top:'75%', ...animateM}}
      />
      </div>
    )
}