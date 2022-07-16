export const sortBy = ({ sortByRow, currentPageItems, sortByRowValue }) => {
  let sortedTable = []

  switch (sortByRow) {
    case 1:
      sortedTable = currentPageItems.slice().sort((a, b) => {
        if (sortByRowValue === 0) return a.name > b.name ? 1 : -1
        return a.name < b.name ? 1 : -1
      })
      break

    case 2:
      sortedTable = currentPageItems.slice().sort((a, b) => {
        if (sortByRowValue === 0) return a.quantity - b.quantity
        return b.quantity - a.quantity
      })
      break

    case 3:
      sortedTable = currentPageItems.slice().sort((a, b) => {
        if (sortByRowValue === 0) return a.market_cap - b.market_cap
        return b.quantity - a.quantity
      })
      break

    default:
      break
  }

  return sortedTable.length ? sortedTable : null
}
