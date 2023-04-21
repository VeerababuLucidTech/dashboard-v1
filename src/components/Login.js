import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import login from "../login.JPG";

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(5, "Password must be at least 5 characters"),
});

function Login(props) {
  return (
    <div>
      <div className="container d-flex">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img src={login} alt="Login Page Image" class="login-img" />
          </div>
          <div className="col-md-6  col-sm-12">
            <div className="">
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
                  <div className="login">
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
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </p>
                        <div className="d-flex pt-1">
                          <input
                            className="checkbox"
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                            value="checkbox"
                          />
                          <label className="ps-1">Remember Me</label>
                          <a className="forgetPassword" href="#">
                            Forgot Password
                          </a>
                        </div>

                        <button className="mt-3" type="submit">
                          SIGN IN
                        </button>
                        <p className="pt-2">
                          Don't Have an Accont ? <strong>Create New</strong>
                        </p>
                      </form>
                    </div>
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
