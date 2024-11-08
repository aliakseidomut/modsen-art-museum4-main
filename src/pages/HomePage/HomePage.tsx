import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import Search from "../../components/Search/Search";
import useDebounce from "../../utils/hooks/useDebounce";

export default function HomePage() {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue);

  useEffect(() => {
    if (debouncedSearchValue) {
      console.log(debouncedSearchValue);
    }
  }, [debouncedSearchValue]);

  const handleSearch = (str: string) => {
    setSearchValue(str);
  };

  return (
    <div className={styles.HomePage}>
      <h2 className={styles.h2}>
        Let&apos;s Find Some <span style={{ color: "#F17900" }}>Art</span> Here!
      </h2>

      <Search onSearch={handleSearch} />
    </div>
  );
}
