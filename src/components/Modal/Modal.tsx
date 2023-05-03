import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import { AnimatePresence, Variants, motion } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const animationVariants: Variants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 250,
      duration: 0.1,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return createPortal(
    <AnimatePresence initial={false}>
      {isOpen && (
        <Backdrop onClose={onClose}>
          <motion.div
            className="bg-zinc-900 rounded-lg shadow-lg p-8"
            onClick={(e) => e.stopPropagation()}
            variants={animationVariants}
            key={"modal"}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
