import styles from "./GithubCard.module.scss";

const GithubCard = ({ item }: any) => {
  return (
    <>
      <section className={styles.card}>
        <div>
          <h1>{item.owner.login}</h1>
          <p>
            <a href={item.url}>{item.name}</a>
          </p>
          <p></p>
          <p>Description: {item.description}</p>
          <p>Main Language: {item.language ? item.language : "None"}</p>
        </div>
      </section>
    </>
  );
};

export default GithubCard;
