import React, { useEffect, useState } from 'react'
import { FiArrowDownRight, FiArrowUpRight } from 'react-icons/fi'
import axios from '../../api/axios'
import './style.css'

const URL =
  '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&price_change_percentage=24h'

const data = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image:
      'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    current_price: 20437,
    market_cap: 388515823200,
    market_cap_rank: 1,
    fully_diluted_valuation: 427309413528,
    total_volume: 25982577248,
    high_24h: 20433,
    low_24h: 19280.84,
    price_change_24h: 929.67,
    price_change_percentage_24h: 4.76568,
    market_cap_change_24h: 16581595214,
    market_cap_change_percentage_24h: 4.45821,
    circulating_supply: 19093500,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 69045,
    ath_change_percentage: -70.8325,
    ath_date: '2021-11-10T14:24:11.849Z',
    atl: 67.81,
    atl_change_percentage: 29599.05735,
    atl_date: '2013-07-06T00:00:00.000Z',
    roi: null,
    last_updated: '2022-07-14T15:54:36.318Z',
    price_change_percentage_24h_in_currency: 4.765676361244927,
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image:
      'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
    current_price: 1142.29,
    market_cap: 135715151306,
    market_cap_rank: 2,
    fully_diluted_valuation: null,
    total_volume: 13933250988,
    high_24h: 1133.99,
    low_24h: 1053.3,
    price_change_24h: 78.51,
    price_change_percentage_24h: 7.38003,
    market_cap_change_24h: 8644921182,
    market_cap_change_percentage_24h: 6.80326,
    circulating_supply: 119679017.936922,
    total_supply: 119679017.936922,
    max_supply: null,
    ath: 4878.26,
    ath_change_percentage: -77.17391,
    ath_date: '2021-11-10T14:24:19.604Z',
    atl: 0.432979,
    atl_change_percentage: 257075.62078,
    atl_date: '2015-10-20T00:00:00.000Z',
    roi: {
      times: 73.78430577320191,
      currency: 'btc',
      percentage: 7378.430577320191,
    },
    last_updated: '2022-07-14T15:54:53.433Z',
    price_change_percentage_24h_in_currency: 7.380025279391191,
  },
  {
    id: 'tether',
    symbol: 'usdt',
    name: 'Tether',
    image:
      'https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707',
    current_price: 1.003,
    market_cap: 65894405691,
    market_cap_rank: 3,
    fully_diluted_valuation: null,
    total_volume: 53445191279,
    high_24h: 1.005,
    low_24h: 0.995823,
    price_change_24h: -0.000294185071555875,
    price_change_percentage_24h: -0.02932,
    market_cap_change_24h: -168185443.33473206,
    market_cap_change_percentage_24h: -0.25458,
    circulating_supply: 65930930060.3992,
    total_supply: 65930930060.3992,
    max_supply: null,
    ath: 1.32,
    ath_change_percentage: -24.25185,
    ath_date: '2018-07-24T00:00:00.000Z',
    atl: 0.572521,
    atl_change_percentage: 75.05387,
    atl_date: '2015-03-02T00:00:00.000Z',
    roi: null,
    last_updated: '2022-07-14T15:51:09.540Z',
    price_change_percentage_24h_in_currency: -0.02932282826388414,
  },
  {
    id: 'usd-coin',
    symbol: 'usdc',
    name: 'USD Coin',
    image:
      'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389',
    current_price: 1.004,
    market_cap: 55472486074,
    market_cap_rank: 4,
    fully_diluted_valuation: null,
    total_volume: 4643546832,
    high_24h: 1.01,
    low_24h: 0.993562,
    price_change_24h: 0.00046985,
    price_change_percentage_24h: 0.04683,
    market_cap_change_24h: 93576425,
    market_cap_change_percentage_24h: 0.16897,
    circulating_supply: 55324069170.6038,
    total_supply: 55324596365.3219,
    max_supply: null,
    ath: 1.17,
    ath_change_percentage: -14.32747,
    ath_date: '2019-05-08T00:40:28.300Z',
    atl: 0.891848,
    atl_change_percentage: 12.65228,
    atl_date: '2021-05-19T13:14:05.611Z',
    roi: null,
    last_updated: '2022-07-14T15:55:21.268Z',
    price_change_percentage_24h_in_currency: 0.046828114347075844,
  },
  {
    id: 'binancecoin',
    symbol: 'bnb',
    name: 'BNB',
    image:
      'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850',
    current_price: 237.03,
    market_cap: 38481756659,
    market_cap_rank: 5,
    fully_diluted_valuation: 38915364478,
    total_volume: 1400244717,
    high_24h: 235.68,
    low_24h: 221.43,
    price_change_24h: 13.36,
    price_change_percentage_24h: 5.97454,
    market_cap_change_24h: 2064782753,
    market_cap_change_percentage_24h: 5.66984,
    circulating_supply: 163276974.63,
    total_supply: 163276974.63,
    max_supply: 165116760,
    ath: 686.31,
    ath_change_percentage: -66.04842,
    ath_date: '2021-05-10T07:24:17.097Z',
    atl: 0.0398177,
    atl_change_percentage: 585096.95926,
    atl_date: '2017-10-19T00:00:00.000Z',
    roi: null,
    last_updated: '2022-07-14T15:55:15.758Z',
    price_change_percentage_24h_in_currency: 5.97453944681688,
  },
  {
    id: 'binance-usd',
    symbol: 'busd',
    name: 'Binance USD',
    image:
      'https://assets.coingecko.com/coins/images/9576/large/BUSD.png?1568947766',
    current_price: 1.004,
    market_cap: 18126920510,
    market_cap_rank: 6,
    fully_diluted_valuation: null,
    total_volume: 5756051780,
    high_24h: 1.018,
    low_24h: 0.994347,
    price_change_24h: 0.00042195,
    price_change_percentage_24h: 0.04206,
    market_cap_change_24h: 167080088,
    market_cap_change_percentage_24h: 0.9303,
    circulating_supply: 18002699781.86,
    total_supply: 18002699781.86,
    max_supply: null,
    ath: 1.15,
    ath_change_percentage: -13.26207,
    ath_date: '2020-03-13T02:35:42.953Z',
    atl: 0.901127,
    atl_change_percentage: 11.09782,
    atl_date: '2021-05-19T13:04:37.445Z',
    roi: null,
    last_updated: '2022-07-14T15:54:50.962Z',
    price_change_percentage_24h_in_currency: 0.042057081821550144,
  },
]

export const Featured = () => {
  const [quotesData, setQuotesData] = useState([])
  const [error, setError] = useState(false)

  const getQuotes = async () => {
    try {
      const res = await axios.get(URL)
      console.log(`res`, res.data)
      setQuotesData(res.data)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  useEffect(() => {
    // getQuotes()
    setQuotesData([...data])
  }, [])

  if (error) return null

  return (
    <div className="featured">
      <div className="container">
        {/* Left */}
        <div className="left">
          <h2>
            Открой для себя топовые криптовалюты: Bitcoin, Ethereum, и Dogecoin.
          </h2>
          <p>Все виды крипто: Скриптовалюты и NFT</p>
          <button className="btn">Узнать больше</button>
        </div>
        {/* Right */}
        <div className="right">
          {quotesData.map((c) => (
            <div key={c.id} className="card">
              <div className="top">
                <img src={c.image} alt={c.name} />
              </div>
              <div>
                <h5>{c.name}</h5>
                <p>${c.current_price.toLocaleString()}</p>
              </div>
              {Number(c.price_change_percentage_24h) > 0 ? (
                <div className="change green">
                  <FiArrowUpRight className="icon" />
                  <span>{c.price_change_percentage_24h.toFixed(2) + '%'}</span>
                  <span
                    style={{
                      color: 'grey',
                      fontSize: '.75rem',
                      marginLeft: '.75rem',
                    }}
                  >
                    {'24h'}
                  </span>
                </div>
              ) : (
                <div className="change red">
                  <FiArrowDownRight className="icon" />
                  <span>{c.price_change_percentage_24h.toFixed(2) + '%'}</span>
                  <span
                    style={{
                      color: 'grey',
                      fontSize: '.75rem',
                      marginLeft: '.75rem',
                    }}
                  >
                    {'24h'}
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
