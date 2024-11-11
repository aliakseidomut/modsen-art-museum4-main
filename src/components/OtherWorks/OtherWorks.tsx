import React, { useEffect, useState } from "react";
import styles from "./OtherWorks.module.css";
import { ArtWorkInfo } from "../../types/ArtWork";
import ArtWorkCardMini from "@components/ArtWorkCardMini/ArtWorkCardMini";
import Api from "@utils/Api";

export default function OtherWorks({ totalPages }: { totalPages: number }) {
  const [artworks, setArtworks] = useState<ArtWorkInfo[]>([]);

  useEffect(() => {
    const rand = Math.floor(1 + Math.random() * (totalPages + 1 - 1));
    Api.getPage(rand, 9).then(artworks => setArtworks(artworks));
  }, []);

  return (
    <div className={styles.OtherWorks}>
      <h4 className={styles.h4}>Here some more</h4>
      <h3 className={styles.h3}>Other works for you</h3>
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
