import { img17, img18, img19 } from "../assets";

const Gifts = () => {
  const data = [
    { id: 1, img: img17, title: "Adjo Vase", price: "$40.00" },
    { id: 2, img: img18, title: "E Gift Cards", price: "$50.00-$150.00" },
    { id: 3, img: img19, title: "The Venus Set", price: "$295.00" },
  ];

  return (
    <div className="min-h-screen  flex justify-center items-center ">
      <div className="container mx-auto py-11">
        <div className="flex flex-col justify-center items-center text-center space-y-3">
          <h1 className="font-bold text-3xl">Gifts</h1>
          <p className="text-lg pb-12">
            Furnish your beautiful bouquet with a gift from our handpicked edit.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {data.map((item) => (
            <div key={item.id} className="w-full relative ">
              <div className="relative group">
              <img
                src={item.img}
                alt={item.title}
                className="w-full  object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
              />
              
              <button className="absolute bottom-20 left-1/2 -translate-x-1/2 px-9 py-2 bg-white hover:bg-[#6A6E49] text-black   hover:text-white font-semibold rounded transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
               Select Amount
              </button>
              </div>
              <h3 className="mt-3 font-medium text-lg cursor-pointer underline hover:text-[#6A6E49]">
                {item.title}
              </h3>
              <p>{item.price}</p>
            </div>
          ))}
          
        </div>
        <div className="flex justify-center mt-14">
            <button className="px-9 py-2 rounded-full border border-black hover:bg-[#6A6E49] hover:border-none hover:text-white">View All Gift</button>
          </div>
      </div>
    </div>
  );
};

export default Gifts;
