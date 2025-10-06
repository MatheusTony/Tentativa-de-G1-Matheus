import { type Tarefa } from '../context/FavoritesContext';
import TarefaItem from './TarefaItem';

interface TarefaListProps {
  tarefa: Tarefa[];
}

function TarefaList({ tarefa }: TarefaListProps) {
  if (tarefa.length === 0) {
    return <p>Nenhuma tarefa encontrada.</p>;
  }

  return (
    <ul>
      {tarefa.map(tarefa => (
        <TarefaItem key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}

export default TarefaList;