import React, { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import Sort from "../../components/Sort/Sort";
import useDebounce from "../../utils/hooks/useDebounce";
import styles from "./HomePage.module.css";
import OtherWorks from "../../components/OtherWorks/OtherWorks";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import ArtWorksList from "../../components/ArtWorksList/ArtWorksList";

export default function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const [curPage, setCurPage] = useState(1);
  const [sortValue, setSortValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue);
  const debouncedCurPage = useDebounce(curPage, 200);
  const debouncedSortValue = useDebounce(sortValue, 200);

  const handleSearch = (str: string) => {
    setSearchValue(str);
    setCurPage(1);
  };

  const handleSetPage = (curPage: number) => {
    setCurPage(curPage);
  };

  const handleSortChange = (sort: string) => {
    setSortValue(sort);
    setCurPage(1);
  };

  return (
    <ErrorBoundary>
      <div className={styles.HomePage}>
        <h2 className={styles.h2}>
          Let&apos;s Find Some <span style={{ color: "#F17900" }}>Art</span>{" "}
          Here!
        </h2>

        <Search onSearch={handleSearch} />
        <Sort onSortChange={handleSortChange} />

        <h4 className={styles.h4}>Topics for you</h4>
        <h3 className={styles.h3}>Our special gallery</h3>

        <ArtWorksList
          curPage={debouncedCurPage}
          searchValue={debouncedSearchValue}
          sortValue={debouncedSortValue}
        />

        <Pagination
          onSetPage={handleSetPage}
          curPage={curPage}
          searchValue={debouncedSearchValue}
        />

        <OtherWorks />
      </div>
    </ErrorBoundary>
  );
}
