import React from 'react'

export const SelectValueFilter = ({ sort }) => {
  const { sortByRowValue, setSortByRowValue } = sort

  const handleSelectVal = (e) => {
    if (sortByRowValue !== Number(e.target.value)) {
      setSortByRowValue(Number(e.target.value))
    }
  }

  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <p>Сортировать по значению:</p>
        <select
          onClick={handleSelectVal}
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
            По возрастанию
          </option>
          <option value="1">По убыванию</option>
        </select>
      </div>
    </div>
  )
}
