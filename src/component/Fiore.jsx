import { img20 } from "../assets"


const Fiore = () => {
  return (
  <div className="pt-20">
      <div className="container mx-auto bg-[#E6E8D6] grid grid-cols-1 lgl:grid-cols-2 items-center p-6 sm:p-5 md:p-7 lgl:p-9   sm:gap-12 md:gap-10 ">
        <div className="bg-[#6A6E49] md:m-12 sm:p-5 md:p-12  lgl:p-16">
        <img src={img20} alt="" className="w-full max-w-[400px] sm:max-w-[500px]" />
        </div>
        <div className=" md:mx-12 lgl:mx-0">

            <h1 className="text-2xl sm:text-3xl lgl:text-4xl  leading-tight py-3 sm:py-4 lgl:py-6">Fiore Flower <br /> School</h1>
            <p className="text-sm sm:text-base text-gray-600 sm:py-4 lgl:py-6"> Discover our world-renowned school in the heart of <br /> Mayfair – and it’s rich programme of fun workshops <br /> and ambitious courses.</p>
            <p  className="underline font-semibold">FIND OUT MORE</p>
        </div>
    </div>
  </div>
  )
}

export default Fiore