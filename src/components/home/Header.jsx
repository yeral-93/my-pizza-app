import React from 'react'
import { FigureHome, H2Home, H4Home, HeaderHome, ImageHome } from "./StyleHeader";
import avatar2 from "../../assets/avatar2.png"

const Header = () => {
    return (
        <>
            <HeaderHome>
                <div>
                <H2Home>Home
                </H2Home>
                <H4Home>¡Que bueno verte Cris!</H4Home>
                </div>
                <FigureHome>
                <ImageHome src={avatar2} alt="avatar" />
                </FigureHome>
            </HeaderHome>
            
        </>
    )
}

export default Header