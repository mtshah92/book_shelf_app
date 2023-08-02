import { Route, Routes } from "react-router";
import "./App.css";
import { BookShelf } from "./pages/main/main";
import { Search } from "./pages/search/search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BookShelf />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
