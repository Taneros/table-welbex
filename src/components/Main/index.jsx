import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { MOCK_DATA as data } from '../../api/MOCK_DATA'
import { Pagination } from '../Pagination'
import { SelectRowFilter } from '../SelectRowFilter'
import { SelectValueFilter } from '../SelectValueFilter'
import { Search } from '../Search'
import useDebounce from '../../utils/useDebounce'

const URL = '/table'

export const Main = () => {
  const [tableData, setTableData] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [listOfPages, setListOfPages] = useState([])
  const [error, setError] = useState(false)

  const [sortByRow, setSortByRow] = useState(0)
  const [sortByRowValue, setSortByRowValue] = useState(0)
  const [searchTable, setSearchTable] = useState('')

  const debouncedSearch = useDebounce(searchTable, 500)

  let freshData = []

  const getTableData = async () => {
    try {
      const res = await axios.get(URL)
      freshData = res.data
    } catch (error) {
      console.error(error)
      setError(true)
      freshData = data.slice()
      setTableData(freshData)
    }
  }

  useEffect(() => {
    getTableData().then(() => setTableData([...freshData]))
  }, [])

  // Search Table

  useEffect(() => {
    if (debouncedSearch) {
      getTableData().then(() => {
        console.log(`debouncedSearch`, debouncedSearch)
        const reg = new RegExp(`${debouncedSearch}`, 'ig')
        const searchedData = freshData.filter((item) =>
          reg.test(item.name.toLowerCase())
        )
        if (searchedData.length > 0) return setTableData(searchedData)
        else
          setTableData([
            {
              date: '-',
              name: 'Нет данных',
              quantity: '-',
              distance: '-',
            },
          ])
      })
    } else getTableData().then(() => setTableData([...freshData]))
  }, [debouncedSearch])

  //  Pagination Setup

  useEffect(() => {
    const pageArr = []
    for (let i = 1; i <= Math.ceil(tableData.length / itemsPerPage); i++) {
      pageArr.push(i)
    }
    setListOfPages(pageArr)
  }, [tableData?.length])

  const indexOfLastItem = currentPage * itemsPerPage

  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  const currentPageItems = tableData.slice(indexOfFirstItem, indexOfLastItem)

  let filteredTable = currentPageItems

  // Sorting by Rows + Value Asc / Desc

  switch (sortByRow) {
    case 1:
      filteredTable = currentPageItems.slice().sort((a, b) => {
        if (sortByRowValue === 0) return a.name > b.name ? 1 : -1
        return a.name < b.name ? 1 : -1
      })
      break

    case 2:
      filteredTable = currentPageItems.slice().sort((a, b) => {
        if (sortByRowValue === 0) return a.quantity - b.quantity
        return b.quantity - a.quantity
      })
      break

    case 3:
      filteredTable = currentPageItems.slice().sort((a, b) => {
        if (sortByRowValue === 0) return a.market_cap - b.market_cap
        return b.quantity - a.quantity
      })
      break

    default:
      break
  }

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        {error && (
          <div className="flex flex-col items-center">
            <p className="text-red-400">Ошибка запроса к серверу!</p>
            <p>Чтобы запустить сервер выполнить: yarn serve</p>
            <p>Используются данные из файла.</p>
          </div>
        )}
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold leading-tight">Таблица</h2>
          <SelectRowFilter sort={{ sortByRow, setSortByRow }} />
          <SelectValueFilter sort={{ sortByRowValue, setSortByRowValue }} />
          <Search search={{ searchTable, setSearchTable }} />
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Дата
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Название
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Количество
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Расстояние
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTable.map((c) => {
                  return (
                    <tr className="text-base" key={c.id}>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex">
                          <div className="ml-3 flex flex-1 justify-start items-center">
                            <p className="text-gray-900 white-space-no-wrap text-base">
                              {c.date}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 white-space-no-wrap text-base">
                          {c.name}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 white-space-no-wrap text-base">
                          {c.quantity}
                        </p>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p className="text-gray-900 white-space-no-wrap text-base">
                          {c.distance}
                        </p>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination pages={{ listOfPages, setCurrentPage, currentPage }} />
    </div>
  )
}
