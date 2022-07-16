import React from 'react'

export const Search = ({ search }) => {
  const { setSearchTable } = search

  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <label htmlFor="search" className="form-label inline-block text-lg">
          Поиск по названию:
        </label>
        <input
          type="text"
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          id="search"
          placeholder="Искать"
          onChange={(e) => setSearchTable(e.target.value)}
        />
      </div>
    </div>
  )
}
