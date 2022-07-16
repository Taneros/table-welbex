import React from 'react'
import './style.css'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* Left */}
        <div className="left">
          <p>Таблица работает 24/7.</p>
          <h2>Изучай данные от 50+ компаний</h2>
          <p>Узнавай, выбирай и анализируй данные.</p>
          <div className="input-container">
            <input type={'email'} placeholder="Твой email"></input>
            <button className="btn">Узнать больше</button>
          </div>
        </div>
        {/* Right */}
        <div className="right">
          <div className="img-container">
            <img
              src={require('../../assets/paper-analysis.jpg')}
              alt="hero"
            ></img>
          </div>
        </div>
      </div>
    </div>
  )
}
