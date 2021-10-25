import PropTypes from 'prop-types';
import { useState } from 'react';

const InputTodo = (props) => {
  const { addTodoItemProps, showAlertProps } = props;
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodoItemProps(title);
      setTitle('');
    } else {
      showAlertProps();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Todo..." value={title} onChange={onChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoItemProps: PropTypes.func.isRequired,
  showAlertProps: PropTypes.func.isRequired,
};

export default InputTodo;
