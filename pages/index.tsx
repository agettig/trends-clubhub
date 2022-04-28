import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Login from "../components/login/Login";

const Home: NextPage = () => {
  return <Login></Login>;
};

export default Home;
