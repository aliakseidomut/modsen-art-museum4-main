import React, { useEffect, useState } from "react";
import styles from "./Pagination.module.css";
import { LIMIT_SEARCH_PAGE } from "@constants/uiConstants";
import Api from "@utils/Api";

interface Props {
  onSetPage: (curPage: number) => void;
  curPage: number;
  searchValue: string;
}

export default function Pagination({ onSetPage, curPage, searchValue }: Props) {
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalPages = await Api.getTotalPages(
          LIMIT_SEARCH_PAGE,
          searchValue,
        );
        setTotalPages(totalPages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [totalPages, searchValue]);

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
