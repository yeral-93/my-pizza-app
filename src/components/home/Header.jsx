import React, { useContext } from "react";
import {
  FigureHome,
  H2Home,
  H4Home,
  HeaderHome,
  ImageHome,
} from "./StyleHeader";
import avatar2 from "../../assets/avatar2.png";
// import { useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  // const location = useLocation();
  // const user = location.state?.user; // Obtener el objeto de usuario de la ubicación actual

  const { user } = useContext(UserContext);

  return (
    <>
      <HeaderHome>
        <div>
          <H2Home>Home</H2Home>
          {user && <H4Home>¡Que bueno verte, {user.user}!</H4Home>}
        </div>
        {user && (
          <FigureHome>
            <ImageHome src={user.avatar || avatar2} alt="avatar" />
          </FigureHome>
        )}
      </HeaderHome>
    </>
  );
};

export default Header;
