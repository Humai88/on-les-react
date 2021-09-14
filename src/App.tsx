import styles from "./App.module.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Language } from "./components/Language/Language";
import { Main } from "./components/Main/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import { MathPage } from "./components/Math/MathPage";
import { Craft } from "./components/Craft/Craft";
import { World } from "./components/World/World";
import { Article } from "./components/Article/Article";
import { useEffect, useState } from "react";
import { getData } from "./api/api";
import { Helmet } from "react-helmet";

function App() {
  let initData = {
    language: [],
    math: [],
    reading: [],
    world: [],
  };
  const [data, setData] = useState<DataType>(initData);

  useEffect(() => {
    getData()
      .then((dataJson) => {
        setData(dataJson);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <title>on-les</title>
        <meta
          name="description"
          content="Веб-сайт, созданный для учителей начальной школы."
        />
      </Helmet>
      <div className={styles.mainWrapper}>
        <Header />
        <div className="content">
          <Route path="/" exact render={() => <Main />} />
          <Route
            path="/language"
            exact
            render={() => <Language data={data} />}
          />
          <Route
            path="/language/:title"
            exact
            render={() => <Article data={data} page="language" />}
          />
          <Route path="/math" exact render={() => <MathPage data={data} />} />
          <Route
            path="/math/:title"
            exact
            render={() => <Article data={data} page="math" />}
          />
          <Route path="/reading" exact render={() => <Craft data={data} />} />
          <Route
            path="/reading/:title"
            exact
            render={() => <Article data={data} page="reading" />}
          />
          <Route path="/world" exact render={() => <World data={data} />} />
          <Route
            path="/world/:title"
            exact
            render={() => <Article data={data} page="world" />}
          />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

// Types
export type PostType = {
  id: string;
  image: string;
  title: string;
  content: string;
  link: string;
  prevImage: string;
  prevTitle: string;
};
export type DataType = {
  language: PostType[];
  math: PostType[];
  reading: PostType[];
  world: PostType[];
};
