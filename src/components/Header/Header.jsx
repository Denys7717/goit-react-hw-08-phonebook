import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { authSelector } from '../../store/auth/authSelector';
import { logoutThunk } from 'store/auth/authThunks';
import { deleteToken } from '../../api/auth';
import { profileSelector } from '../../store/auth/authSelector';

const Header = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(authSelector);
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);

  const handleClick = () => {
    if (isAuth) {
      dispatch(logoutThunk());
      deleteToken();
    } else navigate('/login');
  };

  return (
    <nav className="navbar bg-dark mb-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand mb-0 h1 text-success" to="/">
          Home
        </NavLink>
        <Link className=" mb-0 mx-3 h3 text-white" to="contacts">
          Contacts
        </Link>
        <div className="ms-5">
          <NavLink
            className="navbar-brand mb-0 h1 text-success"
            to={isAuth ? '/' : 'Registration'}
          >
            <button className="btn btn-outline-success ms-5">
              {isAuth ? profile?.name : 'Registration'}
            </button>
          </NavLink>
          <button
            onClick={handleClick}
            className="btn btn-outline-success ms-5"
          >
            {isAuth ? 'Log Out' : 'Login'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
