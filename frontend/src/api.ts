const API_BASE = 'http://localhost:5000/api/v1/todos';

export type  TodoPage= {
  page: number;
  todos: Todo[];
  total: number;
  pageSize:number;
};

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};


export async function fetchTodos(page: number): Promise<TodoPage> {
  const res = await fetch(`${API_BASE}?page=${page}`);
  const data:TodoPage = await res.json();
  return data;
}


export async function addTodo(text: string): Promise<void> {
  await fetch(API_BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
}

export async function completeTodo(id: number): Promise<void> {
  await fetch(`${API_BASE}/${id}`, { method: 'PUT' });
}

//TODO: not being used but can be used to delete a todo item 
//TODO: not implemented in the API yet
export async function completeDeleteTodo(id: number): Promise<void> {
  await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
}
