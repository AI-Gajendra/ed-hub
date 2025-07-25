import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { ModalProps } from "../page";

const AddStudentsModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const students = Array(10)
    .fill(null)
    .map((_, i) => ({
      id: `s${i}`,
      name: `Student Name ${i + 1}`,
      course: "Course Name",
      grade: "Level / Grade",
      group: "Group",
    }));
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-3xl transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <label
          htmlFor="mc_className"
          className="block text-sm font-medium text-black mb-3"
        >
          Add Students
        </label>
        <div className="flex items-center gap-2 mb-2 ">
          <div className="relative flex-grow text-black">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-full h-4 sm:w-5 sm:h-5 text-black pointer-events-none" />
            <input
              type="text"
              placeholder="Search Student"
              className="w-full pl-9 pr-3 py-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <select className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-2 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">filter 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
            <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#F9FAFB]0 text-xs" />
          </div>
          <div className="relative">
            <select className="appearance-none border border-gray-300 text-sm px-3 py-2 rounded-xl pr-2 bg-[#F9FAFB] focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">filter 2</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
            <IoIosArrowDown className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 font-medium text-[#F9FAFB]0 text-xs" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-h-80 overflow-y-auto custom-scrollbar pr-2 mb-8 relative  p-3 rounded-xl">
          {students.map((student) => (
            <div
              key={student.id}
              className="flex items-center p-1.5 rounded-xl border border-[#E5E7EB] bg-white cursor-pointer hover:border-blue-500"
            >
              <Image
                src={`/teacher-b2b/list-profile.png`}
                alt="User Avatar"
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg object-cover mr-2"
              />
              <div className="flex-grow text-[10px]">
                <p className="font-semibold text-xs text-black">
                  {student.name}
                </p>
                <p className="text-[#F9FAFB]0">{student.course}</p>
                <p className="text-[#F9FAFB]0">{student.grade}</p>
                <p className="text-[#F9FAFB]0">{student.group}</p>
              </div>
              <div className="w-5 h-5 rounded-full border-2 border-gray-400 ml-2"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-3">
          <button onClick={onClose} className="px-6 w-45 py-2.5 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700 transition-colors">
            Save
          </button>{" "}
          {/* Or Create Class */}
        </div>
      </div>
    </div>
  );
};

export default AddStudentsModal