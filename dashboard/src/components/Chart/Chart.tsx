import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import styles from "./Chart.module.scss";
import { useContext } from "react";
import { GlobalContext } from "../Context/Context";

const MyChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const { github } = useContext(GlobalContext);

  const data: any = {
    labels: ["Repos", "Forked Repos"],
    datasets: [
      {
        label: ["Data"],
        data: [
          github.length,
          github.filter((item) => item.fork === true).length,
        ],
        backgroundColor: ["rgba(255,124,41,255)", "#fac797"],
        borderColor: ["rgba(255,255,255,255))", "#f09a54"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <section>
        <Doughnut data={data} className={styles.doughnut} />
      </section>
    </>
  );
};

export default MyChart;
