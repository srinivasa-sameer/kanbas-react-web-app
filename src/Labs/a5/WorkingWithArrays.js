import { useEffect, useState } from 'react';
import axios from 'axios';
const API_BASE = process.env.REACT_APP_API_BASE;
const URL = API_BASE?.substring(0, API_BASE.length - 3) + 'a5';
function WorkingWithArrays() {
  const API = `${URL}/todos`;
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState({
    id: 1,
    title: 'NodeJS Assignment',
    description: 'Create a NodeJS server with ExpressJS',
    due: '2021-09-09',
    completed: false,
  });
  const [todos, setTodos] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (todo) => {
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response.data.message);
    }
  };

  const updateTodo = async () => {
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setTodo({
        id: '',
        title: '',
        description: '',
        due: '',
        completed: false,
      });
    } catch (error) {
      console.log(error);
      setErrorMsg(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h3>Working with Arrays</h3>
      <h4>Retrieving Arrays</h4>
      <a href={API} className="btn btn-primary me-2">
        Get Todos
      </a>
      <input
        value={todo.id}
        onChange={(e) =>
          setTodo({
            ...todo,
            id: e.target.value,
          })
        }
        className="form-control mb-2 mt-2"
        type="number"
      />
      <input
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
        className="form-control mb-2"
        type="text"
      />
      <textarea
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
        className={'form-control mb-2'}
        value={todo.description}
      />
      <input
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
        className="form-control mb-2"
        value={todo.due}
        type="date"
      />
      <label>
        <input
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
          className="form-check-input mb-2"
          value={todo.completed}
          type="checkbox"
        />
        Completed
      </label>
      <button className={'btn btn-warning mb-2 w-100'} onClick={postTodo}>
        Post Todo
      </button>
      <button onClick={createTodo} className="btn btn-primary mb-2 w-100 mt-2">
        Create Todo
      </button>
      <button onClick={updateTodo} className="btn btn-success mb-2 w-100 mt-2">
        Update todo
      </button>
      {errorMsg && (
        <div className="alert alert-danger mb-2 mt-2">{errorMsg}</div>
      )}
      <ul className="list-group mt-2">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input
              className={'form-check-input me-2'}
              checked={todo.completed}
              type="checkbox"
              readOnly
            />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button
              onClick={() => fetchTodoById(todo.id)}
              className="btn btn-warning me-2 float-end"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end me-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h4 className={'mt-2'}>Retrieving an Item from an Array by ID</h4>
      <input
        className="form-control"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <a href={`${API}/${id}`} className="btn btn-primary me-2 mt-1">
        Get todo by ID
      </a>
      <h3 className={'mt-2'}>Filtering Array Items</h3>
      <a href={`${API}?completed=true`} className="btn btn-primary me-2 mt-1">
        Get Completed Todos
      </a>
      <h4 className={'mt-2'}>Creating new Items in an Array</h4>
      <a href={`${API}/create`} className="btn btn-primary me-2">
        Create Todo
      </a>

      <h3>Updating an Item in an Array</h3>
      <a
        href={`${API}/${todo.id}/title/${todo.title}`}
        className="btn btn-primary me-2"
      >
        Update Title to {todo.title}
      </a>
      <input
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
        className="form-control mb-2 mt-2"
        type="text"
      />
      <a
        href={`${API}/${todo.id}/description/${todo.description}`}
        className="btn btn-primary me-2"
      >
        Update Description to {todo.description}
      </a>
      <input
        value={todo.completed}
        onChange={(e) =>
          setTodo({
            ...todo,
            completed: e.target.checked,
          })
        }
        className="form-check-input mb-2 mt-2 d-block"
        type="checkbox"
      />
      <a
        href={`${API}/${todo.id}/completed/${todo.completed}`}
        className="btn btn-primary me-2"
      >
        Update Description to {todo.completed ? 'true' : 'false'}
      </a>
      <h3>Deleting from an Array</h3>
      <a href={`${API}/${todo.id}/delete`} className="btn btn-primary me-2">
        Delete Todo with ID = {todo.id}
      </a>
    </div>
  );
}

export default WorkingWithArrays;
