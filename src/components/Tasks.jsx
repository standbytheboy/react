import { ChevronRight, TrashIcon } from "lucide-react";


{/* pra não ter que fazer isso: "function Tasks(props) {}" e ficar chamando props.nomeDaFuncao, podemos fazer da seguinte maneira: */} 
function Tasks({tasks, onTaskClick, deleteTask}) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow-2xs">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`w-full text-left bg-slate-400 text-white p-2 rounded-md cursor-pointer ${task.isCompleted && "line-through"}`}>
            {task.title}
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-md cursor-pointer">
            <ChevronRight />
          </button>
          <button onClick={() => deleteTask(task.id)} className="bg-slate-400 text-white p-2 rounded-md cursor-pointer">
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
