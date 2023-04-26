import styles from "./SearchBar.module.scss";
import { fetchData } from "../../services/search";
import { useState, useContext } from "react";
import { GlobalContext } from "../Context/Context";

const SearchBar = () => {
  const { setData, user, setUser } = useContext(GlobalContext);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const r = await fetchData(user);
    setData(r);
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
            ></input>
            <button>🔍</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
