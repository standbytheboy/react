import React, { useState } from 'react';

function AddTask({onAddTaskSubmit}) {
    // para pegar o valor do input, vamos usar o state
    const [title, setTitle] = useState("123");
    const [description, setDescription] = useState("");
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow-2xs flex flex-col">
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Digite sua tarefa" className="border-slate-300 border-2 outline-slate-400 px-4 py-2 rounded-md"/>
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Digite a descrição com detalhes" className="border-slate-300 border-2 outline-slate-400 px-4 py-2 rounded-md"/>
        <button onClick={() => onAddTaskSubmit(title, description)} className="bg-slate-500 text-white py-2 rounded-md font-medium">Adicionar</button>
        </div>
    );
}

export default AddTask;
