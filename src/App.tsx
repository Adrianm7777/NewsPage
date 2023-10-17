import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TrendingPage from "./pages/TrendingPage/Components/ContentTrending/TrendingAll/TrendingPage";
import PageLayout from "./reusable/PageLayout/PageLayout";
import LatestPage from "./pages/LatestPage/Components/LatestAll/LatestPage";
import PopularPage from "./pages/PopularPage/Components/PopularPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/Trending" element={<PageLayout />}>
          <Route index element={<TrendingPage />} />
        </Route>
        <Route path="/Latest" element={<PageLayout />}>
          <Route index element={<LatestPage />} />
        </Route>
        <Route path="/Popular" element={<PageLayout />}>
          <Route index element={<PopularPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
