import React, { createContext, useState } from "react";

export const DataContext = createContext();
const ModalContext = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalComponent, setModalComponent] = useState(null);
    return (
        <DataContext.Provider
            value={{
                modalOpen,
                setModalOpen,
                modalComponent,
                setModalComponent,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default ModalContext;
