import { useContext } from "react";
import { BookContext } from "../../context/bookContext";
import "./main.css";
import { BookCard } from "../../component/bookCard/bookCard";
import { Link } from "react-router-dom";

export const BookShelf = () => {
  const { state } = useContext(BookContext);
  // console.log(state);
  return (
    <div className="bookshelf-page">
      <h1>Book Shelf</h1>
      <Link to="/search">Search</Link>

      <h3 className="shelf-category">Currently Reading</h3>
      <hr className="seperator" />
      <div className="shelf-listing">
        {state.book
          .filter(({ category }) => category === "Currently Reading")
          .map((item) => (
            <BookCard data={item} />
          ))}
      </div>

      <h3 className="shelf-category">Want to Read</h3>
      <hr className="seperator" />
      <div className="shelf-listing">
        {state.book
          .filter(({ category }) => category === "Want to Read")
          .map((item) => (
            <BookCard data={item} />
          ))}
      </div>
      <h3 className="shelf-category">Read</h3>
      <hr className="seperator" />
      <div className="shelf-listing">
        {state.book
          .filter(({ category }) => category === "Read")
          .map((item) => (
            <BookCard data={item} />
          ))}
      </div>
    </div>
  );
};
