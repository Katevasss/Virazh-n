import React from 'react';
import styles from './Schedule.module.scss';

interface Schedule {
  day: string;
  time: string;
}

interface ScheduleTableProps {
  schedule: Schedule[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ schedule }) => {
  return (
    <>
      <h2 className={styles.gap}>Расписание работы:</h2>
      <table className={styles.layout}>
        <thead>
          <tr className={styles.row}>
            <th>День</th>
            <th>Время</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index} className={styles.time}>
              <td>{item.day}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ScheduleTable;
