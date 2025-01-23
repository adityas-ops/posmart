import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

function Card({ service }) {
    // const increasePrice = service.price/0.35.toFixed(2);
    const { addToCart } = useCart();
    
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
      }


  return (
    <div 
    onClick={() => {
      addToCart(service)
      successNotify()
    }}
     className="w-full h-[400px] -translate-y-0 hover:-translate-y-3 cursor-pointer duration-500 bg-[#1F1D2B] shadow-[#2f2c3f] shadow-2xl border-[0.5px] border-gray-400 rounded-lg m-2">
      <img
        src={service.imgLink}
        alt={service.name}
        className="w-full h-[220px] object-cover rounded-t-lg"
      />
      <div className="p-2 flex flex-col justify-between h-[180px] ">
        <h1 className="px-1 text-white text-lg font-semibold">{service.name}</h1>
        <p className="px-2 text-gray-200 text-sm">{service.description}</p>
        <p className="px-2 text-green-400 text-lg font-semibold">
        {/* span for increase price of 45% to show and cut the text */}
            <span className="line-through text-gray-400 text-sm mr-1">
            {/* ${increasePrice} */}
            </span>
            ${service.price}
        </p>
        <button className="w-full cursor-pointer bg-orange-400 text-white py-2 rounded-lg mt-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
Card.propTypes = {
  service: PropTypes.shape({
    imgLink: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
