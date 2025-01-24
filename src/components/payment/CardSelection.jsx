import { Link } from "react-router";
import PropTypes from "prop-types";

function CardSelection({ step, setStep }) {
  return (
    <div className=" w-full h-fit p-[20px] bg-[#1F1D2B] rounded-lg">
      <p className="text-white text-xl font-semibold font-mono">
        Payment Method
      </p>
      <div className=" w-[150px] h-[2px] bg-orange-400"></div>
      <div className="mt-[20px]">
        <div className="w-full flex-col gap-y-[10px]">
          <lable className="text-white mx-[10px] font-mono ">
            CardHolder Name
          </lable>
          <input
            type="text"
            placeholder="Jaegar Resto"
            className="w-full mt-1 h-[50px]  px-4 bg-[#2A2937] placeholder:text-gray-300 text-white rounded-lg"
          />
        </div>
        <div className="w-full mt-[15px] flex-col gap-y-[10px]">
          <lable className="text-white mx-[10px] font-mono ">Card Number</lable>
          <input
            type="text"
            placeholder="2564 1421 0897 1244"
            className="w-full mt-1 h-[50px]  px-4 bg-[#2A2937] placeholder:text-gray-300 text-white rounded-lg"
          />
        </div>
        <div className=" w-full flex items-center gap-[50px]">
          <div className="w-full mt-[15px] flex-col gap-y-[10px]">
            <lable className="text-white mx-[10px] font-mono ">
              Expiration Date
            </lable>
            <input
              type="text"
              placeholder="02/2023"
              className="w-full mt-1 h-[50px]  px-4 bg-[#2A2937] placeholder:text-gray-300 text-white rounded-lg"
            />
          </div>
          <div className="w-full mt-[15px] flex-col gap-y-[10px]">
            <lable className="text-white mx-[10px] font-mono ">CVV</lable>
            <input
              type="password"
              placeholder="123"
              className="w-full mt-1 h-[50px]  px-4 bg-[#2A2937] placeholder:text-gray-300 text-white rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className=" py-[30px] flex items-center gap-[10px]  ">
        <Link
          className=" w-full cursor-pointer bg-red-400 text-white py-3 rounded-lg flex justify-center items-center"
          to="/cart"
        >
          Cancel
        </Link>
        <button
          onClick={() => {
            setStep(step + 1);
          }}
          className="w-full bg-green-400 text-white py-3 rounded-lg ml-[20px]"
        >
          Next
        </button>
      </div>
    </div>
  );
}
CardSelection.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
};

export default CardSelection;
