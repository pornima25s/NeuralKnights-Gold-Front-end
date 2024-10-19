import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import AllNews from "./components/AllNews";
import TopHeadlines from "./components/TopHeadlines";
import LoginPopus from './components/LoginPopus';
import MyProfile from './components/MyProfile';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryNews from "./components/CountryNews";
import SearchResult from "./components/SearchResult";
import Recommended from "./components/Recommanded"
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllNews />} />
          <Route path="/top-headlines/:category" element={<TopHeadlines />} />
          <Route path="/country/:iso" element={<CountryNews />} />
          <Route path="/login" element={<LoginPopus />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/search/:searchQuery" element={<SearchResult />} />
          <Route path="/Recommended" element={<Recommended />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
