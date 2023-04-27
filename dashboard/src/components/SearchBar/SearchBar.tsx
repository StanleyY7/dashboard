import styles from "./SearchBar.module.scss";
import { fetchData } from "../../services/search";
import { useContext } from "react";
import { GlobalContext } from "../Context/Context";
import { fetchGithubData } from "../../services/search";
import s from "../../assets/s.png";
const SearchBar = () => {
  const { setData, user, setGithub, setUser } = useContext(GlobalContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const r = await fetchData(user);
      const g = await fetchGithubData(user);
      setData(r);
      if (g) {
        setGithub(g);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section>
        <div>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              className={styles.inputBar}
              type="text"
              placeholder="Enter a username here"
              onChange={(e) => setUser(e.target.value)}
              required
            ></input>
            <button>
              <div className={styles.s__container}>
                <img src={s} className={styles.search}></img>
              </div>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
