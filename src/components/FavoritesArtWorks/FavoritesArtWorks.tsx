import React, { useEffect, useState } from "react";
import styles from "./FavoritesArtWorks.module.css";
import { ArtWorkInfo } from "../../types/ArtWork";
import Api from "../../utils/Api";
import { getAllLocalStorageKeys } from "../../utils/getAllLocalStorageKeys";
import { ClipLoader } from "react-spinners";
import ArtWorkCardMini from "../ArtWorkCardMini/ArtWorkCardMini";

export default function FavoritesArtWorks() {
  const [artworks, setArtworks] = useState<ArtWorkInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const ids: string[] = getAllLocalStorageKeys();

  useEffect(() => {
    setIsLoading(true);

    Api.getArtWorks(ids).then(res => {
      setArtworks(res);
      console.log(res);
    });

    setIsLoading(false);
  }, [ids]);

  return (
    <div className={styles.FavoritesArtWorks}>
      <h4 className={styles.h4}>Saved by you</h4>
      <h3 className={styles.h3}>Your favorites list</h3>
      <div className={styles.artWorks}>
        {isLoading ? (
          <ClipLoader color="#F17900" loading={isLoading} size={50} />
        ) : !artworks[0] ? (
          <h1>No favorites</h1>
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
