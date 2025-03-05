import { image, imgg } from "../assets";

const Stelocator = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="text-center">
        <h1 className="text-4xl">Locations</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-32 py-20">
        
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={image} alt="Location" className="w-full h-auto object-cover" />
        </div>
        
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl pb-6">Fiore Columbus Ave.</h2>
          <p className="text-sm pb-6">
            Since 1981, Fiore’s flagship location has proven an Upper West
            Side staple for locals, gardeners, and plant lovers. Now located just 
            around the corner at 723 Amsterdam Avenue, the new flagship will continue
            to serve the local community that has been loyal to the company for decades,
            now with an expanded offering and onsite cafe.
          </p>
          <p className="pb-6">
            <strong>Address</strong>
            <br />
            555 Columbus Ave. (at 87th St.), New York, NY 10024
          </p>
          <p className="pb-6">
            <strong>Opening Times</strong>
            <br />
            Monday – Saturday – 8am – 6pm
            <br />
            Sunday – 9am – 4pm
          </p>
          <p className="pb-2 font-bold">Contact</p>
          <p className="hover:underline cursor-pointer">+44 (0) 207 739 1521</p>
          <p className="hover:underline cursor-pointer">fiore.amsterdam@fiore.com</p>
        </div>
      </div>



      <div className="flex flex-col md:flex-row items-center gap-32 py-20">
        
       
        
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl pb-6">Fiore Prince St.</h2>
          <p className="text-sm pb-6">
          Our location in the heart of Nolita on the corner of Prince Street and Bowery 
          has become a hotspot to grab coffee and browse beautiful plants and flowers—directly
           across the street from the New Museum. With a modern Scandinavian design, this location 
           offers a highly curated 
          selection of trendy plants and lush florals for our downtown customers.
          </p>
          <p className="pb-6">
            <strong>Address</strong>
            <br />
            1 Prince St. (at Bowery), New York, NY 10012
          </p>
          <p className="pb-6">
            <strong>Opening Times</strong>
            <br />
            Monday – Saturday – 8am – 6pm
            <br />
            Sunday – 9am – 4pm
          </p>
          <p className="pb-2 font-bold">Contact</p>
          <p className="hover:underline cursor-pointer">+44 20 7321 3099</p>
          <p className="hover:underline cursor-pointer">fiore.prince@fiore.com</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={imgg} alt="Location" className="w-full h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Stelocator;
