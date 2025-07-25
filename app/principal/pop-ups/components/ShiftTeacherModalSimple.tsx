import Image from "next/image";
import { CloseIcon, ModalProps } from "../page";

const ShiftTeacherModalSimple: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-black">Shift Teacher</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 text-[#F9FAFB]0 hover:text-black"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center p-2 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] mb-6">
          <Image
            src="/principal/manage.jpg"
            alt="User Avatar"
            width={40}
            height={40}
            className="w-12 h-12 rounded-xl object-cover mr-3"
          />
          <p className="font-semibold text-md text-black">Name</p>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-sm font-semibold text-black bg-white border border-[#E5E7EB] rounded-full hover:bg-[#F9FAFB]"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700">
            Shift
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShiftTeacherModalSimple