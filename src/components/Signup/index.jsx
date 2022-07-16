import React from 'react'
import './style.css'

export const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        {/* Left */}
        <div className="left">
          <img
            src={require('../../assets/short-break-send-few-messages.jpg')}
            alt="mobile-app"
          ></img>
        </div>
        {/* Right */}
        <div className="right">
          <h2>Оформи подписку сейчас получи скидку 30% на данные от 1 Тб.</h2>
          <p>
            Улучшая свой анализ компаний по данным в количестве 50+ топовых
            компаний. Просто введи свою почту и наши специалисты сразу с тобой
            свяжутся.
          </p>
          <div>
            <input className="input-container" placeholder="Твой email" />
            <button className="btn">Узнать больше</button>
          </div>
        </div>
      </div>
    </div>
  )
}
