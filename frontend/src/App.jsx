import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import ArticleList from "./components/ArticleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ArticleList />
              <Newsletter />
            </>
          }
        />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article-detail" element={<ArticleDetail/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
