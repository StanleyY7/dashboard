import styles from "./SideBar.module.scss";
import image from "../../../public/d.svg";

const SideBar = () => {
  return (
    <>
      <section className={styles.SideBar__wrapper}>
        <div className={styles.SideBar__container}>
          <div className={styles.SideBar__content}>
            <h1 className={styles.heading}>Dashing</h1>

            <div className={styles.content__grid}>
              <img src={image} className={styles.profile}></img>
              <h1>Dash</h1>
              <h1>Dash</h1>
              <h1>Dash</h1>
              <h1>Dash</h1>

              <h1>Dash</h1>
              <h1>Dash</h1>
              <h1>Dash</h1>
              <h1>Dash</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideBar;
