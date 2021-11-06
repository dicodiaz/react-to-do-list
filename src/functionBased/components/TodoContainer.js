import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import Alert from './Alert';
import Header from './Header';
import InputTodo from './InputTodo';
import Navbar from './Navbar';
import TodosList from './TodosList';

const TodoContainer = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
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
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: updatedTitle,
          };
        }
        return todo;
      }),
    );
  };

  const showAlert = () => {
    setHidden(false);
    setTimeout(() => {
      setHidden(true);
    }, 2000);
  };

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <main className="bg-dark text-white min-vh-100 pt-5">
            <div className="container-md pt-4">
              <div className="row mx-0 justify-content-end justify-content-md-center">
                <div className="col-11 col-md-9">
                  <Header />
                  <InputTodo addTodoItemProps={addTodoItem} showAlert={showAlert} />
                  <TodosList
                    todos={todos}
                    handleChangeProps={handleChange}
                    deleteTodoProps={delTodo}
                    setUpdate={setUpdate}
                  />
                  <Alert hidden={hidden} />
                </div>
              </div>
            </div>
          </main>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
};

export default TodoContainer;
