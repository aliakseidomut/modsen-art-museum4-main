import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtWorkInfo } from "../../types/ArtWork";
import ToFavoritesButton from "@components/ToFavoritesButton/ToFavoritesButton";
import Api from "@utils/Api";
import styles from "./ArtWorkPage.module.css";

export default function ArtWorkPage() {
  const id = useParams().id;

  const [artWork, setArtWork] = useState<ArtWorkInfo>();

  useEffect(() => {
    if (id) {
      Api.getArtWork(id).then(res => setArtWork(res));
    }
  }, []);

  return (
    <div className={styles.ArtWorkPage}>
      <div
        className={styles.imgDiv}
        style={{ backgroundImage: `url(${artWork?.imgUrl})` }}
      >
        {id && <ToFavoritesButton id={id} />}
      </div>
      <div className={styles.info}>
        <div className={styles.mainInfo}>
          <h2 className={styles.h2}>{artWork?.title}</h2>
          <h3 className={styles.h3}>{artWork?.artistTitle}</h3>
          <h4 className={styles.h4}>{artWork?.dateDisplay}</h4>
        </div>
        <div className={styles.overview}>
          <h2 className={styles.h2}>Overview</h2>
          <ul className={styles.ul}>
            <li>
              <span>Description: </span>
              {artWork?.description}
            </li>
            <li>
              <span>Artist info: </span>
              {artWork?.artistInfo}
            </li>
            <li>
              <span>Dimensions: </span>
              {artWork?.dimensions}
            </li>
            <li>
              <span>Credit Line: </span>
              {artWork?.creditLine}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
