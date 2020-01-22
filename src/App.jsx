import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Link } from "@reach/router";
import { Add } from "./Add.jsx";
import { Inventory } from "./Inventory.jsx";
import { ADD_BOOK } from "./store/reducer";

export const App = () => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.reducer.books);

  useEffect(() => {
    fetch("https://clockworkjava.pl/books.php")
      .then(response => {
        return response.json();
      })
      .then(data => {
        data.forEach(book => {
          dispatch({ type: ADD_BOOK, payload: book });
        });
      });
  }, []);

  return (
    <React.StrictMode>
      <div id="create-by-react">
        <Link to="/">
          <h1>React Bookstore</h1>
        </Link>
        <Router>
          <Add path="/admin" />
          <Inventory path="/" books={books} />
        </Router>
      </div>
    </React.StrictMode>
  );
};
