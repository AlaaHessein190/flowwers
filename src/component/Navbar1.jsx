import { useState } from "react";
import { img1 } from "../assets";
import { BsBagDash } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { flowers } from '../assets';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useCart } from "../stores/Cart";
import { useLocation } from 'react-router-dom';
const Navbar1 = () => {
    const location = useLocation();
  const isFlowersPage = location.pathname === '/flowers';
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
    const [isInputVisible, setInputVisible] = useState(false);
    const search = () => {
        setInputVisible(true);
    };
    const [openCard, setOpenCard] = useState(false);
    const toggleCart = () => {
        setOpenCard(prev => !prev); 
    };

    const Links = [
        { id: 1, page: "HOME", path: "/" },
        { id: 2, page: "FLOWERS", path: "/flowers" },
        { id: 3, page: "PLANTS", path: "/plants" },
        { id: 4, page: "SERVICES", path: "/services" },
        { id: 5, page: "FLOWER CLASSES", path: "/flower-classes" },
        { id: 6, page: "OUR STORY", path: "/our-story" },
        { id: 7, page: "BLOG", path: "/blog" }
    ];

    const [isHomeDropdownOpen, setHomeDropdownOpen] = useState(false);
    const [isFlowersDropdownOpen, setFlowersDropdownOpen] = useState(false);

    const handleHomeDropdown = () => {
        setHomeDropdownOpen(true);
    };

    const closeHomeDropdown = () => {
        setHomeDropdownOpen(false);
    };

    const handleFlowersDropdown = () => {
        setFlowersDropdownOpen(true);
    };

    const closeFlowersDropdown = () => {
        setFlowersDropdownOpen(false);
    };

    const [openBar, setOpenBar] = useState(false);

    return (
        <div className={`${isFlowersPage ? "fixed top-0 left-0 w-full z-50" : "relative"} bg-[#F1EFEB] h-[120px] `}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                <div className="mdl:hidden ml-4 cursor-pointer "
                             onClick={() => setOpenBar(!openBar)}>
                            {!openBar ? (
                                <FaBars fontSize="20px" />
                            ) : (
                                <IoClose fontSize="20px" />
                            )}
                        </div>
                        <div className="relative hidden mdl:flex">
                        {isInputVisible ? (
                            <div className="flex items-center ml-[-4px]">
                                <FaSearch className="font-[24px] absolute left-1 text-gray-400" />
                                <input className="border rounded py-1 pl-6" type="text" placeholder="Search Now" />
                            </div>
                        ) : (
                            <h4 onClick={search} className="font-semibold cursor-pointer hover:text-[#6A6E49]">Search</h4>
                        )}
                    </div>
                        <div>
                            <img src={img1} alt="logo" />
                        </div>

                    

                    <div className="flex justify-between gap-5 items-center">
                        <Link to="/myaccount" className="md:flex hidden font-semibold hover:text-[#6A6E49] cursor-pointer">ACCOUNT</Link>
                        <FaRegHeart className="font-[25px] hover:text-[#6A6E49] cursor-pointer " />
                        {openCard ? (
                            <div className={`z-50 absolute right-0 top-0  bg-slate-400 shadow-lg py-16 w-[400px] h-[100vh] transition-all duration-500 ease-in-out transform ${openCard ? "translate-x-0" : "translate-x-full"}`}>
                                <div className="items-center text-center">
                                    <h1 className="text-white absolute left-[20px] top-[20px] font-bold ">Cart ({cart.length})</h1>
                                    {cart.length === 0 ? (
                            <p className="text-white ">Your cart is empty</p>
                        ) : (
                            <div>
                                {cart.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center text-white p-2">
                                        <img src={item.image} alt={item.title} className="w-16 h-16 mr-2" />
                                        <span>{item.title}</span>
                                        <div className="flex items-center">
                                            <button onClick={() => decreaseQuantity(item.id)} className="bg-red-500 px-2 py-1 rounded">-</button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(item.id)} className="bg-green-500 px-2 py-1 rounded">+</button>
                                            <button onClick={() => removeFromCart(item.id)} className="bg-red-600 px-2 py-1 rounded ml-2">Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                                    <IoCloseOutline className="text-white font-[300px] cursor-pointer right-[20px] top-[25px] absolute hover:text-[#6A6E49]" onClick={toggleCart} />
                                </div>
                            </div>
                        ) : (
                            <span className="relative">
                                <BsBagDash className="font-[25px] cursor-pointer" onClick={toggleCart} />
                                <span className="absolute text-white text-xs bg-slate-500 w-4 h-4 rounded-full items-center text-center top-[-6px]  inline-flex justify-center">{cart.length}</span>
                            </span>
                        )}
                    </div>
                </div>

                <ul className="hidden mdl:flex justify-center items-center gap-10 mt-3">
                    {Links.map((item) => (
                        <li
                            className="relative hover:text-[#6A6E49]"
                            key={item.id}
                            onMouseEnter={item.page === "HOME" ? handleHomeDropdown : item.page === "FLOWERS" ? handleFlowersDropdown : null}
                            onMouseLeave={item.page === "HOME" ? closeHomeDropdown : item.page === "FLOWERS" ? closeFlowersDropdown : null}
                        >
                            <Link to={item.path}>{item.page}</Link>

                            {isHomeDropdownOpen && item.page === "HOME" && (
                                <ul className="absolute left-0 top-full bg-white shadow-lg rounded mt-2 p-4 w-48">
                                    <li className="py-2 hover:bg-gray-100"><Link to="/">Home 1</Link></li>
                                    <li className="py-2 hover:bg-gray-100"><Link to="/home2">Home 2</Link></li>
                                    <li className="py-2 hover:bg-gray-100"><Link to="/home3">Home 3</Link></li>
                                    <li className="py-2 hover:bg-gray-100"><Link to="/home4">Home 4</Link></li>
                                </ul>
                            )}
                            {isFlowersDropdownOpen && item.page === "FLOWERS" && (
                                <div className="bg-[#FFFFFF] h-[250px] w-[850px] mt-2 p-4 absolute">
                                    <div className="container mx-auto flex justify-between items-center">
                                        <div>
                                            <h3 className="text-indigo-600">FLOWERS</h3>
                                            <ul>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service1">All Flowers</Link></li>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service2">Roses</Link></li>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service3">Hydrangeas</Link></li>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service3">Terrariums</Link></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3></h3>
                                            <ul className="pt-[30px]">
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service1">Florist Choice</Link></li>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service2">Orchids</Link></li>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service3">Lilies</Link></li>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service3">Exotics</Link></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-indigo-600">OCCASIONS</h3>
                                            <ul>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service1">Christmas</Link></li>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service2">Autumn</Link></li>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service3">Birthday</Link></li>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service3">Anniversary</Link></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-indigo-600">GIFTS</h3>
                                            <ul>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service1">Gift Cards</Link></li>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service2">Gift Sets</Link></li>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service3">Candles</Link></li>
                                                <li className="py-2 hover:bg-gray-100"><Link to="/service3">Vases</Link></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <img src={flowers} alt="" className="h-[200px]" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                
                
            </div>
              {/* Responsive Navbar */}   
            <div className={`fixed z-10 top-0 left-0 bg-[#F1EFEB] w-[200px] h-[100vh] transform ${openBar ? "translate-x-0" : "-translate-x-full"} transition-transform duration-500 ease-in-out`}>
                <div className="absolute top-4 right-2  cursor-pointer" onClick={() => setOpenBar(false)}>
                    <IoClose fontSize="24px text-black" />
                </div>
                <ul className="mdl:hidden flex-col flex justify-center items-center gap-10 mt-12">
                    {Links.map((item) => (
                        <li
                            className="relative hover:text-[#6A6E49]"
                            key={item.id}
                            onMouseEnter={item.page === "HOME" ? handleHomeDropdown : item.page === "FLOWERS" ? handleFlowersDropdown : null}
                            onMouseLeave={item.page === "HOME" ? closeHomeDropdown : item.page === "FLOWERS" ? closeFlowersDropdown : null}
                        >
                            <Link to={item.path}>{item.page}</Link>
                            {isHomeDropdownOpen && item.page === "HOME" && (
                                <ul className="absolute z-30 left-0 top-full bg-white shadow-lg rounded  p-4  w-48">
                                    <li className="py-2 hover:bg-gray-100"><Link to="/">Home 1</Link></li>
                                    <li className="py-2 hover:bg-gray-100"><Link to="/home2">Home 2</Link></li>
                                    <li className="py-2 hover:bg-gray-100"><Link to="/home3">Home 3</Link></li>
                                    <li className="py-2 hover:bg-gray-100"><Link to="/home4">Home 4</Link></li>
                                </ul>
                            )}
                            {isFlowersDropdownOpen && item.page === "FLOWERS" && (
                                <div className="bg-[#FFFFFF] h-[700px] w-[300px]  p-5 absolute z-30">
                                    <div className="container mx-auto flex flex-col items-center">
                                        <div>
                                        <h3 className="text-indigo-600 py-3">FLOWERS</h3>
                                        </div>
                                        
                                        <div>
                                            <h3 className="text-indigo-600 py-3">OCCASIONS</h3>
                                            
                                        </div>
                                        <div>
                                            <h3 className="text-indigo-600 py-3">GIFTS</h3>
                                            
                                        </div>
                                        <div>
                                            <img src={flowers} alt="" className="py-3 h-[100px]" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                
            </div>

            <div className="ml-3 mr-3 ">
        <div className="mdl:hidden flex items-center w-full">
        <FaSearch className="font-[24px] absolute left-5 text-gray-400 " />
        <input className="border rounded py-1 pl-8 w-full " type="text" placeholder="Search Now" />
        </div>
        </div>


        </div>
        
    );
};

export default Navbar1;
