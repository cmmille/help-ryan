import { AiOutlineCloseCircle } from "react-icons/ai";

interface Props {
  onClose: () => void;
  children?: React.ReactNode;
}

const Backdrop = ({ onClose, children }: Props) => {
  return (
    <div
      className="fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75"
      onClick={onClose}
    >
      <button
        className="absolute top-2 right-2 hover:text-zinc-400"
        onClick={onClose}
      >
        <AiOutlineCloseCircle className="text-4xl" />
      </button>
      {children}
    </div>
  );
};

export default Backdrop;
