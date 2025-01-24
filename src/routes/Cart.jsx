import Layout from "../components/Layout";
import { useCart } from "../context/CartContext";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

function Cart() {
  const { cart, getCartItemCount } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    setTotalPrice(total);
  }, [cart]);

  return (
    <Layout>
      <div className=" w-full h-full pt-[20px]  sm:pt-[70px] overflow-hidden">
        {cart.length === 0 ? (
          <div className="w-full  h-full flex l items-center flex-col justify-center">
            <h2 className="text-2xl sm:text-4xl w-full text-center font-bold text-gray-100">
              Add some sessions to your cart
            </h2>
            <Link
              to="/"
              className="w-full mt-[30px] max-w-[240px] mx-auto cursor-pointer flex items-center justify-center bg-orange-500 text-white py-2 rounded-lg "
            >
              Go to Home
            </Link>
            <img
              src="/assets/images/noItem.png"
              className=" sm:w-[60%] sm:h-[60%] object-contain"
              alt="Empty Cart"
            />
          </div>
        ) : (
          <div className="w-full  h-full flex sm:flex-row flex-col gap-[20px]   sm:gap-[50px] ">
            {/* cart */}
            <div className="sm:h-full h-[120vh] hideScrollBar  overflow-y-scroll">
              <div className=" w-full h-fit gap-[10px] sm:gap-[30px]  grid grid-cols-1 sm:grid-cols-3">
                {cart.map((product) => (
                  <Card key={product.id} product={product} />
                ))}
              </div>
            </div>
            {/* payment */}
            <div className=" z-30 w-full sm:w-[400px] h-[440px] sm:h-full">
              <div className="w-full justify-between h-[160px] bg-[#1F1D2B] border-[0.5px] border-gray-300 p-2 rounded-md flex flex-col  items-center">
                <div className="mt-[10px] flex justify-center gap-[10px] items-center w-full">
                  <h2 className="text-white sm:text-2xl text-xl ">
                    Total Sessions :
                  </h2>
                  <h2 className="text-green-400 sm:text-2xl text-xl text-center ">
                    {getCartItemCount()}
                  </h2>
                </div>
                <div className="mt-[10px] flex justify-center gap-[10px] items-center w-full">
                  <h2 className="text-white sm:text-2xl text-xl ">
                    Total Price :
                  </h2>
                  <h2 className="text-green-400 sm:text-2xl text-xl text-center">
                    ${totalPrice}
                  </h2>
                </div>

                <Link
                  to="/payment"
                  onClick={() => {}}
                  className="w-full cursor-pointer flex items-center justify-center bg-orange-500 text-white py-2 rounded-lg mt-2"
                >
                  Pay
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

const Card = ({ product }) => {
  const { deleteFromCart, addToCart } = useCart();
  const successNotify = () => {
    toast.success("Item added to cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const errorNotify = () => {
    toast.error("Item removed from cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="h-[200px]  w-full">
      <div className="w-full h-[140px] bg-[#1F1D2B] border-[0.5px] border-gray-300 p-2 rounded-md flex gap-[10px]">
        <img
          src={product.imgLink}
          alt={product.name}
          className="w-[120px]   h-[120px] object-cover rounded-sm"
        />
        <div className="text-white pr-[10px] min-w-[150px] flex flex-col justify-start">
          <h3 className=" font-semibold ">{product.name}</h3>
          <p className=" text-xs text-gray-300">
            Quantity: {product.description}
          </p>
          <p className="text-[12px] mt-2 ">
            Price: <span className="text-green-400">${product.price}</span>
          </p>
        </div>
      </div>
      <div className="w-full px-[20px] mt-[10px] flex justify-center gap-[10px] items-center">
        {/* remove */}
        <button
          className="h-[40px] cursor-pointer hover:scale-[1.02] duration-300 w-[40px] bg-red-500 text-white rounded-full items-center justify-center flex"
          onClick={() => {
            deleteFromCart(product.id);
            errorNotify();
          }}
        >
          <AiOutlineMinus />
        </button>
        {/* quantity */}
        <div className="w-[150px] h-[40px] rounded-md bg-[#1F1D2B] text-white flex justify-center items-center">
          Sessions: {product.quantity}
        </div>

        {/* add  */}
        <button
          className="h-[40px] cursor-pointer hover:scale-[1.02] duration-300 w-[40px] bg-green-500 text-white rounded-full items-center justify-center flex"
          onClick={() => {
            addToCart(product);
            successNotify();
          }}
        >
          <FiPlus />
        </button>
      </div>
    </div>
  );
};

{
  /* <button onClick={() => deleteFromCart(product.id)}>Remove</button> */
}
Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgLink: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cart;
