import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Alert from './Alert';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: true,
    },
    {
      id: uuidv4(),
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: uuidv4(),
      title: 'Deploy to live server',
      completed: false,
    },
  ]);
  const [hidden, setHidden] = useState(true);

  const handleChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    );
  };

  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const showAlert = async () => {
    setHidden(false);
    setTimeout(() => {
      setHidden(true);
    }, 2000);
  };

  return (
    // <React.Fragment>
    <>
      <main className="bg-dark text-white min-vh-100 d-flex flex-column justify-content-center">
        <div className="container-md">
          <div className="row mx-0 justify-content-center">
            <div className="col-md-9">
              <Header />
              <InputTodo addTodoItemProps={addTodoItem} showAlertProps={showAlert} />
              <TodosList todos={todos} handleChangeProps={handleChange} deleteTodoProps={delTodo} />
              <Alert hiddenProps={hidden} />
            </div>
          </div>
        </div>
      </main>
    </>
    // </React.Fragment>
  );
};

export default TodoContainer;
