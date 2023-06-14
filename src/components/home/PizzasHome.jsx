import React from 'react'
import { DivPrecio, FigurePizza, FigurePizza1, ImagePizza, ImagePizza1, SectionPizza, SectionPizza1 } from './StyleHome'
import pizza1 from '../../assets/pizzaBackgroundLogin.jpg'

const PizzasHome = ({pizza}) => {
    return (
        <>
    <SectionPizza>
       
          <FigurePizza>
        
            <ImagePizza src={pizza?.imagen} alt={ pizza?.nombre} />
            <DivPrecio>
                <p>{pizza?.nombre}</p>
                <button>$ {pizza?.precio}</button>
            </DivPrecio>
          </FigurePizza>
        </SectionPizza>
        <SectionPizza1>

          <FigurePizza1>
            <ImagePizza1 src={pizza1} alt=" pizza" />
            <DivPrecio>
                <p>Pizza Jamon y queso</p>
                <button>$40800</button>
            </DivPrecio>
          </FigurePizza1>
        </SectionPizza1>
        </>
    )
}

export default PizzasHome