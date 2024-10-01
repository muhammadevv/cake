import { CartIcon, CloseIcon, LogoIcon, MenuIcon, SearchIcon, UserIcon } from '../../assets/icons'
import { Link, useLocation } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { useState } from 'react'
import SearchModal from '../modal/SearchModal'

function Header({ menuOpen, setMenuOpen, modalOpen, setModalOpen, setAuth }) {
  const { items } = useSelector(state => state.cart)
  const location = useLocation()
  const path = location.pathname.split('').slice(0, 11).join('')
  const [searchOpen, setSearchOpen] = useState(false)

  const handleCart = () => {
    if (!modalOpen) {
      setMenuOpen(false)
      setModalOpen(true)
    }
  }

  const handleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false)
    }
    else {
      setMenuOpen(true)
    }
  }

  return (
    <>
      <header className='header'>
        <div className="container">
          <div className="header-row">
            <div className="header-logo">
              <Link to='/'>
                LOGO
              </Link>
            </div>
            <div className="header-nav">
              <Link className='header-link'>cakes</Link>
              <Link className='header-link'>TRAINING COURSES</Link>
              <Link className='header-link'>CONTACTS</Link>
            </div>
            <div className="header-buttons">
              <button className='header-button serach' onClick={() => setSearchOpen(true)}>
                <SearchIcon />
              </button>
              <button className='header-button user'>
                <Link to='/login'>
                  <UserIcon />
                </Link>
              </button>
              <button className='header-button cart' onClick={handleCart} ><CartIcon />
                {
                  items.length > 0 && <span className='header-button__span'>{items.length}</span>
                }
              </button>
            </div>
          </div>
        </div>
      </header>
      <SearchModal setSearchOpen={setSearchOpen} searchOpen={searchOpen} />

    </>
  )
}

export default Header