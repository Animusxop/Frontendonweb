import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./login.module.css";

const Login: NextPage = () => {
  const router = useRouter();

  const onDontHaveAnClick = useCallback(() => {
    router.push("/create-new-account");
  }, [router]);

  return (
    <div className={styles.login}>
      <div className={styles.wisechartParent}>
        <b className={styles.wisechart}>
          <span>Wise</span>
          <span className={styles.chart}>Chart</span>
        </b>
        <div className={styles.loginWrapper}>
          <div className={styles.login1}>Login</div>
        </div>
        <div className={styles.textField}>
          <div className={styles.labelParent}>
            <div className={styles.label}>Email address</div>
            <div className={styles.passwordHideSee}>
              <img className={styles.icon} alt="" src="/icon1.svg" />
              <div className={styles.hide}>Hide</div>
            </div>
          </div>
          <div className={styles.textField1}>
            <div className={styles.inputs}>
              <div className={styles.div}>123456</div>
              <div className={styles.inputsChild} />
            </div>
            <img className={styles.icons} alt="" src="/icons.svg" />
          </div>
          <div className={styles.errorMessage}>Error message</div>
        </div>
        <div className={styles.textFieldParent}>
          <div className={styles.textField2}>
            <div className={styles.labelParent}>
              <div className={styles.label}>Password</div>
              <div className={styles.passwordHideSee1}>
                <img className={styles.icon} alt="" src="/icon1.svg" />
                <div className={styles.hide}>Hide</div>
              </div>
            </div>
            <div className={styles.textField1}>
              <div className={styles.inputs}>
                <div className={styles.div}>123456</div>
                <div className={styles.inputsChild} />
              </div>
              <img className={styles.icons} alt="" src="/icons.svg" />
            </div>
            <div className={styles.errorMessage}>Error message</div>
          </div>
          <div className={styles.forgetPassword}>Forget password?</div>
        </div>
        <div className={styles.controlsButtons}>
          <div className={styles.text}>Login</div>
        </div>
        <div className={styles.or}>or</div>
        <div className={styles.socialMediaSignuplogin}>
          <div className={styles.socialMediaLogoParent}>
            <img
              className={styles.socialMediaLogo}
              alt=""
              src="/social-media-logo.svg"
            />
            <div className={styles.continueWithGoogle}>
              Continue with Google
            </div>
          </div>
        </div>
        <div className={styles.dontHaveAnContainer} onClick={onDontHaveAnClick}>
          <span>
            <span>{`Don’t have an account? `}</span>
            <span className={styles.chart}>Create new</span>
          </span>
          <span className={styles.span}>{` `}</span>
        </div>
        <img
          className={styles.nativeHomeIndicator}
          alt=""
          src="/native--home-indicator.svg"
        />
      </div>
    </div>
  );
};

export default Login;
