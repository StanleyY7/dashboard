import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { data } from "../../services/data";
import styles from "./Chart.module.scss";

const MyChart = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  return (
    <>
      <section>
        <Doughnut data={data} className={styles.doughnut} />
      </section>
    </>
  );
};

export default MyChart;
