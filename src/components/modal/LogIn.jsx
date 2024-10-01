import React from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
    <div className='login'>
      <div className="container">
        <div className="login-row">
          <div className="login-panel">
            <div className="login-head">
              <h1 className='login-head_title'>Вход</h1>
            </div>
            <form className="login-form">
              <label htmlFor="" className='login-form_label_email'>
                Эл. почта *
                <input className='login-form_input_email' type="email" />
              </label>
              <label htmlFor="" className='login-form_label_password'>
                Пароль *
                <input className='login-form_input_password' type="password" />
              </label>
              <Link>Напомнить пароль</Link>
              <button className='login-form_login-btn'>Войти</button>
            </form>
            <div className="login-footer">
              <p className='login-footer_text'>Я впервые на сайте</p>
              <Link to='/signup' className='login-footer_signup-btn'>Регистрация</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogIn