import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./screen3.module.css";

const Screen3: NextPage = () => {
  const router = useRouter();

  const onGroup1Click = useCallback(() => {
    router.push("/screen1");
  }, [router]);

  return (
    <div className={styles.screen1}>
      <div className={styles.screen1Child} />
      <div className={styles.welcomeParent}>
        <div className={styles.welcome}>{`Welcome `}</div>
        <div className={styles.aSmarterWay}>
          a smarter way to track and analyze stocks
        </div>
      </div>
      <img className={styles.screen1Item} alt="" src="/group-29.svg" />
      <img
        className={styles.screen1Inner}
        alt=""
        src="/group-29.svg"
        onClick={onGroup1Click}
      />
      <img
        className={styles.xerapuf4xRemovebg1Icon}
        alt=""
        src="/2xerapuf-4xremovebg-1@2x.png"
      />
      <div className={styles.stepperDots}>
        <div className={styles.stepperDotsChild} />
        <div className={styles.controlsPageControlsDot} />
        <div className={styles.controlsPageControlsDot} />
        <div className={styles.controlsPageControlsDot} />
      </div>
    </div>
  );
};

export default Screen3;
