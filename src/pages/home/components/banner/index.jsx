import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



function Banner() {
  return (
    <section className='banner'>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        style={{
          "--swiper-pagination-color": "#000",
        }}
        className="banner-row">
        <SwiperSlide>
          <div className="banner-image">
            <img src="https://tortik-annuchka.com/storage/slide/2/83e30ed2cb198b904c1be4d36535ca2d.jpg" alt="" />
          </div>
          <div className="banner-content">
            <h1>BAND QILINGAN!!!!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-image">
            <img src="https://tortik-annuchka.com/storage/slide/3/d0c9686bdf34b4a96879238fd0339346.jpg" alt="" />
          </div>
          <div className="banner-content">
          <h1>BAND QILINGAN!!!!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-image">
            <img src="https://tortik-annuchka.com/storage/slide/1/864f96ce860b3d7b368481498382aae1.jpg" alt="" />

          </div>
          <div className="banner-content"></div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Banner