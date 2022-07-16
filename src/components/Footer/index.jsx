import React from 'react'
import {
  FaTelegram,
  FaGithub,
  FaReact,
  FaJs,
  FaCss3,
  FaHtml5,
  FaAt,
} from 'react-icons/fa'
import './style.css'

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col col-1">
          <h3>
            Table<span className="primary">WelbeX</span>
          </h3>
        </div>
        <div className="col">
          <h5>Девелопер</h5>
          <span className="bar"></span>
          <a href="mailto:taneros@duck.com">
            <FaAt />
            Отправить Email
          </a>
        </div>
        <div className="col">
          <h5>Контакты</h5>
          <span className="bar"></span>
          <a href="https://github.com/taneros">
            <FaGithub />
            GitHub
          </a>
          <a href="https://t.me/Tanero">
            <FaTelegram />
            Telegram
          </a>
        </div>
        <div className="col">
          <h5>Технологии</h5>
          <span className="bar"></span>
          <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started">
            <FaReact />
            ReactJS
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/javascript">
            <FaJs />
            JavaScript
          </a>
          <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
            <FaCss3 />
            CSS3
          </a>
        </div>
      </div>
    </div>
  )
}
