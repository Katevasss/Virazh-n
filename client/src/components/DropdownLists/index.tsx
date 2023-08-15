import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './DropdownLists.module.scss';

interface Model {
  id: number;
  name: string;
}

interface Submodel {
  id: number;
  name: string;
}
interface ModelDate {
  id: number;
  year: string;
}

const DropdownLists: React.FC = () => {
  const [models, setModels] = useState<Model[]>([]);
  const [submodels, setSubmodels] = useState<Submodel[]>([]);
  const [modelDates, setModelDates] = useState<ModelDate[]>([]);

  const fetchData = () => {
    axios
      .get('http://localhost:5000/models')
      .then((response) => {
        setModels(response.data);
        console.log('123', response.data);
      })
      .catch((error) => {
        console.error('Error fetching modelss', error);
      });
  };
  const fetchSubData = () => {
    axios
      .get('http://localhost:5000/submodels')
      .then((response) => {
        setSubmodels(response.data);
        console.log('123', response.data);
      })
      .catch((error) => {
        console.error('Error fetching submodels', error);
      });
  };
  const fetchDateData = () => {
    axios
      .get('http://localhost:5000/modelyears')
      .then((response) => {
        setModelDates(response.data);
        console.log('123', response.data);
      })
      .catch((error) => {
        console.error('Error fetching submoDatesdels', error);
      });
  };

  useEffect(() => {
    fetchData();
    fetchSubData();
    fetchDateData();
  }, []);
  // Загрузите значения категорий из сервера и обновите состояние categories

  return (
    <div className={styles.layout}>
      <select>
        <option value="">Выберите марку</option>
        {models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>

      <select>
        <option value="">Выберите модель</option>
        {submodels.map((submodel) => (
          <option key={submodel.id} value={submodel.id}>
            {submodel.name}
          </option>
        ))}
      </select>

      <select>
        <option value="">Год выпуска</option>
        {modelDates.map((modelDate) => (
          <option key={modelDate.id} value={modelDate.id}>
            {modelDate.year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownLists;
