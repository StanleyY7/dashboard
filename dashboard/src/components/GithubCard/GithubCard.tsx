import styles from "./GithubCard.module.scss";

const GithubCard = ({ item }: any) => {
  return (
    <>
      <section className={styles.card}>
        <div>
          <h1>{item.owner.login ? item.owner.login : "Unknown"}</h1>
          <p>
            <a href={item.url ? item.url : ""}>
              {item.name ? item.name : "Unknown"}
            </a>
          </p>
          <p></p>
          <p>Description: {item.description ? item.description : "Unknown"}</p>
          <p>Main Language: {item.language ? item.language : "None"}</p>
        </div>
      </section>
    </>
  );
};

export default GithubCard;
