
import React, { useEffect, useState, useContext } from "react";
import {
  Background,
  Content,
  H1,
  H2,
  Image,
  P,
  Section,
  ARestablecer,
  PCuenta,
  ARegistrate,
  Message,
  ButtonLogin
} from "./StyleLogin";
import icono from "../../assets/iconoPizza.png";
import { InputText } from "../component/InputText";
import user from "../../assets/user.svg";
import closed from "../../assets/lock-closed.svg";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { get } from "../../service/apiPizza";
<<<<<<< HEAD
import Swal from "sweetalert2";
=======
import { UserContext } from "../context/UserContext";
>>>>>>> 4dbe8ef9984cd1aab8771a8b7f33be1728a15a45


const validationSchema = Yup.object().shape({
  user: Yup.string()
    .min(3, "El nombre de usuario debe tener mínimo 3 caracteres")
    .max(15, "El nombre de usuario debe tener máximo 15 caracteres")
    .required("El nombre de usuario es obligatorio"),
  password: Yup.number()
    .min(3, "La contraseña debe tener mínimo 3 caracteres")
    .required("La contraseña es obligatoria"),
});

const initialValues = {
  user: "",
  password: "",
};

const Login = () => {
  const [links, setLinks] = useState([]);
  const { setUser } = useContext(UserContext);

   const getUsers = async () => {
    const response = await get("users");
    console.log(response);
    setLinks(response);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const navigate = useNavigate();
 


  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { setSubmitting, setFieldError }) => {
      try {
        // Validar si el usuario y la contraseña existen en la data
        const userExists = links.find(
          (link) => link.user === values.user && link.password === values.password
        );
    
        if (userExists) {
<<<<<<< HEAD
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Inicio de sesion exitoso',
            showConfirmButton: false,
            timer: 1500
          })
          // Usuario válido, redirigir a la siguiente página con los datos del usuario
          navigate("/home", { state: { user: userExists } });
=======
          // Establecer los datos del usuario en el contexto
          setUser(userExists);
    
          // Usuario válido, redirigir a la siguiente página
          navigate("/home");
>>>>>>> 4dbe8ef9984cd1aab8771a8b7f33be1728a15a45
        } else {
          // Usuario no válido, mostrar mensaje de error
          setFieldError("user", "Usuario o contraseña incorrectos");
        }
      } catch (error) {
        console.error(error);
      }
    
      setSubmitting(false);
    },
  });

  return (
    <>
      <Background />
      <Content>
        <Section>
          <Image src={icono} alt="icono" />
        </Section>
        <H1>piSassScript</H1>
        <H2>Inicia sesión en tu cuenta</H2>
        <P>
          Disfruta de la mejor Pizza creada para las personas amantes del código
        </P>
        <form onSubmit={formik.handleSubmit}>
          <InputText
            type="text"
            iconSrc={user}
            placeholder={"Usuario"}
            {...formik.getFieldProps("user")}
          />
          {formik.touched.user && formik.errors.user && (
            <Message>{formik.errors.user}</Message>
          )}
          <InputText
            type="password"
            iconSrc={closed}
            placeholder={"Contraseña"}
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <Message>{formik.errors.password}</Message>
          )}
          <ButtonLogin type="submit" disabled={formik.isSubmitting}>
            Iniciar sesión
          </ButtonLogin>
        </form>

        <ARestablecer href="#">Restablecer contraseña</ARestablecer>
        <PCuenta>¿No tienes una cuenta?</PCuenta>
        <Link to={'/newRecord'}>
        <ARegistrate href="#">Regístrate aquí</ARegistrate>
        </Link>
      </Content>
    </>
  );
};

export default Login;

