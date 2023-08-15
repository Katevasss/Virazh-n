import React, { useState } from 'react';
import axios from 'axios';

const AddDetailsForm = () => {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [manufacturer, setManufacturer] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const data = {
        name,
        code,
        manufacturer,
      };

      await axios.post('/details', data);
      console.log('Данные успешно добавлены');

      // Сбросить значения полей формы после отправки
      setName('');
      setCode('');
      setManufacturer('');
    } catch (error) {
      console.error('Ошибка при добавлении данных', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Название:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="code">Код:</label>
        <input type="text" id="code" value={code} onChange={(e) => setCode(e.target.value)} />
      </div>
      <div>
        <label htmlFor="manufacturer">Производитель:</label>
        <input
          type="text"
          id="manufacturer"
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default AddDetailsForm;
