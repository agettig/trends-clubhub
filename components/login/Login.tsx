// import { addDoc, collection, query } from "firebase/firestore";
import { Button, Input } from "@chakra-ui/react";
import { MouseEventHandler, useState } from "react";
import styles from "./login.module.css";
// import { db } from "../../util/firebase"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login: MouseEventHandler<HTMLButtonElement> | undefined = (e) => {
    e.preventDefault();

    setUsername("");
    setPassword("");
  };

  return (
    <div className={styles.page}>
      <div className={styles.form}>
        <div className={styles.title}>Sign In</div>
        <div className={styles.text}>
          <Input
            value={username}
            type="text"
            placeholder="John Doe"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={styles.password}>
          <Input
            value={password}
            type="password"
            placeholder="QWERTY1234"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.button}>
          <Button
            type="submit"
            onClick={login}
            _focusVisible={{ shadow: "outline" }}
            _focus={{ shadow: "none" }}
            colorScheme={"facebook"}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
