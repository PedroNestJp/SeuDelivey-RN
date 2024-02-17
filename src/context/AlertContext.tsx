import React, { createContext, useContext, useState, ReactNode } from 'react';

type AlertContextType = {
  alertMessage: string | null;
  showAlert: (message: string) => void;
  hideAlert: () => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
}

type AlertProviderProps = {
  children: ReactNode;
};

export function AlertProvider({ children }: AlertProviderProps) {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const showAlert = (message: string) => {
    setAlertMessage(message);
  };

  const hideAlert = () => {
    setAlertMessage(null);
  };

  return (
    <AlertContext.Provider value={{ alertMessage, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
}
