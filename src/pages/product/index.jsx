import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { BoxIcon, CarIcon, CheckIcon, GiftIcon, StarGreyIcon, StarIcon } from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { productGet } from '../../store/actions/productActions'
import { Link, useParams } from 'react-router-dom'
import { addCart } from '../../store/slices/cart'
import toast from 'react-hot-toast'
import 'swiper/css';
import 'swiper/css/scrollbar';

function ProductPage() {
  const { product } = useSelector(state => state.product)
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(productGet(id))
  }, [id])


  const handleAddCart = (product) => {
    dispatch(addCart(product))
    toast('Item Added!', {
      icon: <CheckIcon />,
      style: {
        color: '#fff',
        backgroundColor: '#000',
        borderRadius: 10
      }
    })
  }

  return (
    <div className='product'>
      <div className="product-wrapper">


        <div className="product-image">
          <img src='https://tortik-annuchka.com/storage/shop/item/887/b9d5d216aff922aa41a20cb05646ea89.jpg' alt={product?.title} />
        </div>

        <div className="product-content">
          <div className="product-content__head">
            <div className="product-content__row">
              <div>
                <h3 className='product-head__title'>Кремовый с вишней № 4170</h3>
                <p className='product-head__price'>1 кг - 5 900 ₽ / от 6 кг</p>
              </div>
              <div className='product-head__new'>
                <p>NEW</p>
              </div>
              <div className='product-head__hit'>
                <p>hit</p>
              </div>
            </div>

            <div className="product-head__select">
              <select name='cake' id='cake'>
                <option value="">Выберите начинку</option>
                <option value="">Выберите начинку</option>
                <option value="">Выберите начинку</option>
                <option value="">Выберите начинку</option>
                <option value="">Выберите начинку</option>
              </select>

              <select name='cake' id='cake'>
                <option value="">30 / 6.2 кг</option>
                <option value="">30 / 6.2 кг</option>
                <option value="">30 / 6.2 кг</option>
                <option value="">30 / 6.2 кг</option>
              </select>
            </div>
          </div>
          <div className="product-content__content">
            <div className="product-content__col">

            </div>

            <div className='product-content__price'>
              <button onClick={() => handleAddCart(product)} className='product-content__button_add'>ADD to BAG</button>
            </div>
          </div>
          <div className="product-content__info">

          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductPage