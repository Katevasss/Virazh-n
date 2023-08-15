import cn from 'classnames';
import { InputHTMLAttributes, memo } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import styles from './InputLegend.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputClassName?: string;
}

const InputLegend = (props: UseControllerProps & InputProps) => {
  const { type, ...otherProps } = props;
  const { field } = useController({ defaultValue: '', ...otherProps });

  return (
    <label className={styles.label}>
      <span className={cn(styles.legend, { [styles.dirty]: field.value })}>
        {props.placeholder}
      </span>
      <input className={cn(styles.input, props.inputClassName)} {...field} type={type} />
    </label>
  );
};

export default memo(InputLegend);
