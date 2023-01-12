import Header from "../components/Header";
import * as MdIcons from "react-icons/md";
import { useFormik } from "formik";

function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => console.log(values),
  });

  return (
    <>
      <Header></Header>
      <div className="signin-container">
        <div className="signin-container__img">
          <div className="img-spot"></div>
          <img src="src/assets/img/login-dog.png" alt="Golden retriever" />
        </div>
        <div className="signin-container__form">
          <form onSubmit={formik.handleSubmit} className="signin-form">
            <h2>Sign in</h2>
            <div className="signin-form__content">
              <div className="group-input">
                <MdIcons.MdOutlineEmail />
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="group-input">
                <MdIcons.MdLockOutline />
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
