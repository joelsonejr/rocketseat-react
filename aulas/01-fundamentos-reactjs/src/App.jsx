import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";


export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Joe" content="Esse é o meu Post" />
          <Post author="Zaki" content="Papai!" />
        </main>
      </div>
    </>
  );
}
