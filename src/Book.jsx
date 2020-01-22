import React from "react";

export const Book = ({ title, author, publicationDate, genre, audience }) => {
  return (
    <div>
      <hr></hr>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <h3>{publicationDate}</h3>
      <h3>{genre}</h3>
      <h3>{audience}</h3>
    </div>
  );
};
