import css from './Button.module.css';

export const Button = ({ onAddImages }) => {
  return (
    <button className={css.Button} onClick={onAddImages} type="button">
      Load more
    </button>
  );
};
