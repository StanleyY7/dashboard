import styles from "./Header.module.scss";
import { useContext } from "react";
import { GlobalContext } from "../Context/Context";
export const Header = () => {
  const { data }: any = useContext(GlobalContext);
  return (
    <>
      <section>
        <div className={styles.Header__container}>
          <h4>Hello {data.username ? data.username : ":)"}, Welcome back</h4>
          <h1>Your Dashboard is updated</h1>
        </div>
      </section>
    </>
  );
};
