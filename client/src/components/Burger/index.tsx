import cn from 'classnames';
import styles from './Burger.module.scss';

const Burger = ({
  active,
  className,
  onClick,
  lightTheme,
}: {
  active: boolean,
  className?: string,
  onClick: () => void,
  lightTheme?: boolean,
}) => (
  <div
    className={cn(styles.layout, { [styles['layout-light']]: lightTheme }, className)}
    onClick={onClick}
  >
    <div
      className={cn(styles.item, {
        [styles['item-active']]: active,
        [styles['item-light']]: lightTheme,
      })}
    />
    <div
      className={cn(styles.item, {
        [styles['item-active']]: active,
        [styles['item-light']]: lightTheme,
      })}
    />
    <div
      className={cn(styles.item, {
        [styles['item-active']]: active,
        [styles['item-light']]: lightTheme,
      })}
    />
  </div>
);

export default Burger;
