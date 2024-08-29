import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryList } from "../../../../store/actions/homeActions";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

function Category() {
  const { category } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryList());
  }, []);

  return (
    <section className="categories">
      <div className="categories-title">
        <h1 className="categories-title__title">Shop by Category</h1>
      </div>
      <div className="categories-content">
        {category.list.map((item, i) => (
          <div key={i} className="categories-item">
            <div className="categories-item__image">
              <img
                className="categories-item__image__img"
                src={item.image}
                alt={item.title}
              />
            </div>
            <p className="categories-item__text">
              <Link to={`/collections/${item.slug}-${item.id}`}>
                {item.title}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category;
