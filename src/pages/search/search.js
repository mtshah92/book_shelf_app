import { useContext } from "react";
import { Link } from "react-router-dom";
import { BookContext } from "../../context/bookContext";
import { BookCard } from "../../component/bookCard/bookCard";
import "./search.css";

export const Search = () => {
  const { state, dispatch } = useContext(BookContext);
  const filterData = state.book?.filter(({ title }) =>
    title.toLowerCase().includes(state.search.toLowerCase())
  );
  return (
    <div className="search-page">
      <h2>Search Page</h2>
      <Link to="/">Home</Link>
      <div>
        <input
          className="search-bar"
          placeholder="Seacrh by Book Title"
          onChange={(e) =>
            dispatch({ type: "search", payload: e.target.value })
          }
        />
      </div>

      <div className="book-listing">
        {filterData.map((item) => (
          <BookCard data={item} />
        ))}
      </div>
    </div>
  );
};
