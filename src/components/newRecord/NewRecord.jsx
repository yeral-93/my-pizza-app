import React from "react";
import { Content, Image, Section, Background } from "../login/StyleLogin";
import icono from "../../assets/iconoPizza.png";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Button,
  ErrorText,
  FormContainer,
  Input,
  Label,
} from "./StyleNewRecord";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  apellido: Yup.string().required("El apellido es requerido"),
  avatar: Yup.string()
    .url("El enlace del avatar no es válido")
    .required("El avatar es requerido"),
  user: Yup.string().required("El usuario es requerido"),
  password: Yup.string().required("La contraseña es requerida"),
});

const initialValues = {
  name: "",
  apellido: "",
  avatar: "",
  user: "",
  password: "",
};

const RegistroNuevo = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        // Aquí enviamos los datos al endpoint JSON utilizando axios
        await axios.post(" http://localhost:3000/users", values);
        Swal.fire("Hecho!", "Se ha registrado exitosamente!", "success");
        // Redirigimos al usuario a la página de confirmación
        navigate("/");
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Background />
      <Content>
        <Section>
          <Image src={icono} alt="icono" />
        </Section>
        <FormContainer>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <Label htmlFor="name">Nombre:</Label>
              <Input
                type="text"
                id="name"
                placeholder="Nombre"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name && (
                <ErrorText>{formik.errors.name}</ErrorText>
              )}
            </div>
            <div>
              <Label htmlFor="apellido">Apellido:</Label>
              <Input
                type="text"
                id="apellido"
                placeholder="Apellido"
                {...formik.getFieldProps("apellido")}
              />
              {formik.touched.apellido && formik.errors.apellido && (
                <ErrorText>{formik.errors.apellido}</ErrorText>
              )}
            </div>
            <div>
              <Label htmlFor="avatar">Avatar:</Label>
              <Input
                type="text"
                id="avatar"
                placeholder="Avatar"
                {...formik.getFieldProps("avatar")}
              />
              {formik.touched.avatar && formik.errors.avatar && (
                <ErrorText>{formik.errors.avatar}</ErrorText>
              )}
            </div>
            <div>
              <Label htmlFor="user">Usuario:</Label>
              <Input
                type="text"
                id="user"
                placeholder="Usuario"
                {...formik.getFieldProps("user")}
              />

              {formik.touched.user && formik.errors.user && (
                <ErrorText>{formik.errors.user}</ErrorText>
              )}
            </div>
            <div>
              <Label htmlFor="password">Contraseña:</Label>
              <Input
                type="password"
                id="password"
                placeholder="Contraseña"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <ErrorText>{formik.errors.password}</ErrorText>
              )}
            </div>
            <Button type="submit" disabled={formik.isSubmitting}>
              Registrarse
            </Button>
          </form>
        </FormContainer>
      </Content>
    </>
  );
};

export default RegistroNuevo;
