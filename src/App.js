import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CreateUser from "./components/CreateUser";
import ListUser from "./components/ListUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <h1>Users List</h1>
      <BrowserRouter>
        <nav>
          <ul className="navul">
            <li>
              <Link className="navli" to="/">
                List Users
              </Link>
            </li>
            <li>
              <Link className="navli" to="user/create">
                Create User
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
