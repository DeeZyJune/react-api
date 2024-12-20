import React, { useState, createContext } from 'react';

// Create the SidebarContext
export const SidebarContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  handleClose: () => {},
});

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};
