import React from "react";
import {
  ButtonAceptar,
  DivExit,
  FigureExit,
  H1Exit,
  H4Exit,
  ImagenExit,
  SectionExit,
  SectionProceso,
} from "./StyleExitPayment";
import exit from "../../assets/imagenExit.webp";
import { useNavigate } from "react-router-dom";
const ExitPayment = () => {
  const navegar = useNavigate();

  const onClikHome = () => {
    navegar("/home");
  };
  return (
    <>
      <DivExit>
        <SectionExit>
          <FigureExit>
            <ImagenExit src={exit} alt="exit" />
          </FigureExit>
        </SectionExit>
        <SectionProceso>
          <H1Exit>Tu pedido esta en proceso</H1Exit>
          <H4Exit>Seras notificado cuando llegue el repartidor</H4Exit>
        </SectionProceso>
        <ButtonAceptar onClick={onClikHome}>Aceptar</ButtonAceptar>
      </DivExit>
    </>
  );
};

export default ExitPayment;
