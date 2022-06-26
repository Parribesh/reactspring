import "./App.css";
import { createContext, useEffect, useReducer } from "react";
import CreateUser from "./routes/CreateUserRoute/CreateUser";
import { initialState, rootReducer } from "./store/reducer/reducer";
import ShowUser from "./routes/ShowUser/ShowUser";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className="app-root">
        <div className="app-createUser">
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
            <Link to="/login">LogOut</Link>
          </nav>

          <CreateUser />
        </div>
        <div className="app-showUsers">
          {/* Define a component that fetches and shows all the results */}
          <ShowUser />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
