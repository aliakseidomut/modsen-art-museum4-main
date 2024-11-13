import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArtWorkInfo } from "../../types/ArtWork";
import ToFavoritesButton from "@components/ToFavoritesButton/ToFavoritesButton";
import Api from "@utils/Api";
import styles from "./ArtWorkPage.module.css";
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary";
import { ClipLoader } from "react-spinners";

export default function ArtWorkPage() {
  const id = useParams().id;
  const [artWork, setArtWork] = useState<ArtWorkInfo>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          setIsLoading(true);
          const artwork = await Api.getArtWork(id);
          setArtWork(artwork);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <ClipLoader color={"#F17900"} loading={isLoading} size={70} />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <main className={styles.ArtWorkPage}>
        <div
          className={styles.imgDiv}
          style={{ backgroundImage: `url(${artWork?.imgUrl})` }}
        >
          {id && <ToFavoritesButton id={id} />}
        </div>

        <div className={styles.info}>
          <section className={styles.mainInfo}>
            <h2 className={styles.h2}>{artWork?.title}</h2>
            <h3 className={styles.h3}>{artWork?.artistTitle}</h3>
            <h4 className={styles.h4}>{artWork?.dateDisplay}</h4>
          </section>
          <section className={styles.overview}>
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
          </section>
        </div>
      </main>
    </ErrorBoundary>
  );
}
