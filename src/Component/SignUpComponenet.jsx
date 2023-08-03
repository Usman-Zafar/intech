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
import axios from "axios";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Too Short!").required("Required"),
});

export const ValidationSchemaExample = () => (
  <div>
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
        onSubmit={(values) => {
          const formData = new FormData();
          formData.append("file", values.avatar); // Append the image file to the form data
          formData.append("email", values.email);
          formData.append("password", values.password);
          formData.append("firstname", values.firstName);
          formData.append("lastname", values.lastName);

          axios
            .post("http://localhost:4000/seller/signup", formData)
            .then((response) => {
              console.log("Response from server:", response.data);
            })
            .catch((error) => {
              console.error("server error");
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
                errors.firstName &&
                touched.firstName &&
                String(errors.firstName)
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
            {/* <TextField
              name="image"
              variant="standard"
              type="file"
              error={Boolean(errors.image && touched.image)}
              helperText={errors.image && touched.image && String(errors.image)}
              onChange={(event) => {
                setFieldValue("image", event.target.files[0]);
              }}
            /> */}
            <input
              type="file"
              name="file"
              onChange={(e) => setFieldValue("avatar", e.target.files[0])}
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
    <div className="SignUp-Image">
      <div className="Signupimage-text"></div>
    </div>
  </div>
);
