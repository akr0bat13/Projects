import React from 'react'
import { getPagePagination } from '../../utils/pages'

const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = getPagePagination(totalPages)

  return (
    <div className="pagination">
      {pagesArray.map((p) => (
        <div
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? 'page page-current' : 'page'}
        >
          {p}
        </div>
      ))}
    </div>
  )
}

export default Pagination
