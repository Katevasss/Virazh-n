import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      // Отправка данных на сервер
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      // Обработка ответа от сервера
      if (response.ok) {
        console.log('Регистрация успешна');
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error('Ошибка при регистрации', error);
    }
  };

  return (
    <>
      <h2>Вход в личный кабинет</h2>
      <form className={styles.formStyle} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.row}>
          <label className={styles.label}>Имя пользователя</label>
          <input type="text" {...register('username', { required: true })} />
          {errors.username && <span>Поле обязательно для заполнения</span>}
        </div>

        <div className={styles.row}>
          <label className={styles.label}>Электронная почта</label>
          <input type="email" {...register('email', { required: true })} />
          {errors.email && <span>Поле обязательно для заполнения</span>}
        </div>

        <div className={styles.row}>
          <label className={styles.label}>Пароль</label>
          <input type="password" {...register('password', { required: true })} />
          {errors.password && <span>Поле обязательно для заполнения</span>}
        </div>

        <button type="submit">Войти</button>
      </form>
    </>
  );
};

export default LoginPage;
