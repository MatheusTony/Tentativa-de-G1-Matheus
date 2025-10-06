import { useTarefas, type Tarefa } from '../context/FavoritesContext';

interface TarefaItemProps {
  tarefa: Tarefa;
}

function TarefaItem({ tarefa }: TarefaItemProps) {
  const { toggleTarefaDone, toggleTarefaFavorite } = useTarefas();

  return (
    <li className={tarefa.isDone ? 'done' : ''}>
      <span
        style={{ textDecoration: tarefa.isDone ? 'line-through' : 'none' }}
      >
        {tarefa.text}
      </span>
      <div>
        <button onClick={() => toggleTarefaDone(tarefa.id)}>
          {tarefa.isDone ? 'Desfazer' : 'Concluir'}
        </button>
        <button onClick={() => toggleTarefaFavorite(tarefa.id)}>
          {tarefa.isFavorite ? '❤️' : '🖤'}
        </button>
      </div>
    </li>
  );
}

export default TarefaItem;