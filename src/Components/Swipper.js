
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import {Link} from 'react-router-dom'
export default () => {
  return (
   <div>
     <h1 className='m-20 font-bold text-3xl font-Roboto sm:text-sm md:text-lg lg:text-3xl text-[#212121] text-center'>Prominent Blogs</h1>
     <Swiper
      centeredSlides={false}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        
    <Link to="https://react.dev/blog/2024/04/25/react-19" target="_blank" >
    <img src='https://media.dev.to/cdn-cgi/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fka5lc1x11wtj6nnesee3.png'alt="" />
    </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link to="https://nextjs.org/" target="_blank" >
        <img src='https://miro.medium.com/v2/resize:fit:1000/1*KDMx1YspSrBcFJG-NDZgDg.png'alt="" />
     </Link>
      </SwiperSlide>
<Link to="https://medium.com/@ananthvishnu/mongodb-b95e8364ceed"  target="_blank" >
      <SwiperSlide><img src='https://www.bleepstatic.com/content/hl-images/2023/12/16/mongodb-header-o.jpg'alt="" /></SwiperSlide>
      </Link>
      <SwiperSlide>
        <Link to="https://medium.com/@techathoncert/creating-dynamic-routes-3156004d47da"  target="_blank">
        <img src='https://miro.medium.com/v2/resize:fit:1400/1*aFSGNHkmdBrrZtpIyzDR2A.jpeg' alt=""/>
        </Link>
      </SwiperSlide>
   
    </Swiper>
   </div>
  );
};
