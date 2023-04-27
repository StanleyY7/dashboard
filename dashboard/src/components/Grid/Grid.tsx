import styles from "./Grid.module.scss";
import { useContext } from "react";
import { GlobalContext } from "../Context/Context";
import GithubCard from "../GithubCard/GithubCard";

const Grid = () => {
  const { github }: any = useContext(GlobalContext);

  return (
    <>
      <section className={styles.Grid__wrapper}>
        <div className={styles.Grid__container}>
          {github &&
            github.map((item: any) => {
              return (
                <>
                  <GithubCard item={item} />
                </>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Grid;
