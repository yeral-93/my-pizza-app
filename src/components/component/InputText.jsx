import React from 'react'
import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;
  height:50px ;
  font-size:20px ;
  margin-top:15px ;
 
`;

export const InputText = ({ iconSrc, ...props }) => {
  return (
    <InputContainer>
    <Icon src={iconSrc} alt="Icon" />
    <Input {...props} />
  </InputContainer>
  )
}


