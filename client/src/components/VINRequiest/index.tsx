import { type FC, memo } from 'react';

import styles from './VINRequiest.module.scss';
import DropdownLists from '../DropdownLists';

const VINRequiest: FC = () => {
  return (
    <>
      <div className={styles.inputs}>
        <DropdownLists />

        <input placeholder="VIN номер"></input>
        <textarea placeholder="Дополнительная информация"></textarea>
      </div>
      <button className={styles.button}>Отправить запрос</button>
    </>
  );
};
export default memo(VINRequiest);
