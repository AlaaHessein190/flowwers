import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../component/Sliderseason.css';
import { Pagination, Navigation } from 'swiper/modules';
import { img001, img0010, img002, img003, img004, img005, img006, img007, img008, img009 } from '../assets';

const flowersData = [
    { img: img001, title: 'In Bloom', price: '$65.00-$98.00' },
    { img: img002, title: 'Vintage Fleur', price: '$65.00-$90.00' },
    { img: img003, title: 'Burnished Blossom', price: '$43.00-$63.00' },
    { img: img004, title: 'My Desire', price: '$85.00-$115.00' },
    { img: img005, title: 'Keep it Green', price: '$57.00-$87.00' },
    { img: img006, title: 'Walk in the Sky jam jar', price: '$36.00-$56.00' }
];

const plantsData = [
    { img: img007, title: 'Snake Plant Black Coral Hourglass', price: '$89.00' },
    { img: img008, title: 'Dracaena Compacta', price: '$20.00' },
    { img: img009, title: 'Calathea Rattlesnake – Piccolo', price: '$34.00' },
    { img: img0010, title: 'Calathea Rattlesnake – Piccolo', price: '$34.00' }
];

const Season = () => {
    const [active, setActive] = useState('FLOWERS');

    const handleSlider = (slider) => {
        setActive(slider.toUpperCase());
    };

    return (
        <div className="bg-[#FFFFFF] h-[130vh]">
            <div className="container mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <div className='pt-[100px]'>
                        <h1 className='text-3xl mdl:text-5xl py-5'>Season Finest</h1>
                    </div>
                    <div className="flex gap-3">
                        <h2 className={`cursor-pointer ${active === 'FLOWERS' ? 'active' : ''}`} onClick={() => handleSlider('FLOWERS')}>FLOWERS</h2>
                        <h2 className={`cursor-pointer ${active === 'PLANTS' ? 'active' : ''}`} onClick={() => handleSlider('PLANTS')}>PLANTS</h2>
                    </div>
                    {active === 'FLOWERS' && (
                        <Swiper
                            slidesPerView={3}
                            centeredSlides={true}
                            spaceBetween={30}
                            pagination={{ type: 'fraction' }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {flowersData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='flex flex-col items-center relative text-center'>
                                        <div className='imgee relative'>
                                            <img src={item.img} alt="" className='' />
                                           
                                        </div>
                                        <p className='font-medium hover:underline cursor-pointer hover:text-[#6A6E49]'>{item.title}</p>
                                        <span className='py-3 text-gray-500'>{item.price}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                    {active === 'PLANTS' && (
                        <Swiper
                            slidesPerView={3}
                            centeredSlides={true}
                            spaceBetween={30}
                            pagination={{ type: 'fraction' }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {plantsData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='flex flex-col items-center relative text-center'>
                                        <div className='imgee relative'>
                                            <img src={item.img} alt="" className='' />
                                           
                                        </div>
                                        <p className='font-medium hover:underline cursor-pointer hover:text-[#6A6E49]'>{item.title}</p>
                                        <span className='py-3 text-gray-500'>{item.price}</span>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Season;
