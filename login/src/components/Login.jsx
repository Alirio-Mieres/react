import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import users from "../data/users";

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const user = users.find(
        (user) => user.username === username && user.password === password
    );
    
    if (!user) {
        alert("Invalid credentials");
        return;
    }

    navigate("/react/main");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="Username">Username:</label>
          <input
            type="text"
            placeholder="Username"
            id="Username"
            name="Username"
            autoFocus
            ref={usernameRef}
          />
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="Password"
            ref={passwordRef}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
