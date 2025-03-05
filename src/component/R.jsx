import { Link } from "react-router-dom";

const R = () => {
    return (
      <div className="flex justify-center items-center text-center py-10">
        <h1 className="relative text-[200px] font-bold text-gray-500 overflow-hidden group">
          R
          <span className="absolute inset-0 bg-gradient-to-t from-[#6A6E49] to-[#6A6E49] bg-[length:100%_0%] bg-no-repeat bg-bottom transition-all duration-[1500ms] ease-in-out group-hover:bg-[length:100%_100%] text-transparent bg-clip-text">
            R
          </span>
          <Link to='/blog' className="absolute inset-0 flex justify-center items-center text-[30px] text-black font-semibold  transition-colors duration-300">
          Read More
        </Link>
        </h1>
      </div>
    );
  };
  
  export default R;
  