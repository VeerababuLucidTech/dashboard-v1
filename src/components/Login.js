import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import login from "../login.JPG";

// import "./styles.css";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

function Login(props) {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src={login} alt="Login Page Image" class="login-img" />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="login">
              <Formik
                validationSchema={schema}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                  alert(JSON.stringify(values));
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <div className="form">
                    <form noValidate onSubmit={handleSubmit}>
                      <span>EMS Login</span>
                      <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email "
                        className="form-control inp_text"
                        id="email"
                      />
                      <p className="error">
                        {errors.email && touched.email && errors.email}
                      </p>
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Password"
                        className="form-control"
                      />
                      <p className="error">
                        {errors.password && touched.password && errors.password}
                      </p>
                      <button type="submit">SIGN IN</button>
                    </form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
