import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setformData] = useState({});
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);

      const res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);

      if (data.success == false) {
        seterror(true);
        return;
      }
      seterror(false);
    } catch (error) {
      setloading(true);
      seterror(true);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-70">
          {loading ? "Loading..." : "Signup"}
        </button>
      </form>
      <div className="flex gap-3 mt-5">
        <p>Have an account?</p>
        <Link to="/login">
          <span className="text-blue-500">Sign In</span>
        </Link>
      </div>
      {console.log(error)}
      <p className="text-red-700 mt-5">{error && "Something Went Wrong"}</p>
    </div>
  );
};

export default SignUp;
