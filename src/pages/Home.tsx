import TarefaForm from '../components/TarefaForm';
import TarefaList from '../components/TarefaList';
import { useTarefas } from '../context/FavoritesContext';


function Home() {
  const { tarefas } = useTarefas(); // Acessa a lista de tarefas do contexto

  return (
    <div>
      <h2>Todas as Tarefas</h2>
      <TarefaForm />
      <TarefaList tarefa={tarefas} />
    </div>
  );
}

export default Home;