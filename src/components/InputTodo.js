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
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="form-control input-text"
        placeholder="Add Todo..."
        value={title}
        onChange={onChange}
      />
      <button type="submit" className="btn input-submit">
        Submit
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoItemProps: PropTypes.func.isRequired,
  showAlertProps: PropTypes.func.isRequired,
};

export default InputTodo;
