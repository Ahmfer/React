import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  // Hämta sparade todos från Local Storage när appen laddas
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Spara todos till Local Storage varje gång listan uppdateras
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() === '') return;

    const newTodoItem: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  // Lägg till funktion för att toggla strykning av todo
  const toggleTodoCompletion = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <h1>Todo-app</h1>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Lägg till en ny uppgift"
      />
      <button onClick={handleAddTodo}>Lägg till</button>

      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodoCompletion={toggleTodoCompletion} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;