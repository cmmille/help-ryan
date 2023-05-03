import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <Backdrop onClose={onClose}>
          <div
            className="bg-zinc-900 rounded-lg shadow-lg p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </Backdrop>
      )}
    </>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
