import styles from './FormLayout.module.scss';
import { Outlet } from 'react-router-dom';

const FormLayout = (): JSX.Element => {
  return (
    <div className={styles.layout}>
      <div className={styles.title}>
        <div className={styles.icon_logo} />
        Вираж-Н
      </div>
      <Outlet />
    </div>
  );
};

export default FormLayout;
