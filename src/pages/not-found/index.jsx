import React from 'react'
import { CakeIcon } from '../../assets/icons'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className='not-found'>
      <div className="container">
          <h1 className='not-found_title'>404</h1>
        <div className="not-found-row">
          <div className='not-found_content'>

            <div className='not-found_content_icon'><CakeIcon /></div>
            <p className='not-found_content_text'>Страница не существует или была удалена</p>
            <Link className='not-found_content_link'>
              Перейти на главную</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default NotFoundPage