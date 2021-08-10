import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Language } from "./components/Language/Language";
import { Main } from "./components/Main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { MathPage } from "./components/Math/MathPage";
import { Craft } from "./components/Craft/Craft.";
import { World } from "./components/World/World";
function App() {
  return (
    <BrowserRouter>
      <div className="mainWrapper">
        <Header />
        <div className="content">
          <Route path="/" exact render={() => <Main />} />
          <Route path="/language" render={() => <Language />} />
          <Route path="/math" render={() => <MathPage />} />
          <Route path="/craft" render={() => <Craft />} />
          <Route path="/world" render={() => <World />} />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
