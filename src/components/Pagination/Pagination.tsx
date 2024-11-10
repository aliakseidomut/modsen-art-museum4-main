import React from "react";
import styles from "./Pagination.module.css";

interface PaginationProps {
  onSetPage: (curPage: number) => void;
  curPage: number;
  totalPages: number;
}

export default function Pagination({
  onSetPage,
  curPage,
  totalPages,
}: PaginationProps) {
  const handleClick = (num: number) => {
    if (num !== curPage) {
      onSetPage(num);
    }
  };

  const getPages = () => {
    let startPage = Math.max(1, curPage - 1);
    let endPage = Math.min(totalPages, curPage + 2);

    if (curPage <= 2) {
      endPage = Math.min(totalPages, 4);
    } else if (curPage >= totalPages - 1) {
      startPage = Math.max(1, totalPages - 3);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className={styles.Pagination}>
      <button
        onClick={() => handleClick(curPage - 1)}
        disabled={curPage === 1}
        className={curPage === 1 ? styles.hidden : styles.button}
      >
        {"<"}
      </button>

      {getPages().map(page => (
        <button
          key={page}
          onClick={() => handleClick(page)}
          className={page === curPage ? styles.buttonActive : styles.button}
          disabled={page === curPage}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => handleClick(curPage + 1)}
        disabled={curPage === totalPages}
        className={curPage === totalPages ? styles.hidden : styles.button}
      >
        {">"}
      </button>
    </div>
  );
}
