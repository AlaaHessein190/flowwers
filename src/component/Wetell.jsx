import  { useEffect, useRef } from "react";
import { img3 } from "../assets";
import Typed from "typed.js"; 

const Wetell = () => {
  const el = useRef(null); 
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      showCursor: true,
      strings: [
        " with gifts",
        " with Flowers"
      ],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
    };


    typed.current = new Typed(el.current, options);

    return () => {
      
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="bg-[#F1EFEB] h-[100vh]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 pt-[20px]">
        <div>
          <h1 className="text-5xl md:text-7xl pb-10">
          We tell stories <span ref={el} />
          </h1>
          <button className="border border-black bg-transparent rounded-full text-black px-7 py-3 hover:bg-[#6A6E49] hover:text-white hover:border-none">
            SHOP NOW
          </button>
        </div>
        <div>
          <img src={img3} alt="Image" className="w-[350px] md:w-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Wetell;
