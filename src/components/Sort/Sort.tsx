import React, { useState } from "react";
import styles from "./Sort.module.css";

interface Props {
  onSortChange: (sort: string) => void;
}

export default function Sort({ onSortChange }: Props) {
  const [selectedSort, setSelectedSort] = useState("");

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sortValue = event.target.value;
    setSelectedSort(sortValue);
    onSortChange(sortValue);
  };

  return (
    <div className={styles.Sort}>
      <label
        className={selectedSort === "" ? styles.buttonActive : styles.button}
      >
        <input
          type="radio"
          name="sort"
          value=""
          onChange={handleSortChange}
          defaultChecked
        />
        Default
      </label>
      <label
        className={
          selectedSort === "title.keyword" ? styles.buttonActive : styles.button
        }
      >
        <input
          type="radio"
          name="sort"
          value="title.keyword"
          onChange={handleSortChange}
        />
        By title
      </label>
      <label
        className={
          selectedSort === "date_end" ? styles.buttonActive : styles.button
        }
      >
        <input
          type="radio"
          name="sort"
          value="date_end"
          onChange={handleSortChange}
        />
        By date of complete
      </label>
    </div>
  );
}
