import { useContext } from "react";
import { BookContext } from "../../context/bookContext";

export const BookCard = ({ data }) => {
  const { dispatch } = useContext(BookContext);

  const { id, title, author, url, category } = data;

  return (
    <div className="book-item" key={id}>
      <img src={url} className="book-cover" />
      <h4>{title}</h4>
      <p>{author}</p>
      <div className="drop-down-menu">
        <select
          name="category"
          id="category"
          onChange={(e) => {
            dispatch({
              type: "move",
              payload: id,
              category: e.target.value,
            });
          }}
        >
          <option value="move to" disabled>
            Move to...
          </option>
          <option
            value="Currently Reading"
            selected={category === "Currently Reading"}
            className={category === "Currently Reading" && "tick"}
          >
            Currently Reading
          </option>
          <option
            value="Want to Read"
            selected={category === "Want to Read"}
            className={category === "Want to Read" && "tick"}
          >
            Want to Read
          </option>
          <option
            value="Read"
            selected={category === "Read"}
            className={category === "Read" && "tick"}
          >
            Read
          </option>
          <option
            value="Read"
            selected={category === ""}
            className={category === "" && "tick"}
          >
            None
          </option>
        </select>
      </div>
    </div>
  );
};
