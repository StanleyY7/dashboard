import styles from "./SideBar.module.scss";
import image from "../../../public/d.svg";
import { useContext } from "react";
import { GlobalContext } from "../Context/Context";
const SideBar = () => {
  const { data, github }: any = useContext(GlobalContext);
  return (
    <>
      <section className={styles.SideBar__wrapper}>
        <div className={styles.SideBar__container}>
          <div className={styles.SideBar__content}>
            <div className={styles.content__grid}>
              <h1 className={styles.heading}>Side Dash</h1>
              <img
                src={
                  github && Array.isArray(github)
                    ? `${github.map((item) => {
                        return item.owner.avatar_url;
                      })}`
                    : image
                }
                className={styles.profile}
              ></img>
              {data && (
                <>
                  <p>Username: {data.username ? data.username : "Unknown"}</p>
                  <p>Honor: {data.honor ? data.honor : "0"}</p>
                  <p>
                    {" "}
                    Rank:{" "}
                    {data.ranks && data.ranks.overall.name
                      ? data.ranks.overall.name
                      : "Unknown"}
                  </p>
                  <p>Clan: {data.clan ? data.clan : "Unknown"}</p>
                  <p>
                    Completed Challenges:{" "}
                    {data.codeChallenges && data.codeChallenges.totalCompleted
                      ? data.codeChallenges.totalCompleted
                      : "0"}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideBar;
