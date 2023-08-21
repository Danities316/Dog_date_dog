import React, {useState} from "react";
import {useDispatch} from "react-redux";
import "../Register/signin.scss";
import {createDog} from "../../features/dogs/dogSlice";

export default function DogsForm() {
  const [formData, setFormData] = useState({
    DogType: "",
    DateOfBirth: "",
    DogDescription: "",
    Sex: "",
    DogBread: "",
    petname: "",
    photo: "",
  });

  const {DogType, DateOfBirth, DogDescription, Sex, DogBread, petname, photo} =
    formData;

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createDog(formData));
    // Clear the form
    setFormData("");
  };
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="bold-line"></div>
      <div className="container">
        <div className="window">
          <div className="overlay"></div>
          <div className="content">
            <div className="welcome">Register Your Dog</div>
            <div className="subtitle">
              Let the dogs share love within themselves - Give them opportunity
              to love there kind
            </div>
            <form action="POST">
              <div className="input-fields">
                <input
                  type="text"
                  name="petname"
                  placeholder="Dog Petname"
                  className="input-line full-width"
                  onChange={onChange}
                ></input>
                <input
                  type="text"
                  name="DogType"
                  placeholder="Dog Type"
                  className="input-line full-width"
                  onChange={onChange}
                ></input>
                <input
                  type="text"
                  name="DogBread"
                  placeholder="Dog Bread"
                  className="input-line full-width"
                  onChange={onChange}
                ></input>
                <input
                  type="text"
                  name="DogDescription"
                  placeholder="Briefly Descript Your Dog"
                  className="input-line full-width"
                  onChange={onChange}
                ></input>
                <input
                  type="date"
                  name="DogDateOfBirth"
                  placeholder="Your Dog Date of Birth"
                  className="input-line full-width"
                  onChange={onChange}
                ></input>
                <input
                  type="file"
                  name="photo"
                  placeholder="Dog Photo"
                  className="input-line full-width"
                  onChange={onChange}
                ></input>
                <div>
                  <table className="input-line full-width">
                    <tbody>
                      <tr>
                        <td>
                          <input
                            type="radio"
                            name="Sex"
                            id="female"
                            value="female"
                            onChange={onChange}
                          />
                        </td>
                        <td>Female</td>
                        <td>
                          <input
                            type="radio"
                            name="Sex"
                            id="male"
                            value="male"
                            onChange={onChange}
                          />
                        </td>
                        <td>Male</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <button className="ghost-round full-width" onClick={onSubmit}>
                  Add Your Dog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
