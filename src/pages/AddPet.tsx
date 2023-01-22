import { useFormik } from "formik";
import { CRUD } from "../context/CRUDContext";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

// Validation schema for form fields
const FormSchema = Yup.object().shape({
  petid: Yup.string().required(),
  petname: Yup.string().required("This field is required"),
  age: Yup.string().required("This field is required"),
  type: Yup.string().required("This field is required"),
  size: Yup.string().required("This field is required"),
  breed: Yup.string().required("This field is required"),
  weight: Yup.string().required("This field is required"),
});

function AddPet() {
  const { crudCreate } = CRUD();
  const { user } = UserAuth();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      petid: "",
      petname: "",
      age: "",
      type: "",
      size: "",
      breed: "",
      weight: "",
    },
    onSubmit: handleSubmit,
    validationSchema: FormSchema,
  });

  async function handleSubmit(values: any) {
    const vetData = {
      id: "",
      name: "",
      lastName: "",
      job: "",
      availability: false,
    };

    const petData = {
      id: values.petid,
      name: values.petname,
      age: values.age,
      type: "",
      size: "",
      breed: "",
      weight: "",
    };

    crudCreate("vets", user.email, vetData, petData);
    navigate("/4vetsnpets/vets");
  }

  return (
    <>
      <div className="add-container">
        <div className="add-container__form">
          <form onSubmit={formik.handleSubmit} className="add-form">
            <h2>Add Pet</h2>
            <div className="add-form__content">
              <input
                id="petid"
                type="text"
                placeholder="ID"
                value={formik.values.petid}
                onChange={formik.handleChange}
              />
              <input
                id="petname"
                type="string"
                placeholder="Name"
                value={formik.values.petname}
                onChange={formik.handleChange}
              />

              <input
                id="age"
                type="string"
                placeholder="Age"
                value={formik.values.age}
                onChange={formik.handleChange}
              />

              <input
                id="type"
                type="string"
                placeholder="Type"
                value={formik.values.type}
                onChange={formik.handleChange}
              />

              <input
                id="size"
                type="string"
                placeholder="Size"
                value={formik.values.size}
                onChange={formik.handleChange}
              />

              <input
                id="breed"
                type="string"
                placeholder="Breed"
                value={formik.values.breed}
                onChange={formik.handleChange}
              />

              <input
                id="weight"
                type="string"
                placeholder="Weight"
                value={formik.values.weight}
                onChange={formik.handleChange}
              />
            </div>

            <div className="add-form__footer">
              <button type="submit" className="add-form-btn">
                Add Pet
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddPet;
