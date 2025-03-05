

import {img21,img22,  img23 } from '../assets/index'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

import '../component/Slidjournal.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

const Journal = () => {
    const data =[
        {id:1,
        img:img21,
        Subtitle:'PLANTS',
        title:'How to dress a festive table', 
        description:'For those of you hosting this Christmas, read on; it’s time to polish up the cutlery, bring out the china plates, and brush up on our top tips on…' },
        {id:2,
        img:img22,
        Subtitle:'PLANTS',
        title:'Seasonal favourite: Peonies',
        description:'Whether it’s the hue of a precious gem or a stem that reminds them of a special time or place – our florists take inspiration from a plethora of su…'
        },
        {
        id:2,
        img:img23,
        Subtitle:'PLANTS',
        title:'Celebrating: Diversity and pride',
        description:'May – a month which welcomes an abundance of flowers, but there is one stem whose return truly sets hearts aflutter. From late April the peony, cel…'
        },

        
    ]
    return (
        <div className="pt-40">
          <div className="container mx-auto">
            {/* ✅ الديف العلوي - يظهر فقط في الشاشات الكبيرة */}
            <div className="mdl:block hidden">
              <div className="flex justify-center items-center text-center">
                <h1 className="text-4xl pb-10">The Journal</h1>
              </div>
      
              <div className="flex gap-10">
                {data.map((item) => (
                  <div key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="px-2">
                      <h3>{item.Subtitle}</h3>
                      <h1 className="underline cursor-pointer text-2xl py-2">{item.title}</h1>
                      <p className="text-sm pt-2 text-gray-500">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      
        
          <div className="mdl:hidden block">
            <Swiper
              scrollbar={{ hide: true }}
              modules={[Scrollbar]}
              slidesPerView={1.3}
              spaceBetween={15}
              loop={false}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 2.5 },
              }}
              className="mySwiper"
            >
              {data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="grid">
                    <img src={item.img} alt="" className="w-[200px] h-[250px] object-cover" />
                    <div className="px-2">
                      <h3>{item.Subtitle}</h3>
                      <h1 className="underline cursor-pointer  text-1xl py-1">{item.title}</h1>
                      <p className="text-sm pt-1 text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      );
}

export default Journal