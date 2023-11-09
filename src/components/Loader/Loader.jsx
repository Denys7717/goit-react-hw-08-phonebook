import { useSelector } from 'react-redux';
import { selectorAppState } from 'store/appState/appSelectors';

const Loader = () => {
  const { isLoading } = useSelector(selectorAppState);

  return (
    isLoading && (
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    )
  );
};

export default Loader;
