import styles from "./Grid.module.scss";
import { useContext } from "react";
import { GlobalContext } from "../Context/Context";
const Grid = () => {
  const { data }: any = useContext(GlobalContext);
  return (
    <>
      <section className={styles.Grid__wrapper}>
        <div className={styles.Grid__container}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </section>
    </>
  );
};

export default Grid;
