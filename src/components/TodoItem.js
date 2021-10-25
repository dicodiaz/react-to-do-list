import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const { todo, handleChangeProps, deleteTodoProps } = props;
  const { completed, id, title } = todo;
  const completedStyle = {
    fontStyle: 'italic',
    color: 'antiquewhite',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        className={styles.checkbox && 'form-check-input me-2'}
        checked={completed}
        onChange={() => handleChangeProps(id)}
      />
      <button type="button" onClick={() => deleteTodoProps(id)}>
        Delete
      </button>
      <span style={completed ? completedStyle : null}>{title}</span>
    </li>
  );
};

TodoItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.object.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
