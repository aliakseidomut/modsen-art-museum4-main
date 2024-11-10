import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import Search from "../../components/Search/Search";
import useDebounce from "../../utils/hooks/useDebounce";
import ArtWorkCard from "../../components/ArtWorkCard/ArtWorkCard";
import Api from "../../utils/Api";
import { ArtWorkInfo } from "../../types/ArtWork";
import Pagination from "../../components/Pagination/Pagination";
import { ClipLoader } from "react-spinners";

export default function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const [curPage, setCurPage] = useState(1);
  const [artworks, setArtworks] = useState<ArtWorkInfo[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const debouncedSearchValue = useDebounce(searchValue);
  const debouncedCurPage = useDebounce(curPage);

  useEffect(() => {
    setIsLoading(true);

    Api.getPage(debouncedCurPage, debouncedSearchValue).then(artworks => {
      setArtworks(artworks);
      setIsLoading(false);
    });

    Api.getTotalPages(debouncedSearchValue).then(res => {
      setTotalPages(res);
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

      <Search onSearch={handleSearch} />

      <h4 className={styles.h4}>Topics for you</h4>
      <h3 className={styles.h3}>Our special gallery</h3>

      <div className={styles.artWorks}>
        {isLoading ? (
          <ClipLoader color="#F17900" loading={isLoading} size={50} />
        ) : !artworks[0] ? (
          <h1>Not found</h1>
        ) : (
          artworks.map((el: ArtWorkInfo) => (
            <ArtWorkCard
              key={el.id}
              imgUrl={el.imgUrl}
              title={el.title}
              artistTitle={el.artistTitle}
            />
          ))
        )}
      </div>

      <Pagination
        onSetPage={handleSetPage}
        curPage={curPage}
        totalPages={totalPages}
      />
    </div>
  );
}
