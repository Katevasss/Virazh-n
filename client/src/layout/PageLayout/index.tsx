import { Link, Outlet, useLocation } from 'react-router-dom';
import styles from './PageLayout.module.scss';
import { memo, useEffect, useMemo, useState } from 'react';
import Menu from 'src/components/Menu';
import useResize from 'src/helpers/helper';
import { tabletSize } from 'src/constants/size.constant';
import Burger from 'src/components/Burger';
import { AnimatePresence, motion } from 'framer-motion';
import cn from 'classnames';

const PageLayout = (): JSX.Element => {
  const size = useResize();

  const tablet = useMemo(() => size < tabletSize, [size]);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const location = useLocation();

  useEffect(() => setMenuIsOpen(false), [location.pathname]);
  return (
    <>
      <div className={styles.page}>
        <header className={styles.header}>
          <Link to="/main" className={styles.logo}>
            <div className={styles.icon_logo} />
            <div className={styles.column}>
              <h2 className={styles.logoName}>Вираж-Н</h2>
              <label className={styles.miniLogo}>Магазин автозапчастей для иномарок</label>
            </div>
          </Link>
          <>
            {!tablet ? (
              <div className={styles.headerLayout}>
                <Link to="/profile" className={styles.icon_login}></Link>
                <div className={styles.column}>
                  <Link to="/authorization/registration">Регистрация</Link>
                  <Link to="/authorization/login">Вход</Link>
                </div>
              </div>
            ) : (
              <div className={styles.mobileItems}>
                <Burger
                  active={menuIsOpen}
                  onClick={() => setMenuIsOpen((oldState) => !oldState)}
                />
                <Link to="/profile" className={styles.icon_login}></Link>
              </div>
            )}
          </>
        </header>

        <div className={styles.content}>
          <AnimatePresence>
            {(!tablet || menuIsOpen) && (
              <motion.aside className={cn(styles.aside)}>
                <div className={styles.asideContent}>
                  <nav className={styles.navigation}>
                    <Menu />
                  </nav>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>
          <main className={styles.main}>
            <Outlet />
          </main>
        </div>
        <div id="portalModalWindow" />
      </div>
    </>
  );
};

export default memo(PageLayout);
