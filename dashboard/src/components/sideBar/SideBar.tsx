import styles from "./SideBar.module.scss";
import image from "../../../public/d.svg";
import { useContext } from "react";
import { GlobalContext } from "../Context/Context";
const SideBar = () => {
  const { data }: any = useContext(GlobalContext);
  return (
    <>
      <section className={styles.SideBar__wrapper}>
        <div className={styles.SideBar__container}>
          <div className={styles.SideBar__content}>
            <h1 className={styles.heading}>Codewars Dash</h1>

            <div className={styles.content__grid}>
              <img src={image} className={styles.profile}></img>

              <p>Username: {data.username}</p>
              <p>Honor: {data.honor ? data.honor : "0"}</p>
              <p>
                {" "}
                Rank:{" "}
                {data.ranks.overall.name ? data.ranks.overall.name : "Unknown"}
              </p>
              <p>Clan: {data.clan ? data.clan : "Unknown"}</p>
              <p>
                Completed Challenges:{" "}
                {data.codeChallenges.totalCompleted
                  ? data.codeChallenges.totalCompleted
                  : "0"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideBar;
