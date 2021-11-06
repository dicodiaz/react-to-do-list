import PropTypes from 'prop-types';
import { createRef, useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const { todo, handleChangeProps, deleteTodoProps, setUpdate } = props;
  const { completed, id, title } = todo;

  const [editing, setEditing] = useState(false);
  const [initialTitle, setInitialTitle] = useState('');
  const editTextInput = createRef();
  useEffect(() => {
    if (editing) editTextInput.current.focus();
  }, [editing, editTextInput]);

  const completedStyle = {
    fontStyle: 'italic',
    color: 'antiquewhite',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
    setInitialTitle(title);
  };

  const viewMode = {};
  const editMode = {};
  if (editing) viewMode.display = 'none';
  else editMode.display = 'none';

  const handleUpdateDone = () => {
    setEditing(false);
  };

  const cancelUpdate = () => {
    setUpdate(initialTitle, id);
    handleUpdateDone();
  };

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox && 'form-check-input me-2'}
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button type="button" onClick={() => deleteTodoProps(id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '20.5px' }} />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        ref={editTextInput}
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={(e) => setUpdate(e.target.value, id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleUpdateDone();
          else if (e.key === 'Escape') cancelUpdate();
        }}
        onBlur={handleUpdateDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  todo: PropTypes.object.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoItem;
