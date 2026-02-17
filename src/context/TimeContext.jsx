import React, { createContext, useState, useContext } from 'react';

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [balance, setBalance] = useState(100); // الرصيد الافتراضي
  const [history, setHistory] = useState([
    { id: 1, title: 'هدية ترحيبية', amount: 100, type: 'gain' }
  ]);

  // دالة تحويل الدقائق
  const spendMinutes = (amount, taskName) => {
    if (balance >= amount) {
      setBalance(prev => prev - amount);
      setHistory([{ id: Date.now(), title: taskName, amount: -amount, type: 'spend' }, ...history]);
      return true;
    }
    alert("رصيدك لا يكفي!");
    return false;
  };

  const gainMinutes = (amount, taskName) => {
    setBalance(prev => prev + amount);
    setHistory([{ id: Date.now(), title: taskName, amount: amount, type: 'gain' }, ...history]);
  };

  return (
    <TimeContext.Provider value={{ balance, history, spendMinutes, gainMinutes }}>
      {children}
    </TimeContext.Provider>
  );
};

export const useTime = () => useContext(TimeContext);
