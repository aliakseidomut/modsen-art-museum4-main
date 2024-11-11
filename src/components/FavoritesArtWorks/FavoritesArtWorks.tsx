import React, { useEffect, useState } from "react";
import { ArtWorkInfo } from "../../types/ArtWork";
import { getAllLocalStorageKeys } from "@utils/getAllLocalStorageKeys";
import ArtWorkCardMini from "@components/ArtWorkCardMini/ArtWorkCardMini";
import Api from "@utils/Api";
import styles from "./FavoritesArtWorks.module.css";

export default function FavoritesArtWorks() {
  const [artworks, setArtworks] = useState<ArtWorkInfo[]>([]);

  const ids: string[] = getAllLocalStorageKeys();

  useEffect(() => {
    Api.getArtWorks(ids).then(res => {
      setArtworks(res);
    });
  }, [ids]);

  return (
    <div className={styles.FavoritesArtWorks}>
      <h4 className={styles.h4}>Saved by you</h4>
      <h3 className={styles.h3}>Your favorites list</h3>
      <div className={styles.artWorks}>
        {artworks.map((el: ArtWorkInfo) => (
          <ArtWorkCardMini
            key={el.id}
            id={el.id}
            imgUrl={el.imgUrl}
            title={el.title}
            artistTitle={el.artistTitle}
          />
        ))}
      </div>
    </div>
  );
}
