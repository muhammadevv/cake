import React from 'react'
import { CloseIcon, SearchResetIcon } from '../../assets/icons'

function SearchModal({ searchOpen, setSearchOpen }) {
  return (
    <div className={searchOpen ? 'search open' : 'search'}>
      <div className="search-bg" onClick={() => setSearchOpen(false)}></div>
      <div className="search-content">
        <div className="container">
          <div className="search-center">
            <form>
              <div className="search-form">
                <input className='search-form_input' type="text" placeholder='Поиск' />

                <button className='search-form_reset' type="reset">
                <SearchResetIcon/>
                </button>

              </div>
              <button className='search-form_button' type="submit">Найти</button>
            </form>
          </div>

          <button onClick={() => setSearchOpen(false)} className="search-close_btn">
            <CloseIcon/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchModal