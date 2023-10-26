import { ImSpinner } from 'react-icons/im';
import css from './Loader.module.css';

export const Loader = () => {
  return <ImSpinner size="32" className={css.iconSpin} />;
};
