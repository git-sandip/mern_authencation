import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          {currentUser ? (
            <Link to="/profile">
              <img
                src={currentUser.profilePicture}
                className="h-7 w-7 rounded-full object-cover"
                alt="Profile Pic"
              />
            </Link>
          ) : (
            <Link to="/login">
              <li>Login</li>{" "}
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
