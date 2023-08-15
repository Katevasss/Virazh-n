import React, { useState, useEffect } from 'react';
import styles from './Pagination.module.scss';

interface Details {
  id: number;
  name: string;
  code: string;
  availability: number;
  price: number;
  extra_code: string;
  system_code: string;
}

const Pagination = () => {
  const [details, setDetails] = useState<Details[]>([]); // Состояние для хранения записей
  const [currentPage, setCurrentPage] = useState(1); // Текущая страница

  useEffect(() => {
    fetch(`http://localhost:5000/details?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error(error));
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className={styles.layout}>
      <h1>Каталог автозапчастей</h1>
      <input className={styles.search} type="text" placeholder="Поиск..." />
      <table>
        <thead>
          <tr className={styles.bottomLine}>
            <th>№</th>
            <th>Наименование</th>
            <th>Код</th>
            <th>Доступность товара</th>
            <th>Системный код</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.id}>
              <td className={styles.number}>{detail.id}</td>
              <td className={styles.textContainer}>{detail.name}</td>
              <td>{detail.code}</td>
              <td>{detail.availability}</td>
              <td>{detail.system_code}</td>
              <td>{detail.price}</td>
              <td>
                <input className={styles.quantity} id="quantity" type="number" min={0} max={10} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.buttonsLayout}>
        {currentPage > 1 && (
          // Кнопка для перехода на предыдущую страницу
          <button onClick={goToPreviousPage}>Предыдущая страница</button>
        )}
        <button onClick={goToNextPage}>Следующая страница</button>
        <button>Забронировать выбранные детали</button>
      </div>
    </div>
  );
};

export default Pagination;
