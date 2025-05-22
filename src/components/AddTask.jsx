import React, { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  // para pegar o valor do input, vamos usar o state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <form
      action={() => {
        if(!title.trim() || !description.trim()) { // o "trim" remove o espaço em branco
            return alert("Preencha o título e a descrição da tarefa")
        }
        
        onAddTaskSubmit(title, description);
        setTitle(""),
        setDescription("")
      }}
      className="space-y-4 p-6 bg-slate-200 rounded-md shadow-2xs flex flex-col"
    >
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Digite sua tarefa"
        className="border-slate-300 border-2 outline-slate-400 px-4 py-2 rounded-md"
      />
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Digite a descrição com detalhes"
        className="border-slate-300 border-2 outline-slate-400 px-4 py-2 rounded-md"
      />
      <button className="bg-slate-500 text-white py-2 rounded-md font-medium">
        Adicionar
      </button>
    </form>
  );
}

export default AddTask;
