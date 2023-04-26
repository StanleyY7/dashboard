import Grid from "../../components/Grid/Grid";
import { Header } from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import SideBar from "../../components/sideBar/SideBar";
import styles from "./MainPage.module.scss";
const MainPage = () => {
  return (
    <>
      <section className={styles.MainPage__container}>
        <SideBar />

        <div className={styles.wrapper}>
          <div className={styles.flex}>
            <Header />
            <SearchBar />
            <div></div>
          </div>

          <div className={styles.flex__wrapper}>
            <Grid />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
