import React from 'react'

function Report() {
  return (
    <section className='report'>
      <div className="report-content">
        <div className="report-item">
          <h3 className="report-item__title">It's A Match</h3>
          <div className="report-item__image">
            <img className='report-item__image__img' src="/men/clean/report-1.avif" alt="" />
          </div>
          <p className="report-item__subtitle">Coordinating outfits for you and your loved ines.</p>
          <p className='report-item__button'>Read More</p>
        </div>
        <div className="report-item">
          <h3 className="report-item__title">Remote Fashion Accountability report 2024</h3>
          <div className="report-item__image">
            <img className='report-item__image__img' src="/men/clean/report-2.avif" alt="" />
          </div>
          <p className="report-item__subtitle">Coordinating outfits for you and your loved ines.</p>
          <p className='report-item__button'>Read More</p>
        </div>
      </div>
    </section>
  )
}

export default Report