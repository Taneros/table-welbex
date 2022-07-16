import React from 'react'

export const SelectRowFilter = ({ sort }) => {
  const { sortByRow, setSortByRow } = sort

  const handleSelectRow = (e) => {
    if (sortByRow !== Number(e.target.value)) {
      setSortByRow(Number(e.target.value))
    }
  }

  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <p>Сортировать по выбранным столбцам:</p>
        <select
          onClick={handleSelectRow}
          className="form-select appearance-none
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          aria-label="Select"
        >
          <option defaultValue value="0">
            По молчанию
          </option>
          <option value="1">Название</option>
          <option value="2">Количество</option>
          <option value="3">Расстояние</option>
        </select>
      </div>
    </div>
  )
}
