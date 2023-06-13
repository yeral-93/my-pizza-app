import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import Login from "../login/Login";
import NoFound from "../noFound/NoFound";
import SearchPizza from "../searchPizza/SearchPizza";
import DetailsPizza from "../detailsPizza/DetailsPizza";
import PaymentPizza from "../paymentPizza/PaymentPizza";
import ExitPayment from "../exitPayment/ExitPayment";
import { MobileView } from "../styles/GlobalStyles";
import { CartProvider } from "../context/CartContext";

const AppRoutes = () => {
  return (
    <>
    <CartProvider>
      <MobileView>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/searchpizza" element={<SearchPizza />} />
            <Route path="/detailspizza/:id" element={<DetailsPizza />} />
            <Route path="/paymentpizza" element={<PaymentPizza />} />
            <Route path="/exitpayment" element={<ExitPayment />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </BrowserRouter>
      </MobileView>
      </CartProvider>
    </>
  );
};

export default AppRoutes;

