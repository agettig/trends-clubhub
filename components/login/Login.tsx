import GoogleButton from "react-google-button";
import { FacebookLoginButton } from "react-social-login-buttons";
import styles from "./login.module.css";
import { signInWithGoogle } from "../../util/firebase";

const Login = () => {
  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <div className={styles.title}>Sign In</div>
        <div className={styles.button}>
          <GoogleButton onClick={signInWithGoogle} />
        </div>
        <div className={styles.button}>
          <FacebookLoginButton onClick={signInWithGoogle} />
        </div>
      </div>
    </div>
  );
};

export default Login;
