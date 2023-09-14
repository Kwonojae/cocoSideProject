import { createContext, useRef, useState } from "react";

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const ClickModal = () => setOpen(true);
  const [selectedOption, setSelectedOption] = useState(""); // 선택한 회원 유형을 저장하는 상태
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedOption("");
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        setOpen,
        ClickModal,
        handleClose,
        handleOptionSelect,
        selectedOption,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
