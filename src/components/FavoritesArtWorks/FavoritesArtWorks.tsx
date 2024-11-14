import React, { useContext, useEffect, useState } from "react";
import { ArtWorkInfo } from "../../types/ArtWork";
import ArtWorkCardMini from "@components/ArtWorkCardMini/ArtWorkCardMini";
import Api from "@utils/Api";
import styles from "./FavoritesArtWorks.module.css";
import { ClipLoader } from "react-spinners";
import { FavoritesContext } from "../../context/FavoritesContext";

export default function FavoritesArtWorks() {
  const [artworks, setArtworks] = useState<ArtWorkInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { ids } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const artworks = await Api.getArtWorks(ids);
        setArtworks(artworks);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [ids]);

  return (
    <div className={styles.FavoritesArtWorks}>
      <h4 className={styles.h4}>Saved by you</h4>
      <h3 className={styles.h3}>Your favorites list</h3>
      <div className={styles.artWorks}>
        {isLoading ? (
          <ClipLoader color={"#F17900"} loading={isLoading} size={50} />
        ) : !artworks.length ? (
          <h2>No favorites</h2>
        ) : (
          artworks.map((el: ArtWorkInfo) => (
            <ArtWorkCardMini
              key={el.id}
              id={el.id}
              imgUrl={el.imgUrl}
              title={el.title}
              artistTitle={el.artistTitle}
            />
          ))
        )}
      </div>
    </div>
  );
}
