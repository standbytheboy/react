import { ChevronRight, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


{/* pra não ter que fazer isso: "function Tasks(props) {}" e ficar chamando props.nomeDaFuncao, podemos fazer da seguinte maneira: */} 
function Tasks({tasks, onTaskClick, deleteTask}) {
  const navigate = useNavigate();
  function seeDetails(task) {
    const query = new URLSearchParams(); // usado para tratar os dados que vêm na URL
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`) // "navigate(`/task?title=${task.title}&description=${task.description}`)" navega entre pages através do get/query params (parâmetros na url)
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow-2xs">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`w-full text-left bg-slate-400 text-white p-2 rounded-md cursor-pointer ${task.isCompleted && "line-through"}`}>
            {task.title}
          </button>
          <button onClick={() => seeDetails(task)} className="bg-slate-400 text-white p-2 rounded-md cursor-pointer">
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
