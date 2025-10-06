// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import  Navbar from './components/Navbar.tsx';
import Notification from './components/Notification.tsx'; 
import { useTarefas } from './context/FavoritesContext';

function App() {
  const { notification } = useTarefas(); // <-- Consumir

  return (
    <>
      <Navbar/>
      {/* Exibe a notificação aqui para que ela apareça em todas as páginas */}
      <Notification message={notification} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </main>
    </>
  );
}

export default App;