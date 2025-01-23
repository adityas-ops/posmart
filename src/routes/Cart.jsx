import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, deleteFromCart } = useCart();
  console.log("cart", cart);
  return (
    <Layout>
      <div className="cart">
        <h1>Cart</h1>
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => deleteFromCart(product.id)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
