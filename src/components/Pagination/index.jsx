import React, { Fragment, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { nanoid } from 'nanoid'

export const Pagination = ({ pages }) => {
  const id = nanoid()
  const { listOfPages, setCurrentPage, currentPage } = pages

  const [pageNumLimit, setPageNumLimit] = useState(5)
  const [maxPageLimit, setMaxPageLimit] = useState(5)
  const [minPageLimit, setMinPageLimit] = useState(0)

  const handleClickPage = (e) => {
    setCurrentPage(Number(e.target.id))
  }

  const handlePrevPage = () => {
    if (currentPage === 1) return
    setCurrentPage((prev) => prev - 1)

    if ((currentPage - 1) % pageNumLimit === 0) {
      setMaxPageLimit(maxPageLimit - pageNumLimit)
      setMinPageLimit(minPageLimit - pageNumLimit)
    }
  }

  const handleNextPage = () => {
    if (currentPage === listOfPages.at(-1)) return
    setCurrentPage((prev) => prev + 1)
    if (currentPage + 1 > maxPageLimit) {
      setMaxPageLimit(maxPageLimit + pageNumLimit)
      setMinPageLimit(minPageLimit + pageNumLimit)
    }
  }

  let pageHellipDown = null
  if (minPageLimit >= 1) {
    pageHellipDown = (
      <span
        onClick={handlePrevPage}
        className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 cursor-pointer"
      >
        ...
      </span>
    )
  }

  let pageHellipUp = null
  if (listOfPages.length > maxPageLimit) {
    pageHellipUp = (
      <span
        onClick={handleNextPage}
        className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 cursor-pointer"
      >
        ...
      </span>
    )
  }

  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div>
        <nav
          className="relative inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <button
            disabled={currentPage === listOfPages[0]}
            onClick={handlePrevPage}
            type="button"
            className={
              'relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500' +
              (currentPage === listOfPages[0]
                ? ' text-gray-200 '
                : ' hover:bg-gray-50')
            }
          >
            <FaAngleLeft className="h-5 w-5" />
          </button>
          {pageHellipDown}
          <ul>
            {listOfPages.map((num, idx) => {
              const id = nanoid()
              return (
                <Fragment key={id}>
                  {num < maxPageLimit + 1 && num > minPageLimit ? (
                    <li
                      id={num}
                      onClick={handleClickPage}
                      className={
                        (currentPage === num
                          ? 'bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                          : 'relative inline-flex items-center px-4 py-2 border text-sm font-medium') +
                        ' cursor-pointer'
                      }
                    >
                      {num}
                    </li>
                  ) : null}
                </Fragment>
              )
            })}
          </ul>
          {pageHellipUp}
          <button
            disabled={currentPage === listOfPages.at(-1)}
            onClick={handleNextPage}
            className={
              'relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500' +
              (currentPage === listOfPages.at(-1)
                ? ' text-gray-200 '
                : ' hover:bg-gray-50')
            }
          >
            <FaAngleRight className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </div>
  )
}
