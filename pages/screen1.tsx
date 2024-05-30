import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./screen1.module.css";

const Screen1: NextPage = () => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/screen2");
  }, [router]);

  return (
    <div className={styles.screen2}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.longTitle}>Power Your Stock Analysis using AI</div>
      <div className={styles.description}>
        {" "}
        fundamental, technical, sentiment analysis, insider trading , economics
        and Indurstry data into easy-to-understand reports, saving you time,
        effort and Moneyyyy
      </div>
      <img
        className={styles.screen2Child}
        alt=""
        src="/group-29.svg"
        onClick={onGroupClick}
      />
      <div className={styles.stepperDots}>
        <div className={styles.controlsPageControlsDot} />
        <div className={styles.stepperDotsChild} />
        <div className={styles.controlsPageControlsDot} />
        <div className={styles.controlsPageControlsDot} />
      </div>
    </div>
  );
};

export default Screen1;
