import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import Login from "../login/Login";
import NoFound from "../noFound/NoFound";
import SearchPizza from "../searchPizza/SearchPizza";
import DetailsPizza from "../detailsPizza/DetailsPizza";
import PaymentPizza from "../paymentPizza/PaymentPizza";
import ExitPayment from "../exitPayment/ExitPayment";


const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} index element={<Home />} />
          <Route path={"login"} element={<Login />} />
          <Route path={"searchpizza"} element={<SearchPizza />} />
          <Route path={"detailspizza"} element={<DetailsPizza />} />
          <Route path={"paymentpizza"} element={<PaymentPizza />} />
          <Route path={"exitpayment"} element={<ExitPayment />} />
          <Route path={"*"} element={<NoFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
