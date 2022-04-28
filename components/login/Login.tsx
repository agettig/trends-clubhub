import { addDoc, collection, query } from "firebase/firestore";
import { Formik } from "formik";
import { FormEventHandler, useState } from "react";
import styles from "./login.module.css";
// import { Task } from "../../types"
// import { db } from "../../util/firebase"

const Login = () => {
  const [input, setInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const login: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setInput("");
  };

  const renderForm = (
    <div className={styles.form}>
      <form onSubmit={login}>
        <div className={styles.inputContainer}>
          <label>Username </label>
          <input type="text" name="" required />
        </div>
        <div className={styles.inputContainer}>
          <label>Password </label>
          <input type="password" name="" required />
        </div>
        <div className={styles.buttonContainer}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className={styles.app}>
      <div className={styles.loginForm}>
        <div className={styles.title}>Sign In</div>
        {isSubmitted ? "" : renderForm}
      </div>
    </div>
  );
};

export default Login;
