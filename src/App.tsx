import styles from "./App.module.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Language } from "./components/Language/Language";
import { Main } from "./components/Main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { MathPage } from "./components/Math/MathPage";
import { Craft } from "./components/Craft/Craft.";
import { World } from "./components/World/World";
import { Article } from "./components/Article/Article";
function App() {
  return (
    <BrowserRouter>
      <div className={styles.mainWrapper}>
        <Header />
        <div className="content">
          <Route path="/" exact render={() => <Main />} />
          <Route path="/language" exact render={() => <Language />} />
          <Route
            path="/language/:title"
            render={() => <Article page="language" />}
          />
          <Route path="/math" exact render={() => <MathPage />} />
          <Route path="/math/:title" render={() => <Article page="math" />} />
          <Route path="/craft" exact render={() => <Craft />} />
          <Route path="/craft/:title" render={() => <Article page="craft" />} />
          <Route path="/world" exact render={() => <World />} />
          <Route path="/world/:title" render={() => <Article page="world" />} />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
