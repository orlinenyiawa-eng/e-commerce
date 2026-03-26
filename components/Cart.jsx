function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛍️ Panier</h2>

      {cart.length === 0 ? (
        <p>Le panier est vide</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>
            {item.name} - {item.price} €
          </p>
        ))
      )}

      <h3>Total: {total} €</h3>
    </div>
  );
}

export default Cart;