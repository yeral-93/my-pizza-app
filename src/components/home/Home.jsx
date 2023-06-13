import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { ActiveBotones, CarouselControls, Circle, DivCupon, DivCupon1, DivHome, FigureCupon,  H2Cupon, H2Cupon1, ImageCupon,  PCupon, PCupon1, PDisponible, PTodas, SectionCupon, SectionDisponible,  } from './StyleHome'

import cupon from '../../assets/Coupon.png'
import axios from 'axios';
import PizzasHome from './PizzasHome'



export const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const [data, setData] = useState([])
  const [pizza, setPizza] = useState({});

  const handleSlideChange = (index) => {
    setActiveSlide(index);
    const pizzas = data[index]
    setPizza(pizzas)

  };
  useEffect(() => {
    const informacion = async () => {
      const response = await axios.get(`http://localhost:3000/pizzas`);
      setData(response.data)

    }
    informacion()

  }, []);

  useEffect(() => {
    handleSlideChange(0)
  }, [data]);
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
            <PCupon>Cupon para Pizza</PCupon>
            <H2Cupon>45% OFF</H2Cupon>
          </DivCupon>
          <FigureCupon>
            <ImageCupon src={cupon} alt="cupon" />
          </FigureCupon>
          <DivCupon1>
            <PCupon1>Cupon para Pizza </PCupon1 >
            <H2Cupon1>25% OFF</H2Cupon1>
          </DivCupon1>
        </SectionCupon>
        <CarouselControls>
          {data?.map((_, index) => (
            <ActiveBotones
              key={index}
              className={`carousel_control${activeSlide === index ? ' active_botones' : ''}`}
              onClick={() => handleSlideChange(index)}
            >
              <Circle> </Circle>
            </ActiveBotones>
          ))}
        </CarouselControls>
        <PizzasHome pizza={pizza} />
      </DivHome>
      <Footer />

    </>
  )
}
