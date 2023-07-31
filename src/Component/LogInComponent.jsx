import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});
export const LogInValidation = () => (
  <div style={{ padding: "50px" }}>
    <h1>Login</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="outlined"
            error={Boolean(errors.email && touched.email)}
            helperText={errors.email && touched.email && String(errors.email)}
            onChange={(event) => {
              setFieldValue("email", event.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            id="password"
            name="password"
            label="Password"
            variant="outlined"
            error={Boolean(errors.password && touched.password)}
            helperText={
              errors.password && touched.password && String(errors.password)
            }
            onChange={(event) => {
              setFieldValue("password", event.target.value);
            }}
          />
          <br />
          <br />
          <Button variant="contained" type="submit" color="success">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);
