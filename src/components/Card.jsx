import PropTypes from "prop-types";
import { useCart } from "../context/CartContext";

function Card({ service }) {
    // const increasePrice = service.price/0.35.toFixed(2);
    const { addToCart } = useCart();

  return (
    <div 
    onClick={() => addToCart(service)}
     className="w-full h-[400px] hover:scale-[1.01] cursor-pointer duration-300 bg-[#1F1D2B] shadow-[#2f2c3f] shadow-2xl border-[0.5px] border-gray-400 rounded-lg m-2">
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
        <button className="w-full bg-orange-400 text-white py-2 rounded-lg mt-2">
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
