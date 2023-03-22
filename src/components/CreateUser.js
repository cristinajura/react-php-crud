import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    axios
      .post("http://localhost:8080/php/user/save", inputs)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      });
  };
  return (
    <div>
      <h3>Create user</h3>
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="formLine">
          <label htmlFor="name">
            <strong>Name * </strong>
          </label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className="formLine">
          <label htmlFor="email">
            <strong>Email * </strong>
          </label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div className="formLine">
          <label htmlFor="mobile">
            <strong>Mobile </strong>
          </label>
          <input type="number" name="mobile" onChange={handleChange} />
        </div>
        <button className="formBtn">Save</button>
      </form>
    </div>
  );
};

export default CreateUser;
