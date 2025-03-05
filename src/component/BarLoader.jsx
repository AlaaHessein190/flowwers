
import BarLoader from 'react-spinners/BarLoader';

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <BarLoader color="#6A6E49" width={200} height={4} />
    </div>
  );
};

export default LoadingScreen;
