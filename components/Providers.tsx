'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type StressArchetype = 'physical-exhaustion' | 'mental-overload' | 'emotional-turbulence' | null;

interface UserState {
  stressArchetype: StressArchetype;
  quizCompleted: boolean;
  insights: Record<string, string>;
}

interface AppContextType {
  userState: UserState;
  setStressArchetype: (archetype: StressArchetype) => void;
  saveInsight: (key: string, value: string) => void;
  resetUserState: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialState: UserState = {
  stressArchetype: null,
  quizCompleted: false,
  insights: {},
};

export function Providers({ children }: { children: ReactNode }) {
  const [userState, setUserState] = useState<UserState>(initialState);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carregar estado do localStorage quando montar
  useEffect(() => {
    const savedState = localStorage.getItem('renewal-playbook-state');
    if (savedState) {
      try {
        setUserState(JSON.parse(savedState));
      } catch (error) {
        console.error('Erro ao carregar estado:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Salvar estado no localStorage quando mudar
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('renewal-playbook-state', JSON.stringify(userState));
    }
  }, [userState, isLoaded]);

  const setStressArchetype = (archetype: StressArchetype) => {
    setUserState(prev => ({
      ...prev,
      stressArchetype: archetype,
      quizCompleted: true,
    }));
  };

  const saveInsight = (key: string, value: string) => {
    setUserState(prev => ({
      ...prev,
      insights: {
        ...prev.insights,
        [key]: value,
      },
    }));
  };

  const resetUserState = () => {
    setUserState(initialState);
    localStorage.removeItem('renewal-playbook-state');
  };

  return (
    <AppContext.Provider 
      value={{ 
        userState, 
        setStressArchetype, 
        saveInsight, 
        resetUserState 
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within a Providers component');
  }
  return context;
}
