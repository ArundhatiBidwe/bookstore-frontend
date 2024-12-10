import React from "react";
import BookList from "../components/BookList";

function Home() {
  return (
    <div className="main-content">
      <h1>Welcome to BookStore</h1>
      <BookList />
    </div>
  );
}

export default Home;
