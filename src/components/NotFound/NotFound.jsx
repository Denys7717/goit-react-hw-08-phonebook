import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        Not Found
        <Link className="navbar-brand mb-0 h1 text-success" to="/">
          <button className="btn btn-outline-success ms-5">Home</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
