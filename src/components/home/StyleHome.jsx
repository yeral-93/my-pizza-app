import styled from "styled-components";

export const DivHome = styled.div`
  background: #ffecee;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`;
export const SectionDisponible = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 100px 40px 0 15px;
  gap: 20px;
`;
export const PDisponible = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 900;
`;
export const PTodas = styled.p`
  color: #fe174f;
  font-size: 20px;
  font-weight: 900;
`;
export const SectionCupon = styled.section`
  display: flex;
  position: relative;
  margin-right: 15px;
  margin-top: -10px;
`;
export const FigureCupon = styled.figure`
  display: flex;
  height: 80px;
  width: 200px;
  margin: 0 0px 5px 15px;
`;
export const ImageCupon = styled.img`
  height: 100%;
  width: 100%;
`;
export const DivCupon = styled.div`
  position: absolute;
  top: 0;
  left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const PCupon = styled.p`
  color: #fff;
  font-size: 18px;
  margin-bottom: -15px;
  white-space: nowrap;
`;

export const H2Cupon = styled.h2`
  color: #fff;
  font-size: 24px;
  margin-left: 25px;
`;
export const DivCupon1 = styled.div`
  position: absolute;
  top: 0;
  left: 215px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const PCupon1 = styled.p`
  color: #fff;
  font-size: 18px;
  margin-bottom: -15px;
`;

export const H2Cupon1 = styled.h2`
  color: #fff;
  font-size: 24px;
  margin-left: 25px;
`;
export const SectionPizza = styled.section`
  display: flex;
  margin: 5px 70px 0 15px;
  height: 210px;
  width: 360px;
  border-radius: 10px;
`;
export const FigurePizza = styled.figure`
  height: 190px;
  width: 360px;
  margin: 0;
`;
export const ImagePizza = styled.img`
  height: 100%;
  width: 100%;
`;
export const SectionPizza1 = styled.section`
  display: flex;
  margin: -10px 70px 0 15px;
  height: 210px;
  width: 360px;
  border-radius: 10px;
`;
export const FigurePizza1 = styled.figure`
  height: 190px;
  width: 360px;
  margin: 0;
`;
export const ImagePizza1 = styled.img`
  height: 100%;
  width: 100%;
`;
export const CarouselControls = styled.div`
  display: flex;
  gap: 15px;
  position: absolute;
  top: 400px;
  left: 80px;
`;
export const ActiveBotones = styled.div`
  background: white;
  border-radius: 50%;
`;
export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
`;
export const DivPrecio = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 100px;
  padding: 0 15px 0 15px;

  p {
    color: white;
    font-size: 20px;
    font-weight: 600;
  }
  button {
    height: 40px;
    width: 100px;
    border-radius: 50px;
    color: white;
    background: #fe174f;
    border: none;
    font-size: 16px;
  }
`;
