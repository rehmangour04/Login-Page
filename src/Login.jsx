/** @format */

import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "user" && password === "password") {
      setMessage(`Welcome, ${user}!`);
    } else {
      setMessage("Invalid username or password");
    }
  };
  return (
    <>
      <div>
        <h1>Login Page</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="username"
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          ></input>
        </div>
        <button>Submit</button>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default Login;
