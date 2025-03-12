import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const handleEdit = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  return (
    <div
      className={`flex items-center border border-gray-300 rounded-lg px-5 py-3 gap-4 shadow-sm transition-all duration-300 w-full max-w-md mx-auto text-lg 
        ${todo.completed ? "bg-green-100" : "bg-white"}
      `}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="cursor-pointer w-6 h-6 accent-green-600"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      {/* Todo Text */}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg px-3 py-2 text-lg transition-all
          ${isTodoEditable ? "border-gray-400 focus:ring-2 focus:ring-green-500" : "border-transparent"} 
          ${todo.completed ? "line-through text-gray-500" : "text-gray-900"}
        `}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit Button */}
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-gray-50 hover:bg-gray-100 transition-all text-xl disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            handleEdit();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      {/* Delete Button */}
      <button
        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-red-500 text-white hover:bg-red-600 transition-all text-xl"
        onClick={() => deleteTodo(todo.id)}
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;
