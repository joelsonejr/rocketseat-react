import { Post } from "./Post";
import { Header } from "./components/Header";

import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <Post author="Joe" content="Esse é o meu Post" />
      <Post author="Zaki" content="Papai!" />
    </>
  );
}
