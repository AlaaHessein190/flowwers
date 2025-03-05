import  { useState } from 'react';

function DropdownItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full mb-4 border-b pb-4">
      <h2 
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer text-xl font-bold text-blue-700 hover:text-blue-800 w-full"
      >
        {title}
        <svg className="w-2.5 h-2.5 ml-2 inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
        </svg>
      </h2>
      {isOpen && (
        <div className="w-full text-left">
          <p className="text-gray-700 w-full text-left mt-2 text-base leading-relaxed">{content}</p>
        </div>
      )}
    </div>
  );
}

export default function DropdownMenu() {
  return (
    <div className="w-full  max-w-3xl mx-auto px-4 md:px-6 lg:px-8 py-10">
      <DropdownItem title="What services do you offer?" content="Scotts Flowers NYC specializes in daily flower delivery services. We offer same-day delivery within 75 miles of midtown Manhattan. For a full list of our deliverable locations, see below." />
      <DropdownItem title="Do you do weddings?" content="Unfortunately due to the pandemic, we’ve suspended all wedding services for the time being, including bridal bouquets, boutonnieres, corsages, and beyond." />
      <DropdownItem title="Do you do small events/parties?" content="Yes! We are happy to provide flowers for dinner parties, birthday get togethers, bridal showers, baby showers, etc. We primarily work off of what’s currently available on our website, but are happy to discuss details with you." />
      <DropdownItem title="Do you offer holiday decor services?" content="We do not offer any holiday decor services, including Christmas tree installations, wreaths, or garlands. We do offer holiday decor centerpieces, which you can find on our website." />
      <DropdownItem title="Do you offer same day delivery?" content="Yes, we offer same day delivery anywhere within 75 miles of our New York City storefront! Same-day orders within Manhattan below 125th Street must be placed by 2 PM EST." />
      <DropdownItem title="How much is your delivery fee?" content="For local Manhattan orders, our delivery fee is $18. All orders to Upper Manhattan (above 125th St.), Queens, Brooklyn & the Bronx have a delivery fee of $30. Orders to Staten Island, Westchester, and Nassau County delivery fee of $35. Orders to New Jersey are $40. Orders to Rockland and Suffolk County have a delivery fee of $45." />
    </div>
    

  );
}
