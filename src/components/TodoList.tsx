import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';

interface TaskType {
  label: string;
  completed: boolean;
}

const sampleTask: TaskType[] = [{ label: 'Go to the gym', completed: false }];

const TodoList = () => {
  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useLocalStorage<TaskType[]>('todos', sampleTask);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setTodos([...todos, { label: input, completed: false }]);
    setInput('');
  };

  const handleDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleCompleted = (index: number) => {
    setTodos(
      todos.map((todo, idx) => {
        if (index !== idx) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      }),
    );
  };

  return (
    <div className="">
      <form onSubmit={e => handleSubmit(e)} className="flex flex-col gap-3">
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <Button type="submit">Add</Button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <>
              <li
                key={index}
                className={`flex justify-between w-full p-1 rounded hover:bg-gray-100 ${
                  todo.completed && 'bg-green-200 hover:bg-green-300'
                }`}>
                <p
                  onClick={() => toggleCompleted(index)}
                  className={`capitalize w-full cursor-pointer ${
                    todo.label.startsWith('h') && 'text-red-500'
                  }`}>
                  {todo.label}
                </p>
                <button onClick={() => handleDelete(index)}>🗑</button>
              </li>
            </>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default TodoList;
