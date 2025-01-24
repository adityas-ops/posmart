import { Player } from "@lottiefiles/react-lottie-player";
import PropTypes from "prop-types";
import { jsPDF } from "jspdf";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router";

function PaymentSuccessful({ form }) {
  const { cart ,emptyCart} = useCart();

  const handleDownload = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(18);
    doc.text("Payment Receipt", 105, 20, null, null, "center");

    // Add form details (User Details)
    let yOffset = 40;
    doc.setFontSize(14);
    doc.text("User Details:", 20, yOffset);

    yOffset += 10;
    Object.entries(form).forEach(([key, value]) => {
      doc.text(
        `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`,
        20,
        yOffset
      );
      yOffset += 10;
    });

    // Add a separator line
    doc.setDrawColor(0, 0, 0);
    doc.line(10, yOffset, 200, yOffset);
    yOffset += 10;

    // Add cart details (Services Details)
    doc.setFontSize(14);
    doc.text("Services Details:", 20, yOffset);

    yOffset += 10;
    cart.forEach((product, index) => {
      doc.text(
        `${index + 1}. Service: ${product.name}, Sessions: ${
          product.quantity
        }, Price: $${product.price}`,
        20,
        yOffset
      );
      yOffset += 10;
    });

    // Save the PDF
    doc.save("payment_receipt.pdf");
  };

  return (
    <div className="w-full h-full pb-[300px] hideScrollBar flex overflow-y-scroll flex-col items-center">
      <div className="w-full flex flex-col justify-center">
        <Player
          autoplay
          loop
          src="/assets/payment.json"
          className="sm:size-[350px] size-[250px] object-cover sm:scale-[2]"
        />
        <h2 className="text-xl sm:text-2xl w-full text-center font-bold text-[#02B74B]">
          Payment Successful
        </h2>
      </div>
      <div className="w-full mt-[20px] flex justify-center">
        <div className="w-full">
          <h1 className="w-full text-xl font-semibold text-white">
            Receipt Details
          </h1>
          <div className="w-full h-[2px] bg-orange-400"></div>
        </div>
      </div>

      {/* PDF Preview */}
      <div className="w-full mt-[20px]">
        <div className="bg-gray-900 text-white p-4 mt-4 rounded-lg">
          <h2 className="font-bold text-lg mb-4 text-center w-full">
            Receipt Details
          </h2>
          <div>
            <h2 className="font-bold text-lg text-orange-400">User Details</h2>
            <div className=" w-full h-[2px] bg-orange-400 mb-2" />
            <div className=" w-full grid grid-cols-1 sm:grid-cols-2">
              {Object.entries(form).map(([key, value]) => (
                <p key={key} className="mb-2">
                  <span className="font-semibold">
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </span>{" "}
                  {value}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-bold text-lg mt-4 text-orange-400">
              Services Details
            </h2>
            <div className=" w-full h-[2px] bg-orange-400 mb-2" />
            <div className=" w-full grid grid-cols-1 sm:grid-cols-2">
              {cart.map((product) => (
                <p key={product.id} className="mb-2">
                  <span className="font-semibold text-green-600">Service:</span>{" "}
                  {product.name}
                  <br />
                  <span className="font-semibold text-green-600">
                    Sessions:
                  </span>{" "}
                  {product.quantity}
                  <br />
                  <span className="font-semibold text-green-600">Price:</span> $
                  {product.price}
                </p>
              ))}
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-lg"
              onClick={handleDownload}
            >
              Download Receipt
            </button>

            <Link onClick={()=>emptyCart()} className="bg-red-500 text-white py-2 px-4 rounded-lg" to="/">
              Go To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

PaymentSuccessful.propTypes = {
  form: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
  }).isRequired,
};

export default PaymentSuccessful;
