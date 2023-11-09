import { useSelector } from 'react-redux';
import { authSelector } from 'store/auth/authSelector';
import { profileSelector } from 'store/auth/authSelector';

const Home = () => {
  const isAuth = useSelector(authSelector);
  const profile = useSelector(profileSelector);

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
        {isAuth
          ? `Hello ${profile.name}`
          : 'Your phone book might be here. Try it!'}
      </div>
    </>
  );
};

export default Home;
