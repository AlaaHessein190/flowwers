import { img33 } from "../assets";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaHeart } from "react-icons/fa";

const Footer1 = () => {
  return (
    <div className="bg-[#F1EFEB]">
      <div className="container mx-auto pt-24">
        <div className="flex justify-start pb-10">
          <img src={img33} alt="" />
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between py-5 gap-10">
          <div className="flex flex-col gap-10">
            <p className="w-[190px]">
              Goddard Hall 80<br />
              Washington Square E,<br />
              New York, NY 10003, USA
            </p>
            <div className="flex flex-col">
              <p>+44 (0) 207 739 1521</p>
              <p className="pb-10 md:pb-0">info@ferme.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <Link to="/myaccount" className="hover:underline cursor-pointer">
              My account
            </Link>
            <Link to="/faq" className="hover:underline cursor-pointer">
              FAQ
            </Link>
            <Link to="/cheackorder" className="hover:underline cursor-pointer">
              Check Order Status
            </Link>
            <Link to="/storlocator" className="hover:underline cursor-pointer">
              Store Locator
            </Link>
            <Link to="/contactus" className="hover:underline cursor-pointer pb-10 md:pb-0">
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col gap-7">
            <h4 className="text-2xl">Follow Us</h4>
            <div className="flex gap-10 cursor-pointer">
              <FaInstagram className="text-[25px] hover:text-[#6A6E49]" />
              <FaFacebook className="text-[25px] hover:text-[#6A6E49]" />
              <FaTwitter className="text-[25px] hover:text-[#6A6E49]" />
              <FaYoutube className="text-[25px] hover:text-[#6A6E49]" />
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#6A6E49]"></div>
        <div className="flex flex-col lg:flex-row lg:justify-between py-4">
          <p>© 2025 VamTam. All rights reserved.</p>
          <div className="flex">
            <p>Alaa Hessein</p>
            <FaHeart className="pt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
