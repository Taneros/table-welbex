import React from 'react'

export const Table = ({ rowNames, data }) => {
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          {rowNames.map((rowName, idx) => (
            <th
              key={idx}
              className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
            >
              {rowName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((c) => {
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
  )
}
