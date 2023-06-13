import React from 'react'
import { Background, Button, Content, H1, H2, Image,  P, Section, ARestablecer, PCuenta, ARegistrate, ButtonLogin, } from "./StyleLogin";
import icono from '../../assets/iconoPizza.png'
import { InputText } from '../component/InputText';
import user from '../../assets/user.svg'
import closed from '../../assets/lock-closed.svg'



const Login = () => {
  return (
    <>
      <Background />
      <Content>
        <Section>
          <Image src={icono} alt="icono" />
        </Section>
        <H1>piSassScript</H1>
        <H2>Inicia sesion en tu cuenta</H2>
        <P>Difruta de la mejor Pizza creada para las personas amantes del codigo</P>
        <InputText
          iconSrc={user}
          placeholder={'Usuario'}
        />
         <InputText
          iconSrc={closed}
          placeholder={'Contraseña'}
        />
        <ButtonLogin>Iniciar sesion</ButtonLogin>
        <ARestablecer href="#">Restablecer contraseña</ARestablecer>
        <PCuenta>¿No tienes una cuenta?</PCuenta>
        <ARegistrate href="#">Registrate aqui</ARegistrate>

       
      </Content>

    </>
  )
}

export default Login