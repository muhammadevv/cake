import React from 'react'

function Info() {
  return (
    <section className='info'>
      <div className="info-content">
        <div className="info-item">
          <div className="info-item__image">
            <img className='info-item__image__img' src="/men/info/info-1.png" alt="" />
          </div>
          <h3 className="info-item__title"> Complimentary Shipping</h3>
          <p className="info-item__subtitle">Enjoy free shipping on U.S. orders over $100.</p>
        </div>
        <div className="info-item">
          <div className="info-image">
            <img className='info-item__image__img' src="/men/info/info-2.png" alt="" />
          </div>
          <h3 className="info-item__title"> Complimentary Shipping</h3>
          <p className="info-item__subtitle">Enjoy free shipping on U.S. orders over $100.</p>
        </div>
        <div className="info-item">
          <div className="info-image">
            <img className='info-item__image__img' src="/men/info/info-3.png" alt="" />
          </div>
          <h3 className="info-item__title"> Complimentary Shipping</h3>
          <p className="info-item__subtitle">Enjoy free shipping on U.S. orders over $100.</p>
        </div>
      </div>
    </section>
  )
}

export default Info