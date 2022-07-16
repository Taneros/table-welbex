import React, { useEffect } from 'react'
import axios from '../../api/axios'

const URL = '/table'

export const Main = () => {
  const getTableData = async () => {
    try {
      const res = await axios.get(URL)
      console.log(`res`, res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTableData()
    // setTableData([...data])
  }, [])

  return <div>Main</div>
}
