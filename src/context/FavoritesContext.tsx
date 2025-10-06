import { createContext, useState, useContext, useEffect, type ReactNode} from 'react';

// 1. Definindo a interface de uma tarefa
export interface Tarefa {
    id: number;
    text: string;
    isDone: boolean;
    isFavorite: boolean;
}

// 2. Definindo o que nosso contexto irá fornecer
interface TarefaContextType {
    tarefas: Tarefa[]; 
    notification: string;
    
    
    addTarefa: (text: string) => void;
    toggleTarefaDone: (id: number) => void;
    toggleTarefaFavorite: (id: number) => void;
}

// 3. Criando o Contexto

const TarefaContext = createContext<TarefaContextType | undefined>(undefined);

// 4. Criando o "Provedor" do Contexto
export const TarefaProvider = ({ children }: { children: ReactNode }) => {
    
    const [tarefas, setTarefas] = useState<Tarefa[]>([]); 

    // Bônus: Estado para a notificação
    const [notification, setNotification] = useState('');

    useEffect(() => {
        // ... (notificação permanece a mesma)
        if (notification) {
            const timer = setTimeout(() => {
                setNotification('');
            }, 3000); 
            return () => clearTimeout(timer);
        }
    }, [notification]);

    // Funções para manipular as tarefas

    const addTarefa = (text: string) => {
        const newTarefa: Tarefa = {
            id: Date.now(),
            text,
            isDone: false,
            isFavorite: false,
        };

        setTarefas(prevTarefas => [...prevTarefas, newTarefa]); 
    };

    const toggleTarefaDone = (id: number) => {
        setTarefas(prevTarefas =>
            prevTarefas.map(tarefa =>
                // CORREÇÃO CRÍTICA: Variável de iteração  agora é 'tarefa'
                tarefa.id === id ? { ...tarefa, isDone: !tarefa.isDone } : tarefa 
            )
        );
    };

    const toggleTarefaFavorite = (id: number) => {
        let taskText = '';
        
        setTarefas(prevTarefas =>
            prevTarefas.map(tarefa => {
                if (tarefa.id === id) {
                    if (!tarefa.isFavorite) {
                        taskText = tarefa.text;
                        setNotification(`Tarefa "${taskText}" adicionada aos favoritos!`);
                    }
                    return { ...tarefa, isFavorite: !tarefa.isFavorite };
                }
                return tarefa;
            })
        );
    };

    return (
        // 1. Usando 'TarefaContext'
        // 2. Passando o valor 'tarefas' (minúsculo)
        <TarefaContext.Provider value={{ tarefas, notification, addTarefa, toggleTarefaDone, toggleTarefaFavorite }}>
            {children}
        </TarefaContext.Provider>
    );
};

// 5. Criando um Hook customizado para facilitar o uso do contexto
export const useTarefas = () => {
    const context = useContext(TarefaContext); 
    if (context === undefined) {
        throw new Error('useTarefas deve ser usado dentro de um TarefaProvider'); 
    }
    return context;
};