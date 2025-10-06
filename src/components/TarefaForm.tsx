import { useState } from 'react';
import { useTarefas } from '../context/FavoritesContext';

function TarefaForm() {
  const [text, setText] = useState('');
  const { addTarefa } = useTarefas(); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTarefa(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TarefaForm;