import React from 'react';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleTodoCompletion: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodoCompletion }) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center' }}>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          flex: 1,
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => toggleTodoCompletion(todo.id)}>
        {todo.completed ? 'Ångra' : 'Stryk över'}
      </button>
    </li>
  );
};

export default TodoItem;