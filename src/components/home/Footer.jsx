import React from 'react'
import { FigureBuscar, FigureCanasta, FigureLibro, FooterHome, ImageBuscar, ImageCanasta, ImageLibro, SectionBuscar, SectionCanasta, SectionHome } from "./StyleFooter";
import libro from "../../assets/book-open-light.svg"
import canasta from "../../assets/shopping-basket.svg"
import buscar from "../../assets/search-outline.svg"
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navegar = useNavigate()

  const onClikBuscar = (id) => {
    navegar('/searchpizza')
  }
  
  return (
    <>
    <FooterHome>
        <SectionHome>
        <FigureLibro>
                <ImageLibro src={libro} alt="libro" />
            </FigureLibro>
            <p>Home</p>
        </SectionHome>
        <SectionCanasta>
        <FigureCanasta>
                <ImageCanasta src={canasta} alt="canasta" />
            </FigureCanasta>
        </SectionCanasta>
        <SectionBuscar onClick={onClikBuscar}>
        <FigureBuscar>
                <ImageBuscar src={buscar} alt="buscar" />
            </FigureBuscar>
        <p>Buscar</p>
          
        </SectionBuscar>

    </FooterHome>
    </>
  )
}

export default Footer