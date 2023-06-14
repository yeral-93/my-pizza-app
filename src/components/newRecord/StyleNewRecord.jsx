import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 360px;
  margin: 0 auto;
  z-index: 1;
  margin: 2px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  height: 30px;
  border-radius: 10px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #fe174f;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  font-size: 18px;
`;
