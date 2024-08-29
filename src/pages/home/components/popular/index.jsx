import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/scrollbar';
import { useDispatch, useSelector } from "react-redux";
import { getSetsList } from "../../../../store/actions/homeActions";
import { Link } from "react-router-dom";
import { Scrollbar, Autoplay } from 'swiper/modules';


function Popular() {


  const width = window.screen.width;

  
  const { sets } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSetsList());
  }, []);
  
  console.log(width);

  return (
    <section className="popular">
      <div className="container">
        <div className="popular-row">
          <div className="popular-title">
            <h1 className="popular-title__title">Популярные торты</h1>
          </div>

          <Swiper
            style={{
              "--swiper-scrollbar-horizontal-color": "#fff",
              "--swiper-scrollbar-color": "#fff",
            }}
            spaceBetween={16}
            slidesPerView={4}
            slidesPerGroup={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar, Autoplay]}
            className="popular-content"
          >
            {
              sets.list.map((item, i) => (
                <SwiperSlide className="popular-item" key={i}>
                  <div>
                    <div className="popular-item__image">
                      <Link to={`/product/${item.slug}`}>
                        <img
                          className="popular-item__image__img"
                          src={item.image}
                          alt={item.title}
                        />
                      </Link>
                    </div>
                    <div className="popular-item__content">
                      <div className="popular-item__row">
                        <Link to={`/product/${item.slug}`}>
                          <h3 className="popular-item__title">{item.title}</h3>
                        </Link>
                        <p className="popular-item__price">${item.price}</p>
                      </div>
                      <p className="popular-item__subtitle">{item.color}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

        </div>
      </div>

    </section>
  );
}

export default Popular;
