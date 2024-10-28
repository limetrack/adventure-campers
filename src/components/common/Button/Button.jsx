import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const Button = ({
  type = 'button',
  variant = 'filled',
  isDisabled,
  className,
  to,
  onClick,
  children,
}) => {
  if (type === 'link') {
    return (
      <Link to={to} className={`${styles.link} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`${styles.button} ${styles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
