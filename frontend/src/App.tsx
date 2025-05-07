import React, { useEffect, useState } from 'react';
import { fetchTodos, addTodo, completeTodo, Todo } from './api';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Pagination from './components/Pagination/Pagination';
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [pageSize, setPagesize] = useState(5);

  const loadTodos = async () => {
    try {
      const data = await fetchTodos(page);
      setTodos(data.todos);
      setTotalItems(data.total)
      setPagesize(data.pageSize)

    } catch (error) {
      toast.error('Could not load todos. Please refresh.');
    }
  };


  useEffect(() => {
    loadTodos();
  }, [page]);

  const handleAdd = async (text: string) => {
    try {
      await addTodo(text);
      toast.success('Todo has been added successfully.');
      loadTodos();
    } catch (error) {
      toast.error('Failed to add the todo. Please try again.');
    }
  };

  const handleComplete = async (id: number) => {
    try {
      await completeTodo(id);
      toast.success('Todo marked as completed.');
      loadTodos();
    } catch (error) {
      toast.error('Unable to mark todo as completed. Try again.');
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h1>Todo List</h1>
          <TodoForm onAdd={handleAdd} />
          <TodoList todos={todos} onComplete={handleComplete} />
          <Pagination
          pageSize={pageSize}
            totalItems={totalItems}
            page={page}
            onPrev={() => setPage((p) => Math.max(1, p - 1))}
            onNext={() => setPage((p) => p + 1)}
          />
        </div>
      </div>
      <Toaster position="bottom-center" />
    </>
  );
};

export default App;
