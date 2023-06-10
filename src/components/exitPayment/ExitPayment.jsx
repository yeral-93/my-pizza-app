import React from 'react'
import { ButtonAceptar, DivExit, FigureExit, H1Exit, H4Exit, ImagenExit, SectionExit, SectionProceso } from './StyleExitPayment'
import exit from "../../assets/imagenExit.webp"
const ExitPayment = () => {
  return (
    <>
    <DivExit>
      <SectionExit>
        <FigureExit>
<ImagenExit src={exit} alt="exit" />
</FigureExit>
      </SectionExit>
      <SectionProceso>
      <H1Exit>
        Tu pedido esta en proceso
      </H1Exit>
      <H4Exit>
        Seras notificado cuando llegue el repartidor
      </H4Exit>
      </SectionProceso>
      <ButtonAceptar>Aceptar</ButtonAceptar>
    </DivExit>
    </>
  )
}

export default ExitPayment