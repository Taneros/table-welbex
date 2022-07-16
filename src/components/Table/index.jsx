import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { MOCK_DATA as data } from '../../api/MOCK_DATA'
import { Pagination } from '../Pagination'
import { SelectRowFilter } from '../SelectRowFilter'
import { SelectValueFilter } from '../SelectValueFilter'
import { Search } from '../Search'
import useDebounce from '../../utils/useDebounce'
import { Table as CommonTable } from '../Common/Table'
import { sortBy } from '../../utils/sorting'
import { Alert } from '../Common/Alert'

const URL = '/table'

const rowNames = ['Дата', 'Название', 'Количество', 'Расстояние']

export const Table = () => {
  const [tableData, setTableData] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, _] = useState(10)
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
    }
  }

  useEffect(() => {
    getTableData().then(() => {
      setTableData([...freshData])
    })
  }, [])

  // Search Table

  useEffect(() => {
    if (debouncedSearch) {
      getTableData().then(() => {
        const reg = new RegExp(`${debouncedSearch}`, 'ig')
        const searchedData = freshData.filter((item) => reg.test(item.name))
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

  // Sorting by Rows + Value Asc / Desc
  let filteredTable =
    sortBy({ sortByRow, currentPageItems, sortByRowValue }) || currentPageItems

  return (
    <div className="container mx-auto px-4 sm:px-8 ">
      <div className="py-8 ">
        {error && (
          <div className="flex flex-col items-center">
            <Alert
              message={`Ошибка запроса к серверу!\n
            Чтобы запустить сервер выполнить: yarn serve.\n
            Используются данные из файла.`}
            />
          </div>
        )}
        <div className="flex justify-between lg:flex-col lg:items-start">
          <h2 className="text-2xl font-semibold leading-tight">Таблица</h2>
          <SelectRowFilter sort={{ sortByRow, setSortByRow }} />
          <SelectValueFilter sort={{ sortByRowValue, setSortByRowValue }} />
          <Search search={{ searchTable, setSearchTable }} />
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <CommonTable rowNames={rowNames} data={filteredTable} />
          </div>
        </div>
      </div>
      <Pagination pages={{ listOfPages, setCurrentPage, currentPage }} />
    </div>
  )
}
