import styled from "styled-components";

export const ContainerPayment = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffecee;
  padding: 10px 12px;
`;

export const CartShopping = styled.div`
  display: flex;

  button {
    background-color: transparent;
    border: none;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

export const DetailPizza = styled.div`
  display: flex;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  gap: 10px;
  height: 100px;

  img {
    width: 67px;
    height: 100px;
    border-radius: 9px;
    object-fit: cover;
    /* object-position: top; */
  }
`;
export const DescriptionCart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.div`
  display: flex;
  gap: 140px;
`;
export const NamePizza = styled.h3`
  color: #777676;
`;

export const FormPayment = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    padding-top: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 5px;

    button {
      padding: 18px 0px;
      margin-top: 15px;
      color: white;
      background-color: #fe174f;
      border: none;
      border-radius: 5px;
    }
  }

  input {
    height: 40px;
    border: none;
    border-radius: 3px;
    padding: 5px 0px 5px 10px;
  }

  label {
    padding-top: 10px;
  }
`;
export const Date = styled.div`
  display: flex;
  gap: 15px;
`;

export const InputD = styled.input`
  margin-top: 6px;
`;
