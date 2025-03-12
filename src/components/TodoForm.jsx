import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form 
      onSubmit={add} 
      className="flex w-full max-w-md mx-auto bg-white/50 shadow-md rounded-lg overflow-hidden"
    >
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-gray-300 rounded-l-lg px-3 py-2 outline-none focus:ring-2 focus:ring-green-500 transition-all"
      />
      <button 
        type="submit" 
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-lg transition-all"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
