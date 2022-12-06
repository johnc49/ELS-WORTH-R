import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto max-w-sm ">
      <form
        className="card flex flex-col text-center hover:shadow"
        onSubmit={handleSubmit}
      >
        <h3 className="font-bold text-center">Sign up</h3>

        <div>
          {" "}
          <label>Name:</label>
          <input
            className="px-1 py-1 m-1 border rounded"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            className="px-1 py-1 m-1 border rounded"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="px-1 py-1 m-1 border rounded"
            type="password"
            placeholder="Create password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            className="px-1 py-1 m-1 border rounded"
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>

        <button className="btn text-primary border-primary border-2 hover:bg-primary hover:text-white transition ease-out duration-500">
          Sign up
        </button>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Login Here
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Signup;
