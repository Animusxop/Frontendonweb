import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./walkthrough.module.css";

const Walkthrough: NextPage = () => {
  const router = useRouter();

  const onControlsButtonsClick = useCallback(() => {
    router.push("/create-new-account");
  }, [router]);

  const onHaveAnAccountClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className={styles.walkthrough}>
      <b className={styles.wisechart}>
        <span>Wise</span>
        <span className={styles.chart}>Chart</span>
      </b>
      <img
        className={styles.viewsImagesRatio}
        alt=""
        src="/views--images-ratio@2x.png"
      />
      <b className={styles.createBrilliantLearning}>
        Create brilliant learning pathways
      </b>
      <div className={styles.stepperDots}>
        <div className={styles.controlsPageControlsDot} />
        <div className={styles.controlsPageControlsDot} />
        <div className={styles.controlsPageControlsDot} />
        <div className={styles.stepperDotsInner} />
      </div>
      <div className={styles.controlsButtons} onClick={onControlsButtonsClick}>
        <div className={styles.text}>Create account</div>
      </div>
      <div
        className={styles.haveAnAccountContainer}
        onClick={onHaveAnAccountClick}
      >
        <span>{`Have an account? `}</span>
        <span className={styles.logIn}>Log in</span>
      </div>
      <img
        className={styles.nativeHomeIndicator}
        alt=""
        src="/native--home-indicator.svg"
      />
    </div>
  );
};

export default Walkthrough;
