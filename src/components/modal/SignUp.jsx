import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div className='signup'>
      <div className="container">
        <div className="signup-row">
          <div className="signup-panel">
            <div className="signup-head">
              <h1 className='signup-head_title'>Регистрация</h1>
            </div>
            <form className="signup-form">
              <label htmlFor="" className='signup-form_label_email'>
                Эл. почта *
                <input className='signup-form_input_email' type="email" />
              </label>
              <label htmlFor="" className='signup-form_label_password'>
                Пароль *
                <input className='signup-form_input_password' type="password" />
              </label>
              <label className='signup-form_label_password'>
                Повторите пароль *
                <input className='signup-form_input_password' type="password" />
              </label>
              <label htmlFor="">
                <input type="checkbox" />
                Даю согласие на обработку персональных данных *
              </label>
              <button className='signup-form_signup-btn'>Зарегистрироваться</button>
            </form>
            <div className="signup-footer">
              <p className='signup-footer_text'>У меня есть аккаунт</p>
              <Link to='/login' className='signup-footer_login-btn'>Войти</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp