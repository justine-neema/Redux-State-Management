import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import { login, logout } from "./store/actions/authActions";
import type { AppDispatch, RootState } from "./store/store";

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>React + Redux + TypeScript</h1>

      <div>
        <p>{isAuthenticated ? `Welcome, ${user}!` : "Please log in."}</p>
        {isAuthenticated ? (
          <button onClick={() => dispatch(logout())}>Logout</button>
        ) : (
          <button onClick={() => dispatch(login("Neema"))}>Login</button>
        )}
      </div>

      <Counter />
    </div>
  );
}

export default App;