import { img08, img09, img11 } from "../assets"


const Wedding = () => {
  return (
    <div className="mix-h-screen overflow-hidden  py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 h-full">
            <div className="bg-[#6a6e49] flex flex-1 justify-center  items-center text-center text-white">
           <div className="flex flex-col items-center ">
           <img src={img08} alt="" className="w-[250px] rounded-t-full pt-5" />
            <h1 className="text-3xl py-4">Weddings</h1>
            <p className="w-[300px]">Our talented wedding team is dedicated to telling your unique story through extraordinary and memorable floral designs.</p>
            <h3 className="underline cursor-pointer hover:text-[#d6dab5] py-4">Find out More</h3>
           </div>
            </div>
            <div className=" flex-1">
                <img src={img09} alt=""className="w-full h-full object-cover"/>
            </div>
            <div className="bg-[#F1EFEB] flex flex-1 items-center justify-center text-center">
            <div className="flex flex-col items-center ">
            <img src={img11} alt="" className="w-[250px] pt-5"/>
            <h1  className="text-3xl py-4">Private Events</h1>
            <p className="w-[300px]">We are on hand to speak with you to create the most beautiful flowers and plants for your event.</p>
            <h3 className="underline cursor-pointer hover:text-[#d6dab5] py-4">Find out More</h3>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Wedding