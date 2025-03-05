import { img25, img26, img27, img28, img29, img30, img32 } from "../assets";
import { FaStar } from "react-icons/fa";

const Followus = () => {
  return (
    <div className="pt-40">
      <div className="flex flex-col items-center">
        <div className="text-center pb-12">
          <h1 className="text-3xl">Follow Us</h1>
          <p className="text-gray-500">@fiore</p>
        </div>
        
        <div className="w-full">
          <div className="grid grid-cols-2 mdl:grid-cols-6 gap-0">
            <img src={img25} alt="" className="w-full object-cover" />
            <img src={img26} alt="" className="w-full object-cover" />
            <img src={img27} alt="" className="w-full object-cover" />
            <img src={img28} alt="" className="w-full object-cover" />
            <img src={img29} alt="" className="w-full object-cover" />
            <img src={img30} alt="" className="w-full object-cover" />
          </div>
        </div>
        <div className="flex justify-center text-center pt-8">
          <p className="pb-10"> <img src={img32} alt="" />
            Our customers say Excellent
            <div className="flex justify-center">
              <FaStar className="text-[23px] text-[#6A6E49]" />
              <FaStar className="text-[23px] text-[#6A6E49]" />
              <FaStar className="text-[23px] text-[#6A6E49]" />
              <FaStar className="text-[23px] text-[#6A6E49]" />
              <FaStar className="text-[23px] text-[#6A6E49]" />
            </div>
            4.8 out of 5 based on 7,980 reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default Followus;
