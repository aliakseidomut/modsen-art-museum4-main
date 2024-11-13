import React, { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import ArtWorkCard from "@components/ArtWorkCard/ArtWorkCard";
import { ArtWorkInfo } from "../../types/ArtWork";
import styles from "./ArtWorksList.module.css";
import { LIMIT_SEARCH_PAGE } from "@constants/uiConstants";
import Api from "@utils/Api";

interface Props {
  curPage: number;
  searchValue: string;
  sortValue: string;
}

export default function ArtWorksList({
  curPage,
  searchValue,
  sortValue,
}: Props) {
  const [artworks, setArtworks] = useState<ArtWorkInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const artworks = await Api.getPage(
          LIMIT_SEARCH_PAGE,
          curPage,
          searchValue,
          sortValue,
        );
        setArtworks(artworks);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [curPage, searchValue, sortValue]);

  return (
    <div className={styles.ArtWorksList}>
      {isLoading ? (
        <ClipLoader color={"#F17900"} loading={isLoading} size={50} />
      ) : !artworks.length ? (
        <h2>Not found</h2>
      ) : (
        artworks.map(artwork => (
          <ArtWorkCard
            key={artwork.id}
            id={artwork.id}
            imgUrl={artwork.imgUrl}
            title={artwork.title}
            artistTitle={artwork.artistTitle}
          />
        ))
      )}
    </div>
  );
}
