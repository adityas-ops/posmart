import { useState } from "react";
import Layout from "../components/Layout";
import CardSelection from "../components/payment/CardSelection";
import UserInformation from "../components/payment/UserInformation";
import PaymentSuccessful from "../components/payment/PaymentSuccessful";

function Payment() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const [step, setStep] = useState(1);


  console.log('form', form);
  return (
    <Layout>
      <div className="w-full h-full pt-[20px] sm:pt-[30px] overflow-hidden">
        <div className=" w-full h-fit text-center">
          <h2 className="text-2xl  sm:text-4xl w-full text-center font-bold text-orange-400">
            Payment Details
          </h2>
        </div>
        {/* create steps if user on step 1 then fill one circle and if it is 2 then fill 1 and 2 same as 3  */}
        <div className="w-full h-fit flex items-center justify-center gap-[5px] sm:gap-[30px] mt-[20px]">
          <div
            className={`w-[20px] h-[20px] rounded-full ${
              step >= 1 ? "bg-orange-400" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`sm:w-[150px] w-[35%] h-[2px] ${
              step >= 2 ? "bg-orange-400" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`w-[20px] h-[20px] rounded-full ${
              step >= 2 ? "bg-orange-400" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`sm:w-[150px] w-[35%] h-[2px] ${
              step >= 3 ? "bg-orange-400" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`w-[20px] h-[20px] rounded-full ${
              step >= 3 ? "bg-orange-400" : "bg-gray-300"
            }`}
          ></div>
        </div>
        {/*  now step wise component should be render */}
        <div className=" w-full h-full flex mt-[50px]  justify-center">
          <div className="sm:max-w-[60%] max-w-full w-full">
            {step === 1 ? (
              <CardSelection step={step} setStep={setStep} />
            ) : step === 2 ? (
              <UserInformation
                setStep={setStep}
                step={step}
                form={form}
                setForm={setForm}
                handleChange={handleChange}
              />
            ) : ( 
              <PaymentSuccessful form={form} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Payment;
