import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./create-new-account.module.css";

const CreateNewAccount: NextPage = () => {
  const router = useRouter();

  const onHaveAnAccountClick = useCallback(() => {
    router.push("/login");
  }, [router]);

  return (
    <div className={styles.createNewAccount}>
      <div className={styles.wisechartParent}>
        <b className={styles.wisechart}>
          <span>Wise</span>
          <span className={styles.chart}>Chart</span>
        </b>
        <div className={styles.newUserWrapper}>
          <div className={styles.newUser}>New user</div>
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
          <div className={styles.text}>Create account</div>
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
        <div
          className={styles.haveAnAccountContainer}
          onClick={onHaveAnAccountClick}
        >
          <span>{`Have an account? `}</span>
          <span className={styles.logIn}>Log in</span>
        </div>
      </div>
      <img
        className={styles.nativeHomeIndicator}
        alt=""
        src="/native--home-indicator1.svg"
      />
    </div>
  );
};

export default CreateNewAccount;
