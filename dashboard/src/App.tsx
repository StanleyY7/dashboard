import "./App.scss";
import MainPage from "./containers/MainPage/MainPage";
import { GlobalProvider } from "./components/Context/Context";

function App() {
  return (
    <>
      <GlobalProvider>
        <MainPage />
      </GlobalProvider>
    </>
  );
}

export default App;
