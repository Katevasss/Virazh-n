import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Details {
  id: number;
  name: string;
  code: string;
  availability: number;
  price: number;
  extra_code: string;
  system_code: string;
}

const DetailsTable: React.FC = () => {
  const [details, setDetails] = useState<Details[]>([]);

  const fetchData = () => {
    axios
      .get('http://localhost:5000/details')
      .then((response) => {
        setDetails(response.data);
        console.log('123', response.data);
      })
      .catch((error) => {
        console.error('Error fetching details', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Details Table</h1>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Наименование</th>
            <th>Код</th>
            <th>Доп. код</th>
            <th>Доступность товара</th>
            <th>Системный код</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {details.map((detail) => (
            <tr key={detail.id}>
              <td>{detail.id}</td>
              <td>{detail.name}</td>
              <td>{detail.code}</td>
              <td>{detail.extra_code}</td>
              <td>{detail.availability}</td>
              <td>{detail.system_code}</td>
              <td>{detail.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailsTable;
