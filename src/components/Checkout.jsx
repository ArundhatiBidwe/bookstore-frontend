import React, { useState } from "react";

function Checkout() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [card, setCard] = useState("");

  const handleCheckout = (e) => {
    e.preventDefault();
    alert(`Thank you for your purchase, ${name}!`);
  };

  return (
    <div className="main-content">
      <h2>Checkout</h2>
      <form onSubmit={handleCheckout}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <label>Credit Card:</label>
        <input type="text" value={card} onChange={(e) => setCard(e.target.value)} required />
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
}

export default Checkout;
