import React from 'react'

function Clean() {
  return (
    <section className='clean'>
      <div className="clean-bg">
        <img className='clean-bg__img' src="/men/clean/clean-bg.avif" alt="" />
        <img className='clean-bg__img_mobile' src="/men/clean/clean-bg-2.avif" alt="" />
      </div>
      <div className="clean-content">
        <h1 className="clean-title">We're on Mission <br className='clean-title__br' /> To Clean Up the Industry</h1>
        <p className="clean-subtitle">Read about our progress in our latest impact Report.</p>
        <button className="clean-button">Learn more </button>
      </div>
    </section>
  )
}

export default Clean