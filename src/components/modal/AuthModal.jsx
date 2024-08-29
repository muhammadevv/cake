import React from 'react'
import { CloseIcon } from '../../assets/icons'

function AuthModal({auth, setAuth}) {
  return (
    <div className={auth ? 'auth open' : 'auth'}>
      <div className="auth-panel">
        <div className="auth-head">
          <div className="auth-row">
            <h1 className='auth-head_title'>Вход</h1>
            <button onClick={() => setAuth(false)}><CloseIcon/> </button>
          </div>
        </div>
        <div className="auth-form"></div>
        <div className="auth-footer">

        </div>
      </div>
    </div>
  )
}

export default AuthModal