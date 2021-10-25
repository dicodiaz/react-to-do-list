import PropTypes from 'prop-types';

const TodoItem = (props) => {
  const { todo, handleChangeProps, deleteTodoProps } = props;
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={() => handleChangeProps(todo.id)} />
      <button type="button" onClick={() => deleteTodoProps(todo.id)}>
        Delete
      </button>
      {todo.title}
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
