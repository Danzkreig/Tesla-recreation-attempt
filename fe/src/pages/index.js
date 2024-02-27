import { useState, useEffect, useRef } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
export default function Model() {
  const modely = useRef();
  const model3 = useRef();
  const modelx = useRef();
  const models = useRef();
  const cybertruck = useRef();
  const experience = useRef();
  const solar = useRef();
  const solarroof = useRef();
  const powerwall = useRef();
  const accessories = useRef();
  const [special, setSpecial] = useState("");
  const [title, setTitle] = useState("Model Y");
  const [supporting, setSupport] = useState(
    "After Federal Tax Credit & Est. Gas Savings"
  );
  const [pricing, setPricing] = useState("From $31,890*");
  const [whitebtn, setWhite] = useState("");
  const [blackbtn, setBlack] = useState("");
  const [subject, setSubject] = useState(
    "*Price before incentives and savings is $42,990, excluding taxes and fees. Subject to change"
  );
  const [click, setClick] = useState("Learn about est. gas savings.");
  const { scrollY } = useScroll();
  function logScroll() {
    console.log(scrollY);
  }
  return (
    <div
      onScroll={() => {
        logScroll();
      }}
    >
      {/* Fixed Info below! */}
      <div>
        {/* Navbar below! */}
        <div className="flex flex-row justify-between fixed w-screen text-white transition-all duration-300">
          <a href="localhost:3000/" className="ml-12 text-3xl  tracking-widest">
            <h1>Tesla</h1>
          </a>
          <div className="lg:flex-row lg:flex lg:gap-8">
            <h1 className="p-2">Vehicles</h1>
            <h1 className="p-2">Energy</h1>
            <h1 className="p-2">Charging</h1>
            <h1 className="p-2">Discover</h1>
            <h1 className="p-2">Shop</h1>
          </div>
          <div className="flex flex-row gap-2 mr-2">
            <a
              className="rounded-full border-white border-[1px] border-solid cursor-pointer p-1"
              href="localhost:3000/support"
            >
              ?
            </a>
            <a className="rounded-full border-white border-[1px] border-solid cursor-pointer p-1">
              🌐
            </a>
            <a
              className="rounded-full border-white border-[1px] border-solid cursor-pointer p-1"
              href="localhost:3000/log-in"
            >
              👤
            </a>
          </div>
        </div>
        {/* Navbar above! */}
        <div className="flex flex-col justify-center text-center text-white fixed w-screen pt-16">
          <h3>{special}</h3>
          <h1 className="text-5xl">{title}</h1>
          <h4 className="text-2xl">{pricing}</h4>
          <p className="font-light">{supporting}</p>
        </div>
      </div>
      {/* Fixed Content above! */}
      {/* Main content below! */}
      <div className="snap-y snap-mandatory overflow-y-scroll w-screen h-screen">
        {/* Model Y below! */}
        <div
          className="snap-always snap-center w-screen h-screen bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("https://www.motortrend.com/uploads/2022/11/2023-Tesla-Model-Y-12.jpg")`,
          }}
        >
          <div className="transition-all ease-in-out duration-700 text-white text-center pt-16"></div>
        </div>
        {/* Model 3 below! */}
        <div
          className="snap-always snap-center w-screen h-screen bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg")`,
          }}
        >
          <div className="transition-all ease-in-out duration-700 text-black text-center pt-16">
            <h2 className="text-3xl font-light">Reengineered</h2>
            <h1 className="text-5xl ">Model 3</h1>
            <h3 className="text-2xl font-light">Lease starting at $329/mo*</h3>
          </div>
          <div>
            <button></button>
          </div>
        </div>
        {/* Model X below! */}
        <div
          className="snap-always snap-center w-screen h-screen bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD")`,
          }}
        >
          <div className="transition-all ease-in-out duration-700 text-black text-center pt-16">
            <h1 className="text-5xl">Model X</h1>
            <h3 className="text-2xl">From $68,590*</h3>
            <p className="text-sm font-thin">
              After Federal Tax Credit & Est. Gas Savings
            </p>
          </div>
        </div>
        {/* Model S below! */}
        <div
          className="snap-always snap-center w-screen h-screen"
          style={{
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/en/a/a3/Bobdobbs.png")`,
          }}
        ></div>
        {/* Cybertruck below! */}
        <div
          className="snap-always snap-center w-screen h-screen"
          style={{
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/5/51/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2818-06-2023%29_%28cropped%29.jpg")`,
          }}
        ></div>
        {/* Experience below! */}
        <div
          className="snap-always snap-center w-screen h-screen"
          style={{
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/J._R._R._Tolkien%2C_ca._1925.jpg/440px-J._R._R._Tolkien%2C_ca._1925.jpg")`,
          }}
        ></div>
        {/* Solar below! */}
        <div
          className="snap-always snap-center w-screen h-screen"
          style={{
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/6742_-_Moscow_-_Poklonnaya_Hill_-_Tank.JPG/1600px-6742_-_Moscow_-_Poklonnaya_Hill_-_Tank.JPG")`,
          }}
        ></div>
        {/* Solar Roof below! */}
        <div
          className="snap-always snap-center w-screen h-screen"
          style={{
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Ricotta_affumicata_della_sila.jpg/440px-Ricotta_affumicata_della_sila.jpg")`,
          }}
        ></div>
        {/* Power Wall below! */}
        <div
          className="snap-always snap-center w-screen h-screen"
          style={{
            backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Labradoodle-Brown-Male-SideFace.jpg/1440px-Labradoodle-Brown-Male-SideFace.jpg")`,
          }}
        ></div>
        {/* Accessories below! */}
        <div
          className="snap-always snap-center w-screen h-screen"
          style={{
            backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQsJFfvqYdRqNJRB9ff_g9szJYnJkMnvvLqZ1fYAQ6vA&s")`,
          }}
        ></div>
      </div>
      {/* Main content above! */}
    </div>
  );
}
