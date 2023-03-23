import React from "react";
import ReactPaginate from "react-paginate";
const Paginate = ({ GetPageData, pageCount }) => {
  const handlePageClick = (data) => {
    GetPageData(data.selected + 1);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName="pagination p-3"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      activeClassName="active"
      breakClassName="page-item"
      breakLinkClassName="page-link"
    />
  );
};

export default Paginate;
