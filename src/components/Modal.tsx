import { createPortal } from "react-dom";
import { useCallback } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleCloseModal = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  return createPortal(
    <>
      {isOpen && (
        <div
          className="fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75"
          onClick={handleCloseModal}
        >
          <div className="bg-zinc-900 rounded-lg shadow-lg p-8">{children}</div>
          <button className="absolute top-2 right-2" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </div>
      )}
    </>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
