import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./screen2.module.css";

const Screen2: NextPage = () => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/walkthrough");
  }, [router]);

  return (
    <div className={styles.screen4}>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <div className={styles.longTitle}>
        Powerful Features at Your Fingertips
      </div>
      <div className={styles.description}>
        <ul className={styles.realTimeDataAccessUpToT}>
          <li className={styles.realTimeDataAccess}>
            Real-Time Data: Access up-to-the-minute stock information.
          </li>
          <li className={styles.realTimeDataAccess}>
            Comprehensive Reports: Get detailed insights based on fundamental
            and technical analysis.
          </li>
          <li className={styles.realTimeDataAccess}>
            Custom Alerts: Set up alerts for stock price changes and market
            trends.
          </li>
          <li>
            Interactive Charts: Use our interactive charts for in-depth
            analysis.
          </li>
        </ul>
      </div>
      <img
        className={styles.screen4Child}
        alt=""
        src="/group-29.svg"
        onClick={onGroupClick}
      />
      <div className={styles.stepperDots}>
        <div className={styles.controlsPageControlsDot} />
        <div className={styles.controlsPageControlsDot} />
        <div className={styles.stepperDotsItem} />
        <div className={styles.controlsPageControlsDot} />
      </div>
    </div>
  );
};

export default Screen2;
