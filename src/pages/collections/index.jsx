import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
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
                 <button className='collections-head_filter_btn' onClick={() => setFilterOpen(true)}><FilterIcon/> Фильтр</button>
              </div>

              <div className='collections-head_buttons'>
              </div>
            </div>
            <div className="collections-body">

              <div class="price-tag">7 100 ₽</div>
            </div>
          </div>
        </div>
      </div>
    <FilterModal collections={collections} setFilterOpen={setFilterOpen} filterOpen={filterOpen}/>
    </>
  )
}

export default Collections