import PropTypes from "prop-types";

function UserInformation({ step, setStep, form, handleChange }) {
    return (
        <div className="w-full h-full overflow-y-scroll hideScrollBar pb-[200px] sm:h-fit p-[20px] bg-[#1F1D2B] rounded-lg">
          <p className="text-white text-xl font-semibold font-mono">
            Add User Information
          </p>
          <div className="w-[150px] h-[2px] bg-orange-400"></div>
          <div className="mt-[20px]">
            <div className="w-full flex sm:flex-row flex-col items-center gap-[20px]">
              <div className="w-full flex-col gap-y-[10px]">
                <label className="text-white mx-[10px] font-mono">Name</label>
                <input
                  type="text"
                  name="name" // Add the name attribute
                  placeholder="Jaegar Resto"
                  className="w-full mt-1 h-[50px] px-4 bg-[#2A2937] placeholder:text-gray-300 text-white rounded-lg"
                  value={form.name}
                  onChange={handleChange} // Properly bind the event handler
                />
              </div>
              <div className="w-full flex-col gap-y-[10px]">
                <label className="text-white mx-[10px] font-mono">Email</label>
                <input
                  type="email"
                  name="email" // Add the name attribute
                  placeholder="Jaegar@gmail.com"
                  className="w-full mt-1 h-[50px] px-4 bg-[#2A2937] placeholder:text-gray-300 text-white rounded-lg"
                  value={form.email}
                  onChange={handleChange} // Properly bind the event handler
                />
              </div>
            </div>
    
            <div className="w-full flex sm:flex-row flex-col mt-[20px] items-center gap-[20px]">
              <div className="w-full flex-col gap-y-[10px]">
                <label className="text-white mx-[10px] font-mono">Phone No.</label>
                <input
                  type="text"
                  name="phone" // Add the name attribute
                  placeholder="Phone Number"
                  className="w-full mt-1 h-[50px] px-4 bg-[#2A2937] placeholder:text-gray-300 text-white rounded-lg"
                  value={form.phone}
                  onChange={handleChange} // Properly bind the event handler
                />
              </div>
              <div className="w-full flex-col gap-y-[10px]">
                <label className="text-white mx-[10px] font-mono">Address</label>
                <input
                  type="text"
                  name="address" // Add the name attribute
                  placeholder="abs..."
                  className="w-full mt-1 h-[50px] px-4 bg-[#2A2937] placeholder:text-gray-300 text-white rounded-lg"
                  value={form.address}
                  onChange={handleChange} // Properly bind the event handler
                />
              </div>
            </div>
    
            <div className="w-full flex mt-[20px] sm:flex-row flex-col items-center gap-[20px]">
              <div className="w-full flex-col gap-y-[10px]">
                <label className="text-white mx-[10px] font-mono">City</label>
                <input
                  type="text"
                  name="city" // Add the name attribute
                  placeholder="Gorakhpur"
                  className="w-full mt-1 h-[50px] px-4 bg-[#2A2937] placeholder:text-gray-300 text-white rounded-lg"
                  value={form.city}
                  onChange={handleChange} // Properly bind the event handler
                />
              </div>
              <div className="w-full flex-col gap-y-[10px]">
                <label className="text-white mx-[10px] font-mono">State</label>
                <input
                  type="text"
                  name="state" // Add the name attribute
                  placeholder="Uttar Pradesh"
                  className="w-full mt-1 h-[50px] px-4 bg-[#2A2937] placeholder:text-gray-300 text-white rounded-lg"
                  value={form.state}
                  onChange={handleChange} // Properly bind the event handler
                />
              </div>
            </div>
    
            <div className="w-full flex mt-[20px] sm:flex-row flex-col items-center gap-[20px]">
              <div className="w-full flex-col gap-y-[10px]">
                <label className="text-white mx-[10px] font-mono">Zip</label>
                <input
                  type="text"
                  name="zip" // Add the name attribute
                  placeholder="231223"
                  className="w-full mt-1 h-[50px] px-4 bg-[#2A2937] placeholder:text-gray-300 text-white rounded-lg"
                  value={form.zip}
                  onChange={handleChange} // Properly bind the event handler
                />
              </div>
              <div className="w-full flex-col gap-y-[10px]">
                <label className="text-white mx-[10px] font-mono">Country</label>
                <input
                  type="text"
                  name="country" // Add the name attribute
                  placeholder="India"
                  className="w-full mt-1 h-[50px] px-4 bg-[#2A2937] placeholder:text-gray-300 text-white rounded-lg"
                  value={form.country}
                  onChange={handleChange} // Properly bind the event handler
                />
              </div>
            </div>
          </div>
          <div className="py-[30px] flex items-center gap-[10px]">
            <button
              className="w-full cursor-pointer bg-red-400 text-white py-3 rounded-lg flex justify-center items-center"
              onClick={() => {
                setStep(step - 1);
              }}
            >
              Back
            </button>
            <button
              onClick={() => {
                setStep(step + 1);
              }}
              className="w-full bg-orange-400 text-white py-3 rounded-lg ml-[20px]"
            >
              Pay
            </button>
          </div>
        </div>
      );
    }


UserInformation.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
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
  handleChange: PropTypes.func.isRequired,
};
export default UserInformation;
