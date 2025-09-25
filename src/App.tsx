// src/App.tsx
import { useState } from 'react';
import type { Tarefa } from './types/Tarefa';
import TarefaList from './components/TarefaList';
import TarefaForm from './components/TarefaForm';
import './App.css'; // Mantenha se quiser CSS global
import { Typography } from '@mui/material'; 

function App() {
  const [tarefa, setTarefa] = useState<Tarefa[]>([]);
  
  const handleAddTodo = (text: string) => {
    const newTarefa = {
      id: Date.now(),
      text: text,
      isDone : false,
      isFavorite: false

    };
    setTarefa(prevTarefa => [...prevTarefa, newTarefa]);
  };
  
  const toggleComplete = (id: number) => {
    setTarefa(prevTarefa =>
      prevTarefa.map(tarefa =>
        tarefa.id === id ? { ...tarefa, completed: !tarefa.isDone } : tarefa
      )
    );
  };  

  return (
    <div className="App">
        Minha Lista de Tarefas com Favorito
      
      <TarefaForm onAddTodo={handleAddTodo} />
      <TarefaList tarefa={tarefa} onToggleComplete={toggleComplete} />
    </div>
  );
}

export default App;