'use client'

import { createContext, useContext, useState, ReactNode } from 'react';

interface BgConditionContextProviderProps {
  children: ReactNode;
}

const BgConditionContext = createContext({
  bgCondition: '',
  setBgCondition: (condition: string) => {},
});

export const UseBgCondition = () => useContext(BgConditionContext);

export const BgConditionProvider = ({ children }: BgConditionContextProviderProps) => {
  const [bgCondition, setBgCondition] = useState('');

  return (
    <BgConditionContext.Provider value={{ bgCondition, setBgCondition }}>
      {children}
    </BgConditionContext.Provider>
  );
};