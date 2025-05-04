import { Router, Request, Response } from 'express';
import { todos, Todo } from './data';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const pageSize = 5;

  const visibleTodos = todos.filter(t => !t.done);
  const paginated = visibleTodos.slice((page - 1) * pageSize, page * pageSize);

  return res.json({
    page,
    total: visibleTodos.length,
    todos: paginated,
  });
});

router.post('/', (req: Request, res: Response) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  const newTodo: Todo = {
    id: Date.now(),
    text,
    done: false,
  };

  todos.push(newTodo);
  return res.status(201).json(newTodo);
});

router.put('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todo.done = true;
  return res.json(todo);
});

export default router;
