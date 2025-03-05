import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../stores/Cart";
import {
  img1110,
  img1111,
  img11111,
  img11112,
  img11113,
  img11114,
  img11115,
  img11116,
  img11117,
  img11118,
  img1112,
  img1113,
  img1114,
  img1115,
  img1116,
  img1117,
  img1118,
  img1119,
} from "../assets";

const PriceDropdown = ({ minVal, setMinVal, maxVal, setMaxVal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const min = 28;
  const max = 140;

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full my-2">
      <div onClick={toggleDropdown} className="cursor-pointer flex justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Price</h2>
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Price Range</label>
          <div className="relative">
            <div className="relative h-2 bg-gray-300 rounded">
              <div
                className="absolute h-2 bg-blue-700 rounded"
                style={{
                  left: `${((minVal - min) / (max - min)) * 100}%`,
                  right: `${100 - ((maxVal - min) / (max - min)) * 100}%`,
                }}
              ></div>
              <input
                type="range"
                min={min}
                max={max}
                step="1"
                value={minVal}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value < maxVal) setMinVal(value);
                }}
                className="absolute top-0 w-full h-2 custom-range pointer-events-auto"
                style={{ background: "transparent", zIndex: 3 }}
              />
              <input
                type="range"
                min={min}
                max={max}
                step="1"
                value={maxVal}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value > minVal) setMaxVal(value);
                }}
                className="absolute top-0 w-full h-2 custom-range pointer-events-auto"
                style={{ background: "transparent", zIndex: 2 }}
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-lg font-bold">
              Selected Price Range: ${minVal.toFixed(2)} - ${maxVal.toFixed(2)}
            </p>
          </div>
        </div>
      )}
      <style>{`
        .custom-range {
          -webkit-appearance: none;
          appearance: none;
        }
        .custom-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 16px;
          width: 16px;
          background: #4B5563;
          cursor: pointer;
          border: none;
          border-radius: 0;
          margin-top: -7px;
          transition: all 0.3s ease;
        }
        .custom-range::-moz-range-thumb {
          height: 16px;
          width: 16px;
          background: #4B5563;
          cursor: pointer;
          border: none;
          border-radius: 0;
          transition: all 0.3s ease;
        }
        .custom-range::-webkit-slider-runnable-track {
          background: transparent;
        }
        .custom-range::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </div>
  );
};

const CategoryDropdown = ({ selectedCategories, setSelectedCategories }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    setSelectedCategories((prev) => ({ ...prev, [name]: checked }));
  };

  const occasionsSubCategories = ["Birthday", "Anniversary", "Wedding", "Valentines", "MothersDay", "Christmas", "Other"];
  const flowersSubCategories = ["Bouquets", "Potted", "CutFlowers", "Exotic", "Seasonal", "Roses", "Mixed"];

  return (
    <div className="relative w-full my-2 ">
      <div onClick={toggleDropdown} className="cursor-pointer flex justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Category</h2>
        <svg 
          className="w-4 h-4" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} 
          />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4">
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="Subscriptions" 
                checked={selectedCategories["Subscriptions"] || false} 
                onChange={handleCategoryChange} 
                className="mr-2" 
              />
              <span>Subscriptions</span>
            </label>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="Occasions" 
                checked={selectedCategories["Occasions"] || false} 
                onChange={handleCategoryChange} 
                className="mr-2" 
              />
              <span>Occasions</span>
            </label>
            <div className="ml-6 flex flex-col space-y-1">
              {occasionsSubCategories.map((key) => (
                <label key={key} className="flex items-center">
                  <input 
                    type="checkbox" 
                    name={key} 
                    checked={selectedCategories[key] || false} 
                    onChange={handleCategoryChange} 
                    className="mr-2" 
                  />
                  <span>{key}</span>
                </label>
              ))}
            </div>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="Flowers" 
                checked={selectedCategories["Flowers"] || false} 
                onChange={handleCategoryChange} 
                className="mr-2" 
              />
              <span>Flowers</span>
            </label>
            <div className="ml-6 flex flex-col space-y-1">
              {flowersSubCategories.map((key) => (
                <label key={key} className="flex items-center">
                  <input 
                    type="checkbox" 
                    name={key} 
                    checked={selectedCategories[key] || false} 
                    onChange={handleCategoryChange} 
                    className="mr-2" 
                  />
                  <span>{key}</span>
                </label>
              ))}
            </div>
            <label className="flex items-center">
              <input 
                type="checkbox" 
                name="Standard Shop" 
                checked={selectedCategories["Standard Shop"] || false} 
                onChange={handleCategoryChange} 
                className="mr-2" 
              />
              <span>Standard Shop</span>
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

const ColorDropdown = ({ selectedColors, setSelectedColors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const colorsList = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "White"];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSelectedColors({ ...selectedColors, [name]: checked });
  };

  return (
    <div className="relative w-full my-2">
      <div onClick={toggleDropdown} className="cursor-pointer flex justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Color</h2>
        <svg 
          className="w-4 h-4" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} 
          />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4">
          <div className="flex flex-col space-y-2">
            {colorsList.map((col) => (
              <label key={col} className="flex items-center">
                <input 
                  type="checkbox" 
                  name={col} 
                  checked={selectedColors[col] || false} 
                  onChange={handleChange} 
                  className="mr-2" 
                />
                <span>{col}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const BrandDropdown = ({ selectedBrands, setSelectedBrands }) => {
  const [isOpen, setIsOpen] = useState(false);
  const brandsList = ["Nike", "Adidas", "Puma", "Reebok", "UnderArmour", "NewBalance"];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSelectedBrands({ ...selectedBrands, [name]: checked });
  };

  return (
    <div className="relative w-full my-2">
      <div onClick={toggleDropdown} className="cursor-pointer flex justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Brand</h2>
        <svg 
          className="w-4 h-4" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} 
          />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4">
          <div className="flex flex-col space-y-2">
            {brandsList.map((brand) => (
              <label key={brand} className="flex items-center">
                <input 
                  type="checkbox" 
                  name={brand} 
                  checked={selectedBrands[brand] || false} 
                  onChange={handleChange} 
                  className="mr-2" 
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const CustomerRatingDropdown = ({ selectedRatings, setSelectedRatings }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ratingsList = ["★★★★☆", "★★★★★"];

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSelectedRatings({ ...selectedRatings, [name]: checked });
  };

  return (
    <div className="relative w-full my-2">
      <div onClick={toggleDropdown} className="cursor-pointer flex justify-between p-4 border-b">
        <h2 className="text-xl font-bold">Customer Rating</h2>
        <svg 
          className="w-4 h-4" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} 
          />
        </svg>
      </div>
      {isOpen && (
        <div className="p-4">
          <div className="flex flex-col space-y-2">
            {ratingsList.map((rate) => (
              <label key={rate} className="flex items-center">
                <input 
                  type="checkbox" 
                  name={rate} 
                  checked={selectedRatings[rate] || false} 
                  onChange={handleChange} 
                  className="mr-2" 
                />
                <span>{rate}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SimpleDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="relative">
      <div onClick={toggleDropdown} className="cursor-pointer flex justify-between py-4">
        <h2 className="text-xl font-bold">Default</h2>
        <svg 
          className="w-4 h-4 ml-36" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} 
          />
        </svg>
      </div>
      {isOpen && (
        <ul className="p-4 bg-gray-100 rounded absolute top-full left-0 mt-2 w-full shadow-lg z-10">
          <li className="p-2 hover:bg-gray-200 text-sm">Default sorting</li>
          <li className="p-2 hover:bg-gray-200 text-sm">Sort by popularity</li>
          <li className="p-2 hover:bg-gray-200 text-sm">Sort by average rating</li>
          <li className="p-2 hover:bg-gray-200 text-sm">Sort by latest</li>
          <li className="p-2 hover:bg-gray-200 text-sm">Sort by price: low to high</li>
          <li className="p-2 hover:bg-gray-200 text-sm">Sort by price: high to low</li>
        </ul>
      )}
    </div>
  );
};

const Flowers = () => {
  const { addToCart } = useCart();
  const group1 = [
    { id: 1, src: img1111, title: "Bisous", price: "$100.00–$140.00", category: "Birthday", color: "Red", brand: "Gucci", rating: "★★★★☆" },
    { id: 2, src: img1112, title: "Burnished Blossom", price: "$43.00–$63.00", category: "Anniversary", color: "White", brand: "Adidas", rating: "★★★☆☆" },
    { id: 3, src: img1113, title: "Fortune favours", price: "$59.00", category: "MothersDay", color: "Pink", brand: "Nike", rating: "★★★★☆" },
    { id: 4, src: img1114, title: "Grace", price: "$100.00–$140.00", category: "Standard Shop", color: "White", brand: "Prada", rating: "★★★★☆" },
    { id: 5, src: img1115, title: "In Bloom", price: "$65.00–$98.00", category: "Birthday", color: "White", brand: "Reebok", rating: "★★★☆☆" },
    { id: 6, src: img1116, title: "Keep it Green", price: "$57.00–$87.00", category: "Standard Shop", color: "Green", brand: "Nike", rating: "★★★★☆" },
    { id: 7, src: img1117, title: "Lisee", price: "$60.00–$99.00", category: "Bouquets", color: "Green", brand: "Gucci", rating: "★★★★★" },
    { id: 8, src: img1118, title: "Midsummer harmony", price: "$70.00", category: "Potted", color: "Purple", brand: "Adidas", rating: "★★★★☆" },
    { id: 9, src: img1119, title: "Mixed Tulips", price: "$63.00", category: "Mixed", color: "Green", brand: "Prada", rating: "★★★★☆" },
    { id: 10, src: img1110, title: "My Desire", price: "$85.00–$115.00", category: "Christmas", color: "Red", brand: "Gucci", rating: "★★★★☆" },
    { id: 11, src: img11111, title: "Newbury Flower Arrangement", price: "$109.99", category: "Valentines", color: "Purple", brand: "Nike", rating: "★★★★☆" },
    { id: 12, src: img11112, title: "One in a million", price: "$56.00", category: "Wedding", color: "Pink", brand: "Adidas", rating: "★★★★☆" },
  ];
  const group2 = [
    { id: 13, src: img11113, title: "One Last Kiss", price: "$135.00", category: "MothersDay", color: "Pink", brand: "Gucci", rating: "★★★★★" },
    { id: 14, src: img11114, title: "Pride bouquet", price: "$28.00-$43.00", category: "MothersDay", color: "Blue", brand: "Adidas", rating: "★★★★☆" },
    { id: 15, src: img11115, title: "Residential", price: "$100.00", category: "Roses", color: "Yellow", brand: "Nike", rating: "★★★★☆" },
    { id: 16, src: img11116, title: "Vintage Fleur", price: "$65.00–$90.00", category: "CutFlowers", color: "Purple", brand: "Prada", rating: "★★★★☆" },
    { id: 17, src: img11117, title: "Walk in the Sky Jam Jar", price: "$36.99-$56.00", category: "Mixed", color: "", brand: "Reebok", rating: "★★★★☆" },
    { id: 18, src: img11118, title: "Wonderland", price: "$38.00", category: "Christmas", color: "Blue", brand: "Nike", rating: "★★★★☆" },
  ];
  const allImages = [...group1, ...group2];

  const [sliderMin, setSliderMin] = useState(28);
  const [sliderMax, setSliderMax] = useState(140);
  const [selectedCategories, setSelectedCategories] = useState({});
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedBrands, setSelectedBrands] = useState({});
  const [selectedRatings, setSelectedRatings] = useState({});
  const [filteredImages, setFilteredImages] = useState(allImages);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 12;
    

  const handleClick = (item) => {
    addToCart({
      id: item.id,
      title: item.title,
      image: item.src,
      price: item.price, 
    });
  };


  

  const parseImagePrice = (priceStr) => {
    const cleanStr = priceStr.replace("$", "");
    if (cleanStr.includes("–")) {
      const parts = cleanStr.split("–");
      return { min: parseFloat(parts[0]), max: parseFloat(parts[1]) };
    } else if (cleanStr.includes("-")) {
      const parts = cleanStr.split("-");
      return { min: parseFloat(parts[0]), max: parseFloat(parts[1]) };
    } else {
      const value = parseFloat(cleanStr);
      return { min: value, max: value };
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const isPriceDefault = sliderMin === 28 && sliderMax === 140;
      
      
      const allowedCategories = new Set();
      if (selectedCategories["Subscriptions"]) allowedCategories.add("Subscriptions");
      if (selectedCategories["Standard Shop"]) allowedCategories.add("Standard Shop");

      const occasionsGroup = ["Birthday", "Anniversary", "Wedding", "Valentines", "MothersDay", "Christmas", "Other"];
      const flowersGroup = ["Bouquets", "Potted", "CutFlowers", "Exotic", "Seasonal", "Roses", "Mixed"];

      if (selectedCategories["Occasions"]) {
        const anySubChecked = occasionsGroup.some(key => selectedCategories[key]);
        if (anySubChecked) {
          occasionsGroup.forEach(key => { if (selectedCategories[key]) allowedCategories.add(key); });
        } else {
          occasionsGroup.forEach(key => allowedCategories.add(key));
        }
      }
      if (selectedCategories["Flowers"]) {
        const anySubChecked = flowersGroup.some(key => selectedCategories[key]);
        if (anySubChecked) {
          flowersGroup.forEach(key => { if (selectedCategories[key]) allowedCategories.add(key); });
        } else {
          flowersGroup.forEach(key => allowedCategories.add(key));
        }
      }
      
      const filtered = allImages.filter((img) => {
        if (!isPriceDefault) {
          const { min: imgMin, max: imgMax } = parseImagePrice(img.price);
          if (!(sliderMin <= imgMin && sliderMax >= imgMax)) return false;
        }
        if (allowedCategories.size > 0 && !allowedCategories.has(img.category)) return false;
        const cols = Object.keys(selectedColors).filter((key) => selectedColors[key]);
        if (cols.length > 0 && !cols.includes(img.color)) return false;
        const brs = Object.keys(selectedBrands).filter((key) => selectedBrands[key]);
        if (brs.length > 0 && !brs.includes(img.brand)) return false;
        const rts = Object.keys(selectedRatings).filter((key) => selectedRatings[key]);
        if (rts.length > 0 && !rts.includes(img.rating)) return false;
        return true;
      });
      setFilteredImages(filtered);
      setCurrentPage(1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [sliderMin, sliderMax, selectedCategories, selectedColors, selectedBrands, selectedRatings]);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const imagesToDisplay = filteredImages.slice(startIndex, startIndex + imagesPerPage);
  const totalResults = filteredImages.length;
  const firstImageNumber = filteredImages.length > 0 ? ((currentPage - 1) * imagesPerPage + 1) : 0;

  return (
    <div className="container mx-auto px-4 pt-28">
      <p className="text-gray-500 pt-10 pb-5">
        <Link to="/" className="hover:text-black">Home</Link> / Flowers
      </p>
      <h1 className="text-5xl pb-4">Flowers</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/3">
          <div className="bg-[#6A6E49] w-full h-[1px]"></div>
          <h4 className="text-sm underline p-6">Clear All</h4>
          <div className="bg-[#6A6E49] w-full h-[1px]"></div>
          <PriceDropdown minVal={sliderMin} setMinVal={setSliderMin} maxVal={sliderMax} setMaxVal={setSliderMax} />
          <CategoryDropdown selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
          <ColorDropdown selectedColors={selectedColors} setSelectedColors={setSelectedColors} />
          <BrandDropdown selectedBrands={selectedBrands} setSelectedBrands={setSelectedBrands} />
          <CustomerRatingDropdown selectedRatings={selectedRatings} setSelectedRatings={setSelectedRatings} />
        </div>
        <div className="w-full md:w-2/3 flex flex-col">
          <div className="bg-[#6A6E49] w-full h-[1px]"></div>
          <div className="flex justify-between items-center">
            <p>Showing {firstImageNumber} of {totalResults} results</p>
            <SimpleDropdown />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imagesToDisplay.length > 0 ? (
              imagesToDisplay.map((item) => (
                <div key={item.id} className="border rounded shadow overflow-hidden">
                  <div className="relative group">
                    <img src={item.src} alt={item.title} className="w-full" />
                    <button onClick={() => handleClick(item)}  className=" absolute bottom-2 right-1 left-1 md:px-20 md:py-1  px-4 py-1 bg-black text-white hover:bg-[#6A6E49] rounded
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Add to Cart
                    </button>
                  </div>
                  <div className="p-2">
                    <h5 className="text-gray-500">{item.title}</h5>
                    {item.rating && <span>{item.rating}</span>}
                    <p>{item.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-10">
                <p className="text-xl">No images found </p>
              </div>
            )}
          </div>
          {filteredImages.length > imagesPerPage && (
            <div className="flex justify-center mt-4 space-x-4 pb-10">
              <button onClick={() => setCurrentPage(1)} className={`px-4 py-2 ${currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                1
              </button>
              <button onClick={() => setCurrentPage(2)} className={`px-4 py-2 ${currentPage === 2 ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
                2
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flowers;
