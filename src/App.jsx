import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import TodoList from "./components/TodoList";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState(null);

  //Context is an alternative to passing information with props

  const contextValue = {
    user,
    setUser,
  };
  return (
    <div className="App">
      <UserContext.Provider value={contextValue}>
        <h1>Codelicious TODO</h1>

        {user && (
          <>
            <p>
              Welcome, {user.name}
              <a
                href="#"
                onClick={() => {
                  setUser(null);
                }}
              >
                Log out
              </a>
            </p>
            <hr />
            <TodoList user={user} />
          </>
        )}
        {!user && <Login />}
      </UserContext.Provider>
    </div>
  );
}

export default App;
