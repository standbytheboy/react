function AddTask() {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow-2xs flex flex-col">
      <input type="text" placeholder="Digite sua tarefa" className="border-slate-300 border-2 outline-slate-400 px-4 py-2 rounded-md"/>
      <input type="text" placeholder="Digite a descrição com detalhes" className="border-slate-300 border-2 outline-slate-400 px-4 py-2 rounded-md"/>
      <button className="bg-slate-500 text-white py-2 rounded-md font-medium">Adicionar</button>
    </div>
  );
}

export default AddTask;
