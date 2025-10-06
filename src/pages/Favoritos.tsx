import TaskList from '../components/TarefaList';
import { useTarefas } from '../context/FavoritesContext';


function Favorites() {
  const { tarefas } = useTarefas(); // Acessa a mesma lista de tarefas

  // Filtra para mostrar apenas as favoritas
  const favoriteTasks = tarefas.filter(tarefa => tarefa.isFavorite);

  return (
    <div>
      <h2 >Tarefas Favoritas</h2>
      <TaskList tarefa={favoriteTasks} />
    </div>
  );
}

export default Favorites;