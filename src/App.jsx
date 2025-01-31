import {Routes, Route } from "react-router";
import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Cart from "./routes/Cart";
import Notification from "./routes/Notification";
import Setting from "./routes/Setting";
import Payment from "./routes/Payment";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/cart"  element={<Cart/>} />
        <Route path="/notification" element={<Notification/>} />
        <Route path="/setting" element={<Setting/>} />
        <Route path="/payment" element={<Payment/>} />
      </Routes>
    </>
  )
}

export default App
