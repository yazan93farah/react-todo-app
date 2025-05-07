import React, { useState } from 'react';
import styles from './TodoForm.module.css';

interface Props {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <div className={styles.form}>
      <input className={styles.input}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New todo..."
      />
      <button className={styles.button} onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TodoForm;
