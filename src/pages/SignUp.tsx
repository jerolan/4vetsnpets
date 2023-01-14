import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { UserAuth } from "../context/AuthContext";
import { AiOutlineUser } from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as Yup from "yup";
import Header from "../components/Header";

const FormSchema = Yup.object().shape({
  username: Yup.string().required("This field is required"),
  email: Yup.string().required("This field is required").email(),
  password: Yup.string().required("This field is required").min(8)
});


function SignUp() {
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: handleSubmit,
    validationSchema: FormSchema
  });

  async function handleSubmit(values: any) {
    const regexValidation = /^[a-zA-Z0-9_.+-]+@vet.com/;
    const rol = regexValidation.test(formik.values.email)
      ? "admin"
      : "user";
    try {
      await createUser(values.email, values.password, rol);
      navigate("/home");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <Header />
      <div className="signin-container">
        <div className="signin-container__img">
          <div className="img-spot"></div>
          <img src="src/assets/img/login-dog.png" alt="Golden retriever" />
        </div>
        <div className="signin-container__form">
          <form onSubmit={formik.handleSubmit} className="signin-form">
            <h2>Sign up</h2>
            <div className="signin-form__content">
              <div className="group-input">
                <AiOutlineUser className="form-icon" />
                <input
                  id="username"
                  type="text"
                  placeholder="Username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="group-input">
                <MdIcons.MdOutlineEmail className="form-icon" />
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="group-input">
                <MdIcons.MdLockOutline className="form-icon" />
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="signin-form__footer">
              <button type="submit" className="form-btn">
                Sign up
              </button>
              <p>
                Do you have an account?{" "}
                <Link to="/signin" className="form-link">
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
