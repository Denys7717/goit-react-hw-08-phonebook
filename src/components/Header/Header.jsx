import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { authSelector } from '../../store/auth/selector';
import { logoutThunk } from 'store/auth/thunks';
import { deleteToken } from '../../api/auth';

const Header = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(authSelector);
  const dispatch = useDispatch();

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
