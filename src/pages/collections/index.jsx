import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCollections, getProducts } from '../../store/actions/productsActions';
import { FilterModal } from '../../components';
import { FilterIcon } from '../../assets/icons';

function Collections() {
  const [filterOpen, setFilterOpen] = useState(false)

  const { products, collections } = useSelector(state => state.products)
  const params = useParams()
  const menId = +params.id.split('-').at(-1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts(menId))
    dispatch(getCollections())
  }, [])

  useEffect(() => {
    dispatch(getProducts(menId))
  }, [menId])
  const title = collections.list.find(item => item.id === menId)?.title

  return (
    <>
      <div className='collections'>
        <div className="container">
          <div className="collections-wrapper">
            <div className="collections-head">
              <div className="collections-row">
                <h1 className='collections-head_title'>Торты</h1>
                <button className='collections-head_filter_btn' onClick={() => setFilterOpen(true)}><FilterIcon /> Фильтр</button>
              </div>

              <div className='collections-head_buttons'>
              </div>
            </div>
            <div className="collections-body">

              <div className="popular-item" >
                <div>
                  <div className="popular-item__image">
                    <Link to={`/product/`}>
                      <img
                        className="popular-item__image__img"
                        src='https://tortik-annuchka.com/storage/shop/item/896/07a1dc64322f817629acdd4d28765f0b.jpg'

                      />
                    </Link>
                  </div>
                  <div className="popular-item__content">
                    <div className="popular-item__row">
                      <Link to={`/product/`}>
                        <h3 className="popular-item__title">Russian Drag Racing Community № 4178</h3>
                      </Link>
                      <p className="popular-item__price">500 000 USZ</p>
                    </div>
                    <p className="popular-item__subtitle">от 6 кг</p>
                  </div>
                </div>
              </div>

              <div className="popular-item" >
                <div>
                  <div className="popular-item__image">
                    <Link to={`/product/`}>
                      <img
                        className="popular-item__image__img"
                        src='https://tortik-annuchka.com/storage/shop/item/890/1a01cea002b979c951b589dfb0b6a501.jpg'
                      />
                    </Link>
                  </div>
                  <div className="popular-item__content">
                    <div className="popular-item__row">
                      <Link to={`/product/`}>
                        <h3 className="popular-item__title">Russian Drag Racing Community № 4178</h3>
                      </Link>
                      <p className="popular-item__price">500 000 USZ</p>
                    </div>
                    <p className="popular-item__subtitle">от 6 кг</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <FilterModal collections={collections} setFilterOpen={setFilterOpen} filterOpen={filterOpen} />
    </>
  )
}

export default Collections