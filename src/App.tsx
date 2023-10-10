import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TrendingPage from "./pages/TrendingPage/TrendingPage";
import PageLayout from "./pages/PageLayout";

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
      </Routes>
    </div>
  );
}

export default App;
