import "./App.css";
import Create from "./components/create/create";
import Read from "./components/read/read";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Update from "./components/update/update";
import Delete from "./components/delete/delete";

function App() {
  return (
    <Router>
      <div className="main">
        <div>
          <h3>React Crud Operations</h3>
          <ul
            className="ul-style"
            style={{
              display: "flex",
              gap: 10,
              listStyle: "none",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <li>
              <Link to={"/"}>create</Link>
            </li>
            <li>
              <Link to={"/read"}>read</Link>
            </li>
            <li>
              <Link to={"/update"}>update</Link>
            </li>
            <li>
              <Link to={"/delete"}>delete</Link>
            </li>
          </ul>
        </div>

        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route
            path="/read"
            element={
              <div style={{ marginTop: 20 }}>
                <Read />
              </div>
            }
          />
          <Route path="/update" element={<Update />} />
          <Route path="/delete" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
