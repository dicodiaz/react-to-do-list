import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const { addTodoItemProps, showAlert } = props;
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoItemProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      showAlert();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        name="title"
        className="form-control input-text"
        placeholder="Add Todo..."
        value={inputText.title}
        onChange={onChange}
      />
      <button type="submit" className="btn input-submit">
        <FaPlusCircle className="text-dark" style={{ fontSize: '25px', marginTop: '2px' }} />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoItemProps: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
};

export default InputTodo;
