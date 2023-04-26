import styles from "./Grid.module.scss";

const Grid = () => {
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
