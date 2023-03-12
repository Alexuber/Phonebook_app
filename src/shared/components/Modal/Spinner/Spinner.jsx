import { Watch, ThreeDots } from 'react-loader-spinner';
import styles from './Spinner.module.scss';

export const SpinnerClock = () => {
  return (
    <Watch
      height="100"
      width="100"
      radius="48"
      color="#ffffff"
      ariaLabel="watch-loading"
      wrapperStyle={{ justifyContent: 'center', marginTop: '200px' }}
      wrapperClassName={styles.spinnerClock}
      visible={true}
    />
  );
};

export const SpinnerDots = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#1976d2"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: 'center' }}
      wrapperClassName=""
      visible={true}
    />
  );
};
