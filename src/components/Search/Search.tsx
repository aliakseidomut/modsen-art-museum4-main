import React, { ChangeEvent } from "react";
import { searchSchema } from "@utils/searchSchema";
import styles from "./Search.module.css";

interface Props {
  onSearch: (value: string) => void;
  setError: (error: string | null) => void;
}

export default function Search({ onSearch, setError }: Props) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    searchSchema
      .validate(value)
      .then(validatedValue => {
        setError(null);
        if (validatedValue || validatedValue === "") {
          onSearch(validatedValue);
        }
      })
      .catch(err => {
        setError(err.message);
      });
  };

  return (
    <div className={styles.Search}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search art, artist, work..."
        onChange={handleChange}
      />
      <img
        src="https://raw.githubusercontent.com/aliakseidomut/modsen-art-museum4-main/8a35c43bba1f5065c852af2b5d0fbd4925472ba6/src/assets/images/search.svg"
        alt="search icon"
      />
    </div>
  );
}
