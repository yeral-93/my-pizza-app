import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { DivCupon, DivCupon1, DivHome, FigureCupon, FigurePizza, FigurePizza1, H2Cupon, H2Cupon1, ImageCupon, ImagePizza, ImagePizza1, PCupon, PCupon1, PDisponible, PTodas, SectionCupon, SectionDisponible, SectionPizza, SectionPizza1, } from './StyleHome'
import pizza from '../../assets/pizzaBackgroundLogin.jpg'
import cupon from '../../assets/Coupon.png'


export const Home = () => {
  return (
    <>


      <Header />
      <DivHome>
        <SectionDisponible>
          <PDisponible>Pizzas disponibles</PDisponible>
          <PTodas>Ver Todas</PTodas>
        </SectionDisponible>
        <SectionCupon>
          <FigureCupon>
            <ImageCupon src={cupon} alt="cupon" />
          </FigureCupon>
          <DivCupon>
          <PCupon>Cupon para Frontends</PCupon>
            <H2Cupon>45% OFF</H2Cupon>
            </DivCupon>
            <FigureCupon>
            <ImageCupon src={cupon} alt="cupon" />
          </FigureCupon>
          <DivCupon1>
          <PCupon1>Cupon Pizza CSS</PCupon1 >
            <H2Cupon1>25% OFF</H2Cupon1>
            </DivCupon1>
        </SectionCupon>

        <SectionPizza>
          <FigurePizza>
            <ImagePizza src={pizza} alt=" pizza" />
          </FigurePizza>
        </SectionPizza>
        <SectionPizza1>
          <FigurePizza1>
            <ImagePizza1 src={pizza} alt=" pizza" />
          </FigurePizza1>
        </SectionPizza1>
      </DivHome>
      <Footer />



    </>
  )
}
