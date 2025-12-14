import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from './usePagination';
import './Paggination.css';
const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  const onFirst = () => {
    onPageChange(1);
  }
  const onLast = () => {
    onPageChange(lastPage);
  }
  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div className="paggination-div">
      <ul
        className={classnames('pagination-container', { [className]: className })}
      >
        <li
          className={classnames('pagination-item', {
            disabled: currentPage === 1
          })}
          onClick={onFirst}
        >
          &#171;
        </li>
        <li
          className={classnames('pagination-item', {
            disabled: currentPage === 1
          })}
          onClick={onPrevious}
        >
          <div className="arrow left" />
        </li>
        {paginationRange.map((pageNumber, i) => {
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          return (
            <li
              className={classnames('pagination-item', {
                selected: pageNumber === currentPage
              })}
              key={i}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        <li
          className={classnames('pagination-item', {
            disabled: currentPage === lastPage
          })}
          onClick={onNext}
        >
          <div className="arrow right" />
        </li>
        <li
          className={classnames('pagination-item', {
            disabled: currentPage === lastPage
          })}
          onClick={onLast}
        >
          <span>&#187;</span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
