import { type FC, memo } from 'react';

import styles from './Information.module.scss';
import Map from 'src/components/Map';
import ScheduleTable from 'src/components/Schedule';

const Information: FC = () => {
  const scheduleData = [
    { day: 'Понедельник', time: '09:00–19:00' },
    { day: 'Вторник', time: '09:00–19:00' },
    { day: 'Среда', time: '09:00–19:00' },
    { day: 'Четверг', time: '09:00–19:00' },
    { day: 'Пятница', time: '09:00–19:00' },
    { day: 'СБ', time: 'Выходной' },
    { day: 'ВС', time: 'Выходной' },
  ];
  return (
    <div className={styles.info}>
      <div className={styles.row}>
        <div className={styles.title}>
          <h2>Адрес:</h2>
          <h2>Телефон:</h2>
        </div>

        <div className={styles.title}>
          <h2>ул. Великая, 22, Великий Новгород, Новгородская обл., 173003</h2>
          <h2>88162332025</h2>
        </div>
      </div>

      <Map />
      <ScheduleTable schedule={scheduleData} />
    </div>
  );
};
export default memo(Information);
