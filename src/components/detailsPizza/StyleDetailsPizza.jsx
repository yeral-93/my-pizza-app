import { styled } from "styled-components";

export const ContainerDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  background-color: #313030;
  color: white;
  width: 100%;
`;

export const IconArrow = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 500;

  button {
    background-color: transparent;
    border: none;
  }
  img {
    width: 30px;
    height: 30px;
  }

  h3 {
    color: white;
  }
`;

export const ImgPpal = styled.div`
  display: flex;
  flex-direction: column;
 

  img {
    width: 394px;
    height: 310px;
    object-fit: cover;
    filter: brightness(0.4);
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 0px 20px;

  h2 {
    color: white;
    letter-spacing: 0.5px;
  }

  p {
    font-weight: 300;
    padding-bottom: 20px;
  }
`;
export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const H3Price = styled.h3`
  background-color: #fe174f;
  padding: 9px 11px;
  border-radius: 15px;
  font-weight: 300;
  font-size: 15px;
`;
export const H3View = styled.h3`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #ed7105;
  padding: 9px 11px;
  border-radius: 15px;
  font-weight: 200;
  font-size: 15px;

  img {
    width: 15px;
  }
`;

export const Comment = styled.div`
  display: flex;
  gap: 26px;
  padding: 0px 20px 0px 20px;
  background-color: #313030;
  border-radius: 0px 0px 20px 20px;
  z-index: 500;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const CommentUser = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -15px;

  img {
    width: 15px;
    height: 16px;
    border-radius: none;
    margin-right: 10px;
  }

  h5 {
    font-weight: 200;
    color: gray;
  }
`;

export const ShoppingCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fe174f;
  padding: 60px 0px 30px 0px;
  position: absolute;
  width: 395px;
  margin-top: 690px;
  img {
    width: 25px;
  }

  span {
    font-size: 23px;
    font-weight: 300;
  }
`;

export const ButtonCash = styled.button`
  background-color: white;
  border: none;
  color: #a9a8a8;
  border-radius: 5px;
  padding: 15px 28px;
`;
export const ButtonCount = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  width: 30px;
  height: 35px;
  font-size: 30px;
`;
export const ButtonCart = styled.button`
  background-color: transparent;
  border: solid 1px white;
  border-radius: 5px;
  padding: 7px 17px;

  span {
    background-color: white;
    border-radius: 50px;
    font-size: 18px;
    position: absolute;
    margin-left: -5px;
    margin-top: -5px;
    padding: 0px 5px;
  }
`;
