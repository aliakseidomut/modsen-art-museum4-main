import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import ArtWorkCard from "@components/ArtWorkCard/ArtWorkCard";
import Pagination from "@components/Pagination/Pagination";
import Search from "@components/Search/Search";
import { ArtWorkInfo } from "../../types/ArtWork";
import Api from "@utils/Api";
import useDebounce from "@utils/hooks/useDebounce";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const [curPage, setCurPage] = useState(1);
  const [artworks, setArtworks] = useState<ArtWorkInfo[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearchValue = useDebounce(searchValue);
  const debouncedCurPage = useDebounce(curPage, 200);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    Api.getPage(debouncedCurPage, debouncedSearchValue)
      .then(artworks => {
        setArtworks(artworks);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });

    Api.getTotalPages(debouncedSearchValue)
      .then(res => {
        setTotalPages(res);
      })
      .catch(err => {
        setError(err);
      });
  }, [debouncedSearchValue, debouncedCurPage]);

  const handleSearch = (str: string) => {
    setSearchValue(str);
    setCurPage(1);
  };

  const handleSetPage = (curPage: number) => {
    setCurPage(curPage);
  };

  return (
    <div className={styles.HomePage}>
      <h2 className={styles.h2}>
        Let&apos;s Find Some <span style={{ color: "#F17900" }}>Art</span> Here!
      </h2>

      <Search onSearch={handleSearch} setError={setError} />

      {error && <div className={styles.error}>{error}</div>}

      <h4 className={styles.h4}>Topics for you</h4>
      <h3 className={styles.h3}>Our special gallery</h3>

      <div className={styles.artWorks}>
        {isLoading ? (
          <ClipLoader color="#F17900" loading={isLoading} size={50} />
        ) : artworks.length === 0 ? (
          <h1>Not found</h1>
        ) : (
          artworks.map((el: ArtWorkInfo) => (
            <ArtWorkCard
              key={el.id}
              id={el.id}
              imgUrl={el.imgUrl}
              title={el.title}
              artistTitle={el.artistTitle}
            />
          ))
        )}
      </div>

      {totalPages !== 0 && (
        <Pagination
          onSetPage={handleSetPage}
          curPage={curPage}
          totalPages={totalPages}
        />
      )}
    </div>
  );
}