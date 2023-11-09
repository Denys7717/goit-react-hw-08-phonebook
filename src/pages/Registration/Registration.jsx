import FormRegistration from 'components/Forms/FormRegistration/FormRegistration';
import { useDispatch } from 'react-redux';
import { registrationThunk } from 'store/auth/authThunks';

const Registration = () => {
  const dispatch = useDispatch();
  const registration = body => {
    dispatch(registrationThunk(body));
  };
  return <FormRegistration registration={registration} />;
};

export default Registration;
