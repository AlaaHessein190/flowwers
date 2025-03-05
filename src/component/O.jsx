import { Link } from "react-router-dom";

const O = () => {
  return (
    <div className="flex justify-center items-center text-center py-40 relative">
      <h1 className="relative text-[200px] font-bold text-gray-500 overflow-hidden group cursor-pointer">
        O
        <span className="absolute inset-0 bg-gradient-to-t from-[#6A6E49] to-[#6A6E49] bg-[length:100%_0%] bg-no-repeat bg-bottom transition-all duration-[2000ms] ease-in-out group-hover:bg-[length:100%_100%] text-transparent bg-clip-text">
          O
        </span>
        <Link to='/ourstory' className="absolute inset-0 flex justify-center items-center text-[20px] text-black font-semibold  transition-colors duration-300">
          OUR STORY
        </Link>
      </h1>
    </div>
  );
};

export default O;
