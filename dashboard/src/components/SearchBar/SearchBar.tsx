import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <>
      <section>
        <div>
          <form>
            <input
              className={styles.inputBar}
              type="text"
              placeholder="Enter a username here"
            ></input>
            <button>S</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
