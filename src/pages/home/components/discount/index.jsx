import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountList } from "../../../../store/actions/homeActions";

function Discount() {
  const { discount } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDiscountList());
  }, []);
  return (
    <section className="discount">
      {/* <div className="discount-banner">
        <div className="discount-bg">
          <img className='discount-bg__img' src="/men/discount/discount-bg.avif" alt="" />
        </div>

        <div className="discount-banner__content">
          <p className='discount-banner__subtitle'>Over 600+ styles are on sale. </p>
          <h1 className='discount-banner__title'>Up to 60% Off</h1>
          <p className='discount-banner__subtitle'>Shop Now</p>
        </div>
      </div> */}

      <div className="discount-content">
        {discount.list.map((item, i) => (
          <div className="discount-item" key={i}>
            <div className="discount-item__image">
              <img
                className="discount-item__image__img"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="discount-item__content">
              <p className="discount-item__title">{item.title}</p>
              <button className="discount-item__button">Shop Linen</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Discount;
