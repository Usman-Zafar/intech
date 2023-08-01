// import React from "react";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import { TextField, Button } from "@mui/material";
// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string().required("Required"),
//   lastName: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   password: Yup.string().min(8, "Too Short!").required("Required"),
// });
// export const ValidationSchemaExample = () => (
//   <div style={{ padding: "50px" }}>
//     <h1>Signup</h1>
//     <Formik
//       initialValues={{
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//       }}
//       validationSchema={SignupSchema}
//       onSubmit={(values) => {
//         console.log(values);
//       }}
//     >
//       {({ errors, touched, setFieldValue }) => (
//         <Form>
//           <TextField
//             name="firstName"
//             label="First Name"
//             variant="outlined"
//             error={Boolean(errors.firstName && touched.firstName)}
//             helperText={
//               errors.firstName && touched.firstName && String(errors.firstName)
//             }
//             onChange={(event) => {
//               setFieldValue("firstName", event.target.value);
//             }}
//           />
//           <br />
//           <br />
//           <TextField
//             name="lastName"
//             label="Last Name"
//             variant="outlined"
//             error={Boolean(errors.lastName && touched.lastName)}
//             helperText={
//               errors.lastName && touched.lastName && String(errors.lastName)
//             }
//             onChange={(event) => {
//               setFieldValue("lastName", event.target.value);
//             }}
//           />
//           <br />
//           <br />
//           <TextField
//             id="email"
//             name="email"
//             label="Email"
//             variant="outlined"
//             error={Boolean(errors.email && touched.email)}
//             helperText={errors.email && touched.email && String(errors.email)}
//             onChange={(event) => {
//               setFieldValue("email", event.target.value);
//             }}
//           />
//           <br />
//           <br />
//           <TextField
//             name="password"
//             label="Password"
//             variant="outlined"
//             error={Boolean(errors.password && touched.password)}
//             helperText={
//               errors.password && touched.password && String(errors.password)
//             }
//             onChange={(event) => {
//               setFieldValue("password", event.target.value);
//             }}
//           />
//           <br />
//           <br />
//           <Button variant="contained" type="submit" color="success">
//             Submit
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextField, Button } from "@mui/material";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
});

export const ValidationSchemaExample = () => (
  <div style={{ padding: "50px" }}>
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        // Send signup data to the backend API
        fetch("http://localhost:5000/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data); // Response from the backend server

            // Handle the response data
            const { token } = data;

            if (token) {
              // Save the token to local storage
              localStorage.setItem("jwtToken", token);
              console.log("JWT token saved to local storage.");
            }

            // Display a success message or handle navigation to the next page
          })
          .catch((error) => {
            console.error("Error sending signup data:", error);
            // Handle the error as needed (e.g., display error message)
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <TextField
            name="firstName"
            label="First Name"
            variant="outlined"
            error={Boolean(errors.firstName && touched.firstName)}
            helperText={
              errors.firstName && touched.firstName && String(errors.firstName)
            }
            onChange={(event) => {
              setFieldValue("firstName", event.target.value);
            }}
          />
          <br />
          <br />
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            error={Boolean(errors.lastName && touched.lastName)}
            helperText={
              errors.lastName && touched.lastName && String(errors.lastName)
            }
            onChange={(event) => {
              setFieldValue("lastName", event.target.value);
            }}
          />
          <br />
          <br />
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
            name="password"
            label="Password"
            variant="outlined"
            type="password"
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
