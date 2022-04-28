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
    <div>
      <form onSubmit={login}>
        <div className={styles.inputContainer}>
          <label>Username </label>
          <input type="text" name="" required className={styles.text} />
        </div>
        <div className={styles.inputContainer}>
          <label>Password </label>
          <input type="password" name="" required className={styles.password} />
        </div>
        <div className={styles.button}>
          <input type="submit" className={styles.submit} />
        </div>
      </form>
    </div>
  );

  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <div className={styles.title}>Sign In</div>
        {isSubmitted ? "" : renderForm}
      </div>
    </div>
  );
};

export default Login;
