import { useState, createContext } from "react";

export const ModalContext = createContext({
  showModal: false,
  setShowModal: (_value: boolean) => {},
});

export const ModalContextProvider = ({children}: {children: React.ReactNode}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
};