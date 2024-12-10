import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BookDetails() {
  const { id } = useParams(); // Extract book ID from URL
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  // Simulate fetching book details (replace with API call)
  useEffect(() => {
    const fetchBookDetails = async () => {
      const bookData = [
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 15, description: "A classic novel set in the Roaring Twenties." },
        { id: 2, title: "1984", author: "George Orwell", price: 20, description: "A dystopian novel about totalitarian surveillance." },
        { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", price: 18, description: "A powerful story about racial injustice in the South." }
      ];

      const selectedBook = bookData.find((b) => b.id === parseInt(id));
      setBook(selectedBook || null);
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <h2>Book not found!</h2>;
  }

  return (
    <div className="main-content">
      <h1>{book.title}</h1>
      <h3>by {book.author}</h3>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Price:</strong> ${book.price}</p>
      <button onClick={() => alert("Added to cart!")}>Add to Cart</button>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default BookDetails;
