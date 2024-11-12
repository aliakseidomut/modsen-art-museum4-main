import React, { ChangeEvent, useState } from "react";
import { searchSchema } from "@utils/searchSchema";
import { IoIosSearch } from "react-icons/io";
import styles from "./Search.module.css";

interface Props {
  onSearch: (value: string) => void;
}

export default function Search({ onSearch }: Props) {
  const [error, setError] = useState<string | null>(null);

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
    <>
      <div className={styles.Search}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search art, artist, work..."
          onChange={handleChange}
        />
        <IoIosSearch size={35} />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
}
