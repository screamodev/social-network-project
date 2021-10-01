import React, { useState } from "react";
import classes from "./Pagination.module.css";
import cn from "classnames";

const Pagination = ({
  currentPage,
  totalItemsCount,
  pageSize,
  onPageChanged,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={cn(classes.pagination)}>
      {portionNumber > 1 && (
        <button
         className={cn(classes.setButton)}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          ◀
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={cn(
                { [classes.selectedPage]: currentPage === p },
                classes.pageNumber
              )}
              key={p}
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button className={cn(classes.setButton)}
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          ▶
        </button>
      )}
    </div>
  );
};
export default Pagination;
