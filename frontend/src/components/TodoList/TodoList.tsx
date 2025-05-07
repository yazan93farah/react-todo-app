import React from 'react';
import { Todo } from '../../api';
import styles from './TodoList.module.css';

interface Props {
  todos: Todo[];
  onComplete: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, onComplete }) => {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li className={styles.item} key={todo.id} >
          <div className={styles.itemContent}>{todo.text}</div>
          <button className={styles.completeButton} onClick={() => onComplete(todo.id)}>
            Complete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
