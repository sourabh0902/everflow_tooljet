
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import { Autoplay } from 'swiper/modules';

const logoData = [
    { path: '/logos/artistry.png', hasCase: false },
    { path: '/logos/dexign.png', hasCase: true },
    { path: '/logos/emblem.png', hasCase: false },
    { path: '/logos/grapherz.png', hasCase: false },
    { path: '/logos/grapho.png', hasCase: false },
    { path: '/logos/iconic.png', hasCase: false },
    { path: '/logos/iconize.png', hasCase: false },
    { path: '/logos/imprintify.png', hasCase: false },
    { path: '/logos/logique.png', hasCase: true },
    { path: '/logos/optimal.png', hasCase: false },
    { path: '/logos/prelude.png', hasCase: false },
    { path: '/logos/signet.png', hasCase: false },
    { path: '/logos/signum.png', hasCase: false },
    { path: '/logos/vectra.png', hasCase: false },
    { path: '/logos/visualy.png', hasCase: false },
    { path: '/logos/wayline.png', hasCase: false },
];


const Carousel = () => {

    const openCaseStudy = () => {
        window.open('about:blank', '_blank');
    }

    return (
        <section className='pt-8 pb-12 border-t border-solid border-[#363636]'>
            <Swiper
                className='logoSwiper container mx-auto'
                modules={[Autoplay]}
                spaceBetween={0}
                speed={5000}
                slidesPerView={5}
                loop={true}
                freeMode={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
            >
                {[...logoData, ...logoData].map((logo, index) => (
                    <SwiperSlide key={index} className={`px-[25px] flex flex-col justify-center items-center`}>
                        <img src={logo.path} alt="" className='grayscale' />
                        {logo.hasCase &&
                            <button onClick={openCaseStudy} className='mt-[7.5px] rounded-2xl py-1 px-2 bg-[#2B3036] cursor-pointer'>
                                <p className='ibm-plex-sans font-medium text-[10px] text-[#CFD3D8] leading-[100%] uppercase'>Case Study</p>
                            </button>
                        }
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    )
}

export default Carousel