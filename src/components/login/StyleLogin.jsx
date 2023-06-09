import styled from 'styled-components';
import baground from '../../assets/pizzaBackgroundLogin.jpg';



export const Background = styled.div`
  background-image: url(${baground});
  background-size: cover;
  background-position: center;
  position: absolute;
  filter:brightness(.4) ;

  width: 100%;
  height: 100vh;
  z-index:0 ;
`;

export const Content = styled.div`
display:flex ;
justify-content:center ;
flex-direction:column ;
 z-index: 1;
padding:0 20px 0 20px ;
`;
export const Section = styled.figure`
width:120px ;
margin-left: 100px;
margin-top:-15px ;
`;

export const Image = styled.img`
  width:100% ;
  height:100% ;

`;
export const H1 = styled.h1`
color:white ;
text-align:center ;
margin-top:-15px ;
font-weight:bolder ;
`;
export const H2 = styled.h2`
text-align:center ;
color:white ;
margin:15px ;
`;
export const P = styled.p`
color:white ;
text-align:start;
margin-top:-5px ;
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  outline: none;

`;
export const Button = styled.button`
height: 60px;
font-size:20px ;
border-radius: 7px;
margin-top:30px ;
`;
export const ARestablecer = styled.a`
font-weight:bold ;
color:white ;
text-align:center ;
margin-top:18px ;
font-size:20px ;
text-decoration:none ;
`;
export const PCuenta = styled.p`
color:#a8a4a4 ;
text-align:center ;
margin-top:40px ;
`;
export const ARegistrate = styled.a`
font-weight:bold ;
color:white ;
text-align:center ;
font-size:20px ;
text-decoration:none ;
margin-top:-10px ;
`;



