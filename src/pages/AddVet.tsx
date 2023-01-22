import { useFormik } from "formik";
import { CRUD } from "../context/CRUDContext";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

// Validation schema for form fields
const FormSchema = Yup.object().shape({
  vetid: Yup.string().required(),
  name: Yup.string().required("This field is required"),
  lastname: Yup.string().required("This field is required"),
  job: Yup.string().required("This field is required"),
  availability: Yup.boolean().required("This field is required"),
});

function AddVet() {
  const { crudCreate } = CRUD();
  const { user } = UserAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      vetid: "",
      name: "",
      lastname: "",
      job: "",
      availability: true,
    },
    onSubmit: handleSubmit,
    validationSchema: FormSchema,
  });

  async function handleSubmit(values: any) {
    const vetData = {
      id: values.vetid,
      name: values.name,
      lastName: values.lastname,
      job: values.job,
      availability: values.availability,
    };

    const petData = {
      id: 0,
      name: "",
      age: 0,
      type: "",
      size: "",
      breed: "",
      weight: "",
    };

    crudCreate("vets", user.email, vetData, petData);
    navigate('/4vetsnpets/vets');
  }

  return (
    <>
      <div className="add-container">
        <div className="add-container__form">
          <form onSubmit={formik.handleSubmit} className="add-form">
            <h2>Add Vet</h2>
            <div className="add-form__content">
              <input
                id="vetid"
                type="string"
                placeholder="ID"
                value={formik.values.vetid}
                onChange={formik.handleChange}
              />
              <input
                id="name"
                type="string"
                placeholder="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />

              <input
                id="lastname"
                type="string"
                placeholder="Last name"
                value={formik.values.lastname}
                onChange={formik.handleChange}
              />

              <input
                id="job"
                type="string"
                placeholder="Job"
                value={formik.values.job}
                onChange={formik.handleChange}
              />
            </div>

            <div className="add-form__footer">
              <button type="submit" className="add-form-btn">
                Add Vet
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddVet;
