import { createContext, useReducer } from "react";
import { books } from "../db/books";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const initialData = {
    book: books,
    search: "",
  };
  const handleBookCategory = (state, action) => {
    switch (action.type) {
      case "move": {
        return {
          ...state,
          book: state.book.map((item) =>
            item.id === action.payload
              ? { ...item, category: action.category }
              : item
          ),
        };
      }
      case "search": {
        return { ...state, search: action.payload };
      }
    }
  };
  const [state, dispatch] = useReducer(handleBookCategory, initialData);

  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};
