import styles from './Menu.module.scss';
import cn from 'classnames';
import { memo, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface MenuItem {
  title: string;
  id: string;
  icon: string;
}

const menuItems: MenuItem[] = [
  { title: 'Информация', id: 'info', icon: 'icon_1' },
  { title: 'Каталог', id: 'catalogue', icon: 'icon_2' },
  { title: 'Контакты', id: 'contacts', icon: 'icon_3' },
  { title: 'Запрос по VIN', id: 'requiest', icon: 'icon_4' },
];

const Menu = (): JSX.Element => {

  const navigate = useNavigate();
  const location = useLocation();

  const MenuLinks = useMemo(
    () =>
      menuItems.map(({ title, icon, id }: MenuItem) => (
        <li
          className={cn(styles.item, {
            [styles['item-active']]: location.pathname.match(id),
          })}
          onClick={() => navigate(id)}
          key={id}
        >
          <div className={styles[icon]} />
          {title}
        </li>
      )),
    [location.pathname, navigate]
  );

  return <ul className={styles.menu}>{MenuLinks}</ul>;
};

export default memo(Menu);
