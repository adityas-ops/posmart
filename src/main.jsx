import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { CartProvider } from "./context/CartContext.jsx";
import { ToastContainer} from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
    <ToastContainer />
  </CartProvider>
);
