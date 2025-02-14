import { Link } from "react-router-dom";
import useAuthStore from "../pages/authStore";

function Navbar() {
  const { user, logout } = useAuthStore();

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {user ? (
          <>
            <li>{user.username}</li>
            <li><button onClick={logout} id="logout" >Logout</button></li>
          </>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
