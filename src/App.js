import logo from './logo.svg';
import './App.css';
import {useTranslation} from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <header className="App-header">
        <LanguageSwitcher/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t("hello")}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("hello_2")}
        </a>
      </header>
    </div>
  );
}

export default App;
