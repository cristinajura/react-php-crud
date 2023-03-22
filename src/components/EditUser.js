import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    axios.get(`http://localhost:8080/php/user/${id}`).then((response) => {
      console.log(response.data);
      setInputs(response.data);
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8080/php/user/${id}/edit`, inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/");
      });
  };

  return (
    <div>
      <h3>Edit user</h3>
      <form className="formContainer" onSubmit={handleSubmit}>
        <div className="formLine">
          <label htmlFor="name">
            <strong>Name * </strong>
          </label>
          <input
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </div>
        <div className="formLine">
          <label htmlFor="email">
            <strong>Email * </strong>
          </label>
          <input
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div className="formLine">
          <label htmlFor="mobile">
            <strong>Mobile </strong>
          </label>
          <input
            type="number"
            name="mobile"
            value={inputs.mobile}
            onChange={handleChange}
          />
        </div>
        <button className="formBtn">Save</button>
      </form>
    </div>
  );
};

export default EditUser;
