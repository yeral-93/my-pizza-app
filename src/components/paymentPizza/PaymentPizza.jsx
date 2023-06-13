import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import flecha from "../../assets/chevron_left_FILL0_wght400_GRAD0_opsz48.png";
import {
  CartShopping,
  ContainerPayment,
  Date,
  DescriptionCart,
  DetailPizza,
  FormPayment,
  InputD,
  NamePizza,
  Price,
} from "./StylePaymentPizza";
import * as Yup from "yup";
import { useFormik } from 'formik';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "El nombre debe tener mínimo 3 caracteres")
    .required("El nombre es obligatorio"),
  cardNumber: Yup.number()
    .min(16, "El número de tarjeta debe tener mínimo 16 caracteres")
    .required("El número de tarjeta es obligatorio"),
  expirationDate: Yup.string()
    .min(5, "La fecha de vencimiento debe tener mínimo 5 caracteres")
    .max(5, "La fecha de vencimiento debe tener máximo 5 caracteres")
    .required("La fecha de vencimiento es obligatoria"),
  cvv: Yup.number()
    .min(3, "El cvv debe tener mínimo 3 caracteres")
    .required("El cvv es obligatorio"),
  direction: Yup.string()
    .min(13, "La dirección debe tener mínimo 13 caracteres")
    .max(30, "La dirección debe tener máximo 30 caracteres")
    .required("La dirección es obligatoria"),
});

const initialValues = {
  name: "",
  cardNumber: "",
  expirationDate: "",
  cvv: "",
  direction: "",
};

const PaymentPizza = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        // Aquí enviamos los datos al endpoint JSON utilizando axios
        await axios.post(' https://pizza-frontend-fhv7.onrender.com/Cash', values);

        // Redirigimos al usuario a la página de confirmación
        navigate('/exitpayment');
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  const location = useLocation();
  const { cantidad, pizzaEscogida, imagen, totalPagar } = location.state;

  return (
    <ContainerPayment>
      <CartShopping>
        <button>
          <img src={flecha} alt="" />
        </button>
        <h3>Carrito de compras</h3>
      </CartShopping>
      <DetailPizza>
        <div>
          <img src={imagen} alt={pizzaEscogida} />
        </div>
        <DescriptionCart>
          <NamePizza>{pizzaEscogida}</NamePizza>
          <Price>
            <h3>x {cantidad}</h3>
            <h3>$ {totalPagar}</h3>
          </Price>
        </DescriptionCart>
      </DetailPizza>
      <FormPayment>
        <h3>Información de pago</h3>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="">Nombre completo</label>
          <input type="text" name="" id="" placeholder="Ingresa tu nombre" {...formik.getFieldProps("name")} />
          {formik.touched.name && formik.errors.name && (
            <div>{formik.errors.name}</div>
          )}
          <label htmlFor="">Número de Tarjeta de Crédito</label>
          <input type="text" placeholder="1234 1234 1234 1234" {...formik.getFieldProps("cardNumber")} />
          {formik.touched.cardNumber && formik.errors.cardNumber && (
            <div>{formik.errors.cardNumber}</div>
          )}
          <Date>
            <div>
              <label htmlFor="">Fecha de vencimiento</label>
              <InputD type="text" placeholder="12/29" {...formik.getFieldProps("expirationDate")} />
              {formik.touched.expirationDate && formik.errors.expirationDate && (
                <div>{formik.errors.expirationDate}</div>
              )}
            </div>
            <div>
              <label htmlFor="">CVV</label>
              <InputD type="text" placeholder="333" {...formik.getFieldProps("cvv")} />
              {formik.touched.cvv && formik.errors.cvv && (
                <div>{formik.errors.cvv}</div>
              )}
            </div>
          </Date>
          <label htmlFor="">Dirección</label>
          <input type="text" placeholder="Av.morelos #123" {...formik.getFieldProps("direction")} />
          {formik.touched.direction && formik.errors.direction && (
            <div>{formik.errors.direction}</div>
          )}
          <button type="submit">Pagar Ahora</button>
        </form>
      </FormPayment>
    </ContainerPayment>
  );
};

export default PaymentPizza;

