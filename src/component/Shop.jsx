import { img12, img13, img14, img15 } from "../assets";

const Shop = () => {
    const data = [
        { id: 1, img: img12, title: 'Christmas' },
        { id: 2, img: img13, title: 'Birthday' },
        { id: 3, img: img14, title: 'Autumn' },
        { id: 4, img: img15, title: 'Anniversary' },
    ];

    return (
        <div className="min-h-screen flex justify-center items-center py-16">
            <div className="container mx-auto text-center px-4">
                {/* العنوان */}
                <div className="py-10">
                    <h1 className="font-semibold text-3xl sm:text-4xl mdl:text-5xl">
                        Shop by Popular Occasions
                    </h1>
                </div>

                
                <div className="grid grid-cols-1 sml:grid-cols-2 md:grid-cols-4 gap-10">
                    {data.map((item) => (
                        <div key={item.id} className="flex flex-col items-center ">
                            <img src={item.img} alt={item.title} className="rounded-lg w-full max-w-[250px] object-cover transition-transform duration-300 hover:scale-105 cursor-pointer" />
                            <p className="mt-3 font-medium text-lg cursor-pointer underline hover:text-[#6A6E49]">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
