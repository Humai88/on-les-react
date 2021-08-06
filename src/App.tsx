import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Language } from "./components/Language/Language";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="mainWrapper">
        <Header />
        <div className="content">
          <Route path="/" exact render={() => <Main />} />
          <Route path="/language" render={() => <Language />} />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
