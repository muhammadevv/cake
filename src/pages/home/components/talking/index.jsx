import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { StarIcon } from '../../../../assets/icons';

function Talking() {
  return (
    <section className='talking'>
      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
          '--swiper-navigation-size': '20px',
        }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='talking-parent'
      >

        <SwiperSlide className='talking-item'>
          <div className="talking-content">
            <p className='talking-item__toptitle'>People are talking</p>
            <p className='talking-item__rating'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </p>
            <p className='talking-item__title'>"Everlane's quality is one element that keeps me returning to them. This shirt look great and is well-constructed. I have received compliments on it."</p>
            <p className='talking-item__subtitle'>-Leo S, The Premium-Weight Crew</p>
          </div>
          <div className="talking-image">
            <img className='talking-item__img' src="/men/clean/talking-1.avif" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='talking-item'>
          <div className="talking-content">
            <p className='talking-item__toptitle'>People are talking</p>
            <p className='talking-item__rating'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </p>
            <p className='talking-item__title'>"Everlane's quality is one element that keeps me returning to them. This shirt look great and is well-constructed. I have received compliments on it."</p>
            <p className='talking-item__subtitle'>-Leo S, The Premium-Weight Crew</p>
          </div>
          <div className="talking-image">
            <img className='talking-item__img' src="/men/clean/talking-2.avif" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='talking-item'>
          <div className="talking-content">
            <p className='talking-item__toptitle'>People are talking</p>
            <p className='talking-item__rating'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </p>
            <p className='talking-item__title'>"Everlane's quality is one element that keeps me returning to them. This shirt look great and is well-constructed. I have received compliments on it."</p>
            <p className='talking-item__subtitle'>-Leo S, The Premium-Weight Crew</p>
          </div>
          <div className="talking-image">
            <img className='talking-item__img' src="/men/clean/talking-3.avif" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='talking-item'>
          <div className="talking-content">
            <p className='talking-item__toptitle'>People are talking</p>
            <p className='talking-item__rating'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </p>
            <p className='talking-item__title'>"Everlane's quality is one element that keeps me returning to them. This shirt look great and is well-constructed. I have received compliments on it."</p>
            <p className='talking-item__subtitle'>-Leo S, The Premium-Weight Crew</p>
          </div>
          <div className="talking-image">
            <img className='talking-item__img' src="/men/clean/talking-4.avif" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className='talking-item'>
          <div className="talking-content">
            <p className='talking-item__toptitle'>People are talking</p>
            <p className='talking-item__rating'>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </p>
            <p className='talking-item__title'>"Everlane's quality is one element that keeps me returning to them. This shirt look great and is well-constructed. I have received compliments on it."</p>
            <p className='talking-item__subtitle'>-Leo S, The Premium-Weight Crew</p>
          </div>
          <div className="talking-image">
            <img className='talking-item__img' src="/men/clean/talking-5.avif" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Talking