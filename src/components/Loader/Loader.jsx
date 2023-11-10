import { useSelector } from 'react-redux';
import { selectorAppState } from 'store/appState/appSelectors';

const Loader = () => {
  const { isLoading } = useSelector(selectorAppState);

  return (
    isLoading && (
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  );
};

export default Loader;
