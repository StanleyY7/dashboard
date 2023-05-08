import styles from "./Grid.module.scss";
import { useContext } from "react";
import { GlobalContext } from "../Context/Context";
import GithubCard from "../GithubCard/GithubCard";
import MyChart from "../Chart/Chart";

const Grid = () => {
  const { github }: any = useContext(GlobalContext);
  let n: any = 1;
  return (
    <>
      <section className={styles.Grid__wrapper}>
        <div className={styles.Grid__container}>
          {github &&
            Array.isArray(github) &&
            github.map((item: any) => {
              return (
                <>
                  <GithubCard item={item} />
                  {n === 1
                    ? (n = 2 && (
                        <div className={styles.graph}>
                          <MyChart />
                        </div>
                      ))
                    : ""}
                </>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Grid;
