import React, { useEffect, useState } from "react";
import styles from "./OtherWorks.module.css";
import { ArtWorkInfo } from "../../types/ArtWork";
import ArtWorkCardMini from "@components/ArtWorkCardMini/ArtWorkCardMini";
import Api from "@utils/Api";
import { ClipLoader } from "react-spinners";

export default function OtherWorks() {
  const [artworks, setArtworks] = useState<ArtWorkInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const rand = Math.floor(1 + Math.random() * (100 + 1 - 1));
    setIsLoading(true);

    Api.getPage(rand, 9).then(artworks => {
      setArtworks(artworks);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.OtherWorks}>
      <h4 className={styles.h4}>Here some more</h4>
      <h3 className={styles.h3}>Other works for you</h3>

      {isLoading ? (
        <ClipLoader color="#F17900" loading={isLoading} size={50} />
      ) : (
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
      )}
    </div>
  );
}
