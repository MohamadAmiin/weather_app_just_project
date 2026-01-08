import { Link, useNavigate } from 'react-router-dom';

function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        Weather App
      </Link>

      <div className="navbar-user">
        {user ? (
          <>
            <span>Hello, {user.name}</span>
            <button className="btn-logout" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn-logout">Login</Link>
            <Link to="/register" className="btn-logout">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
