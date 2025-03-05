import { img24 } from "../assets"


const Ourstoree = () => {
  return (
    <div className="">
    <div className="container mx-auto bg-[#F1EFEB] grid grid-cols-1 mdl:grid-cols-2 items-center gap-10">
    <div className="bg-[#6A6E49] p-10">
        <img src={img24} alt="" className="rounded-tl-3xl rounded-tr-3xl transition-transform duration-300 hover:scale-105 origin-center"/>
    </div>
    <div className="flex flex-col px-10 ">
        <h1 className="text-3xl mdl:text-4xl pb-4 lgl:pb-10">Our Store</h1>
        <div className="flex justify-between py-4 lgl:py-10 gap-4">
            <p className="text-1xl ">Goddard Hall 80<br/>
            Washington Square E,<br/>
            New York, NY 10003, USA</p>
            <div className="flex flex-col">
            <p>+44 (0) 207 739 1521</p>
            <p>info@fiore.com</p>
            </div>
        </div>
        <div className="w-full h-[2px] bg-[#6A6E49] ">
            
        </div>
        <div className="flex justify-between py-4 lgl:py-10 gap-4">
            <p>Monday – Friday:<br/>
            7am – 7pm</p>
            <p>Saturday – Sunday:<br/>
            8am – 7pm</p></div>
       <div>
       <button className="px-5 py-3 bg-transparent border border-black hover:border-none hover:bg-[#6A6E49] hover:text-white rounded-full" >VIEW ON MAP</button>
       </div>
    </div>
    </div>
    </div>
  )
}

export default Ourstoree