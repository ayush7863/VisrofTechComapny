import React, { useState } from "react";
// import "./CryptoPurchaseInterface.css"; // Import your custom CSS for styling
import "../Styles/Crypto..css"

const Crypto = () => {
  const cryptoData = [
    { name: "Bitcoin", price: 40000 },
    { name: "Ethereum", price: 2800 },
    { name: "Litecoin", price: 150 },
  ];

  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (cryptoName, quantity) => {
    setQuantities({ ...quantities, [cryptoName]: quantity });
  };

  const handleBuy = (cryptoName) => {
    const quantity = quantities[cryptoName];
    if (quantity > 0) {
      const existingItem = cart.find((item) => item.name === cryptoName);

      if (existingItem) {
        const updatedCart = cart.map((item) =>
          item.name === cryptoName ? { ...item, quantity } : item
        );
        setCart(updatedCart);
      } else {
        setCart([...cart, { name: cryptoName, quantity }]);
      }

      setQuantities({ ...quantities, [cryptoName]: 0 });
    } else {
      alert("Please enter a quantity");
    }
  };

  const handleRemove = (cryptoName) => {
    const updatedCart = cart.filter((item) => item.name !== cryptoName);
    setCart(updatedCart);
  };

  const getTotalCost = () => {
    let totalCost = 0;
    cart.forEach((item) => {
      const crypto = cryptoData.find((crypto) => crypto.name === item.name);
      if (crypto) {
        totalCost += crypto.price * item.quantity;
      }
    });
    return totalCost.toFixed(2); // Format to 2 decimal places
  };

  return (
    <div className="crypto-purchase-interface">
      <h1>Crypto Purchase Interface</h1>
      <div className="crypto-cards">
        {cryptoData.map((crypto) => (
          <div key={crypto.name} className="crypto-card">
            <h2>{crypto.name}</h2>
            <p>Price: ${crypto.price}</p>
            <input
              type="number"
              placeholder="Quantity"
              value={quantities[crypto.name] || ""}
              onChange={(e) =>
                handleQuantityChange(crypto.name, parseInt(e.target.value) || 0)
              }
            />
            <button onClick={() => handleBuy(crypto.name)}>Buy</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.name} className="cart-item">
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>
                  Total: ${(
                    item.quantity *
                    cryptoData.find((crypto) => crypto.name === item.name).price
                  ).toFixed(2)}
                </span>
                <button onClick={() => handleRemove(item.name)}>Remove</button>
              </div>
            ))}
            <p>Total Cost: ${getTotalCost()}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Crypto;
