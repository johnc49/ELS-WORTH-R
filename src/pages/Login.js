import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto max-w-sm ">
      <form
        className="card flex flex-col text-center hover:shadow"
        onSubmit={handleSubmit}
      >
        <h3 className="font-bold text-center">Login</h3>

        <div>
          <label>Email:</label>
          <input
            type="email"
            className="px-1 py-1 m-1 border rounded"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            className="px-1 py-1 m-1 border rounded"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button>Login</button>
        <p>
          If you don't have an Account.{" "}
          <Link to="/login" className="text-blue-500">
            Sign up Here
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
