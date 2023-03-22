import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "@mui/material";

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [deleteEntry, setDeleteEntry] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios.get("http://localhost:8080/php/users").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:8080/php/users/${id}/delete`)
      .then((response) => {
        console.log(response.data);
        setDeleteEntry(false);
        getUsers();
      });
  };

  return (
    <div>
      <h3>List Users</h3>
      <table
        className="table"
        style={{ borderCollapse: "collapse" }}
        cellSpacing="10"
      >
        <tbody>
          <tr>
            <th className="thtd">#</th>
            <th className="thtd">Name</th>
            <th className="thtd">Email</th>
            <th className="thtd">Mobile</th>
            <th className="thtd">Actions</th>
          </tr>
          {users.map((user, key) => (
            <tr key={key}>
              <td className="thtd">{user.id}</td>
              <td className="thtd">{user.name}</td>
              <td className="thtd">{user.email}</td>
              <td className="thtd">{user.mobile}</td>
              <td className="thtd">
                <Link
                  to={`user/${user.id}/edit`}
                  style={{
                    marginRight: "20px",
                    textDecoration: "none",
                    color: "rgb(68, 68, 172)",
                  }}
                >
                  Edit
                </Link>
                <button
                  style={{
                    color: "red",
                    cursor: "pointer",
                    border: "1px solid lightgray",
                    padding: "5px",
                  }}
                  onClick={() => setDeleteEntry(true)}
                >
                  Delete
                </button>
              </td>
              {deleteEntry ? (
                <Alert
                  severity="error"
                  icon={false}
                  className="alert"
                  style={{
                    background: "#fee",
                    boxShadow: "1px 1px 8px 1px lightgray",
                  }}
                >
                  <div className="alertText">
                    Do you really want to delete the user?
                  </div>
                  <button
                    className="alertBtn"
                    onClick={() => deleteUser(user.id)}
                  >
                    Yes
                  </button>
                  <button
                    className="alertBtn"
                    onClick={() => setDeleteEntry(false)}
                  >
                    No
                  </button>
                </Alert>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ListUser;
