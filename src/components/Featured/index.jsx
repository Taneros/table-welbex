import React, { useEffect, useState } from 'react'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import axios from '../../api/axios'
import './style.css'
import { MOCK_DATA as data } from '../../api/MOCK_DATA'
import { randomNum, getRandomColor } from '../../utils/random'
import { useNavigate } from 'react-router-dom'

const URL = '/table'

export const Featured = () => {
  const [companyData, setCompanyData] = useState([])
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  let freshData = []

  const getTableData = async () => {
    try {
      const res = await axios.get(URL)
      freshData = res.data
    } catch (error) {
      console.error(error)
      setError(true)
      freshData = data.slice()
    }
  }

  useEffect(() => {
    getTableData().then(() => {
      const random = randomNum(0, 99)
      setCompanyData([...freshData.slice(random, random + 6)])
    })
  }, [])

  return (
    <div className="featured">
      <div className="container">
        {/* Left */}
        <div className="left">
          <h2>
            Открой для себя топовые Компании: Schmeler LLC, Runte LLC и
            Runolfsson-Cremin.
          </h2>
          <p>Все виды анализа: Расстояния, Количество, Название</p>
          <button className="btn" onClick={() => navigate('/table')}>
            Смотреть Таблицу Сейчас!
          </button>
        </div>
        {/* Right */}
        <div className="right">
          {companyData.map((c) => (
            <div key={c.id} className="card">
              <div className="top">
                <div
                  style={{
                    clipPath: 'polygon(0 0, 100% 15%, 100% 100%, 0 85%)',
                  }}
                >
                  <img
                    src={`https://fakeimg.pl/50x50/${getRandomColor()}/?text=${c.name.slice(
                      0,
                      5
                    )}&font=lobster`}
                    alt={c.name}
                  />
                </div>
              </div>
              <div>
                <h5 className="truncate">{c.name}</h5>
                <p className="text-sm">{c.quantity.toLocaleString()}</p>
              </div>
              {Number(c.distance) > 5000 ? (
                <div className="change green">
                  <FiArrowUpRight className="icon" />
                  <span
                    style={{
                      color: 'grey',
                      fontSize: '.75rem',
                      marginLeft: '.75rem',
                    }}
                  >
                    {c.distance}
                  </span>
                </div>
              ) : (
                <div className="change red">
                  <FiArrowDownRight className="icon" />
                  <span
                    style={{
                      color: 'grey',
                      fontSize: '.75rem',
                      marginLeft: '.75rem',
                    }}
                  >
                    {c.distance}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
