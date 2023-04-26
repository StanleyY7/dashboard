import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <>
      <section>
        <div className={styles.Header__container}>
          <h4>Hello (variable), Welcome back</h4>
          <h1>Your Dashboard is updated</h1>
        </div>
      </section>
    </>
  );
};
