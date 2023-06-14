import { styled } from "styled-components";

export const PizzaSearch = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 20px 30px 20px;
`;

export const InputSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 250px;
    height: 50px;
    padding: 0px 10px 0px 10px;
    border: none;
  }

  button {
    width: 40px;
    height: 45px;
    background-color: transparent;
    border: none;
    position: absolute;
    margin-left: 220px;
  }

  img {
    width: 28px;
  }
`;
export const H2Name = styled.div`
  display: flex;
  text-align: center;
  margin-left: 45px;
`;

export const DivSearchPizza = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 320px;
    height: 200px;
    background-size: cover;
    filter: brightness(0.4);
    border-radius: 20px;
  }

  a {
    position: absolute;
    color: white;
    font-weight: 300;
    margin-top: 160px;
    margin-right: 140px;
    font-size: 20px;
    text-decoration: none;
  }

  h4 {
    background-color: #fe174f;
    padding: 10px;
    border-radius: 20px;
    position: absolute;
    margin-top: 150px;
    margin-right: -190px;
  }
`;
export const Background = styled.div`
  background: #ffecee;
  width: 375px;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const ImgPizza = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  img {
    width: 100px;
    color: gray;
  }

  h3 {
    color: gray;
  }
`;
