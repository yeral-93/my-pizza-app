import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { get } from "../../service/apiPizza";
import avatar from "../../assets/photo.webp";
import cart from "../../assets/iconCart.png";
import star from "../../assets/startIcons.png";
import {
  ButtonCart,
  ButtonCash,
  ButtonCount,
  Comment,
  CommentUser,
  ContainerDetails,
  H3Price,
  H3View,
  IconArrow,
  ImgPpal,
  Information,
  Price,
  ShoppingCart,
} from "./StyleDetailsPizza";
import arrow from "../../assets/chevron_left_FILL0_wght400_GRAD0_opsz48.png";
import { CartContext } from "../context/CartContext";
import starWhite from "../../assets/Daco_4832425.png";

const DetailsPizza = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlePay = () => {
    addToCart({
      id: pizza.id,
      nombre: pizza.nombre,
      imagen: pizza.imagen,
      cantidad: count,
    });

    navigate("/paymentpizza", {
      state: {
        cantidad: count,
        pizzaEscogida: pizza.nombre,
        imagen: pizza.imagen,
        totalPagar: count * pizza.precio,
      },
    });
  };

  useEffect(() => {
    const fetchPizza = async () => {
      const response = await get(`pizzas/${id}`);
      setPizza(response);
    };

    fetchPizza();
  }, [id]);

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  const { imagen, nombre, precio, Descripción } = pizza;

  return (
    <ContainerDetails>
      <IconArrow>
        <button onClick={() => navigate(-1)}>
          <img src={arrow} alt="arrow" />
        </button>
        <h3>Todas las pizzas</h3>
      </IconArrow>
      <ImgPpal>
        <img src={imagen} alt={nombre} />
      </ImgPpal>
      <Information>
        <div>
          <h2>{nombre}</h2>
        </div>
        <Price>
          <H3Price>$ {precio} COP</H3Price>
          <H3View>
            <img src={starWhite} alt="" />
            445 review
          </H3View>
        </Price>
        <div>
          <h4>Descripción</h4>
          <p>{Descripción}</p>
        </div>
      </Information>
      <Comment>
        <div>
          <img src={avatar} alt="" />
        </div>
        <div>
          <CommentUser>
            <div>
              <h3>Marcos Toledo</h3>
              <img src={star} alt="start" />
              <img src={star} alt="start" />
              <img src={star} alt="start" />
            </div>
            <div>
              <h5>4d ago</h5>
            </div>
          </CommentUser>
          <div>
            <p>De las mejores pizzas que he probado, recomendada.</p>
          </div>
        </div>
      </Comment>
      <ShoppingCart>
        <ButtonCount onClick={decrement}>-</ButtonCount>
        <span>{count}</span>
        <ButtonCount onClick={increment}>+</ButtonCount>
        <ButtonCart>
          <img src={cart} alt="" />
          {count > 0 && <span>{count}</span>}
        </ButtonCart>
        <ButtonCash onClick={handlePay}>Pagar</ButtonCash>
      </ShoppingCart>
    </ContainerDetails>
  );
};

export default DetailsPizza;
