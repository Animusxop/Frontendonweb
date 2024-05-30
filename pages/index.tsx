import type { NextPage } from "next";
import styles from "./index.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <b className={styles.goodMorning}>Good Morning</b>
      <div className={styles.group}>
        <div className={styles.card}>
          <img
            className={styles.viewsImagesRatio}
            alt=""
            src="/views--images-ratio@2x.png"
          />
          <b className={styles.chillHits}>Chill Hits</b>
        </div>
        <div className={styles.card}>
          <img
            className={styles.viewsImagesRatio}
            alt=""
            src="/views--images-ratio@2x.png"
          />
          <b className={styles.chillHits}>Top Hits</b>
        </div>
        <div className={styles.card}>
          <img className={styles.viewsImagesRatio} alt="" />
          <b className={styles.chillHits}>Happy Hits</b>
        </div>
        <div className={styles.card}>
          <img
            className={styles.viewsImagesRatio}
            alt=""
            src="/views--images-ratio@2x.png"
          />
          <b className={styles.chillHits}>Good Time</b>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.heading}>
            <b className={styles.justForYou}>Just for you</b>
          </div>
          <div className={styles.group1}>
            <div className={styles.card4}>
              <img
                className={styles.viewsImagesRatio4}
                alt=""
                src="/views--images-ratio@2x.png"
              />
              <b className={styles.dailyMix}>Daily Mix</b>
              <div className={styles.jonasBlueNotd}>
                Jonas Blue, NOTD, David Guetta and more
              </div>
            </div>
            <div className={styles.card4}>
              <img
                className={styles.viewsImagesRatio4}
                alt=""
                src="/views--images-ratio@2x.png"
              />
              <b className={styles.dailyMix}>Feelin’ Myself</b>
              <div className={styles.jonasBlueNotd}>
                Ariana Grande, Doja Cat, Megan Thee Stallion...
              </div>
            </div>
            <div className={styles.card4}>
              <img className={styles.viewsImagesRatio4} alt="" />
              <b className={styles.dailyMix}>Mood Booster</b>
              <div className={styles.jonasBlueNotd}>
                BTS, Dua Lipa, Malone, Justin Bieber and more
              </div>
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.heading}>
            <b className={styles.justForYou}>Popular songs</b>
          </div>
          <div className={styles.group1}>
            <div className={styles.card4}>
              <img className={styles.viewsImagesRatio4} alt="" />
              <b className={styles.dailyMix}>Good Vibes</b>
              <div className={styles.tameImpalaJoji}>
                Tame Impala, Joji, Tyler, The Creator, 5 Second
              </div>
            </div>
            <div className={styles.card4}>
              <img
                className={styles.viewsImagesRatio4}
                alt=""
                src="/views--images-ratio@2x.png"
              />
              <b className={styles.dailyMix}>Mega Hit Mix</b>
              <div className={styles.tameImpalaJoji}>
                Ariana Grande, BTS, Dua Lipa, Justin Bieber, Taylo
              </div>
            </div>
            <div className={styles.card4}>
              <img className={styles.viewsImagesRatio4} alt="" />
              <b className={styles.dailyMix}>{`Young & Free`}</b>
              <div className={styles.tameImpalaJoji}>
                LANY, Jeremy Zucker, Joji, ILLENIUM, Glass A...
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.nativeHomeIndicator}
        alt=""
        src="/native--home-indicator.svg"
      />
      <div className={styles.barsTabBarIconOnly}>
        <div className={styles.partialsTabBarIconOnly}>
          <img className={styles.icon} alt="" src="/icon.svg" />
        </div>
        <img
          className={styles.partialsTabBarIconOnly1}
          alt=""
          src="/-partials--tab-bar-icon-only.svg"
        />
        <img
          className={styles.partialsTabBarIconOnly1}
          alt=""
          src="/-partials--tab-bar-icon-only1.svg"
        />
      </div>
      <img className={styles.viewsImagesAvatars} alt="" />
    </div>
  );
};

export default Home;
