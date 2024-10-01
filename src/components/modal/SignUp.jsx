import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signUp } from '../../utils/urls'
import Axios from '../../api'
import { setUser } from '../../store/slices/user'

function SignUp() {
  const [email, setEmail] = useState('muhammadevvv@gmail.com')
  const [name, setName] = useState('Muhammad')
  const [password1, setPassword1] = useState('123456789')
  const [password2, setPassword2] = useState('123456789')

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  let data = {
    email: email,
    name: name,
    password1: password1,
    password2: password2
  }


  const handleFinish = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      Axios.post(signUp, data).then(res => {
        console.log(res);
        // dispatch(setUser(res.data))
        setLoading(false)
      }).catch(err => {
        setLoading(false)
        if (err?.response?.status === 401) {
          alert('Bunday user bor!!!')
        }
      });
    } catch (error) {
      setLoading(false)
      if (error?.response?.status === 401) {
        alert('Bunday user bor!!!')
      }
    }
  }

  return (
    <div className='signup'>
      <div className="container">
        <div className="signup-row">
          <div className="signup-panel">
            <div className="signup-head">
              <h1 className='signup-head_title'>Регистрация</h1>
            </div>
            <form className="signup-form" onSubmit={handleFinish}>
              <label htmlFor="" className='signup-form_label_email'>
                user name *
                <input className='signup-form_input_email' type="еуче" />
              </label>
              <label htmlFor="" className='signup-form_label_email'>
                Эл. почта *
                <input className='signup-form_input_email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </label>
              <label htmlFor="" className='signup-form_label_password'>
                Пароль *
                <input className='signup-form_input_password' type="password" value={password1} onChange={(e) => setPassword1(e.target.value)} />
              </label>
              <label className='signup-form_label_password'>
                Повторите пароль *
                <input className='signup-form_input_password' type="password" value={password2} />
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