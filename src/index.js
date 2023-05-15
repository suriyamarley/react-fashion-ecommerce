import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// css
import "./styles/App.css";
import "./styles/normalize.css";

// sidebar provider
import SidebarProvider from "./contexts/SidebarContext";
// Context provider
import CartProvider from "./contexts/CartContext";
// Auth provider
import AuthContextProvider from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </CartProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
