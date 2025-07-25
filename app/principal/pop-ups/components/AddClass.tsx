import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onSave: () => void;
}

const AddClassModal: React.FC<ModalProps> = ({ isOpen, onSave }) => {
  if (!isOpen) return null;
  // Dummy state for this modal's internal selections if any
  // const [selectedTeacher, setSelectedTeacher] = useState(null);

  const teachers = [
    { id: "t1", name: "Teacher One", detail1: "Maths", detail2: "Grade 10" },
    { id: "t2", name: "Teacher Two", detail1: "Science", detail2: "Grade 9" },
    {
      id: "t3",
      name: "Teacher Three",
      detail1: "English",
      detail2: "Grade 10",
    },
  ];

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-xs flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-lg transform transition-all duration-300 ease-in-out scale-100 opacity-100">
        <div className="space-y-5 mb-8">
          <div>
            <label
              htmlFor="mc_className"
              className="block text-sm font-medium text-black mb-1"
            >
              Class Name
            </label>
            <input
              type="text"
              id="mc_className"
              placeholder="Branch Name"
              className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="mc_gradeLevel"
              className="block text-sm font-medium text-black mb-1"
            >
              Grade / Level
            </label>
            <div className="relative">
              <select
                id="mc_gradeLevel"
                className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8"
              >
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <ChevronDownIcon className='absolute top-[50%] right-4 transform translate-y-[-50%]' />
            </div>
          </div>
          <div>
            <label
              htmlFor="mc_group"
              className="block text-sm font-medium text-black mb-1"
            >
              Group
            </label>
            <div className="relative">
              <select
                id="mc_group"
                className="w-full px-4 py-2.5 bg-[#F9FAFB] border border-[#E5E7EB] rounded-full appearance-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm pr-8"
              >
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <ChevronDownIcon className='absolute top-[50%] right-4 transform translate-y-[-50%]' />
            </div>
          </div>
          <label className="block text-sm font-medium text-black mb-1">
            Assign Class Teacher
          </label>
          <div className="bg-[#F9FAFB] border border-[#E5E7EB] p-2 rounded-2xl">
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
            <div className="space-y-1.5 max-h-48 overflow-y-auto custom-scrollbar pr-1 relative">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="flex items-center p-2 rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] cursor-pointer hover:border-blue-500"
                >
                  <Image
                    src={`/principal/manage.jpg`}
                    alt="User Avatar"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-lg object-cover mr-3"
                  />
                  <div className="flex-grow">
                    <p className="font-semibold text-sm text-black">
                      {teacher.name}
                    </p>
                    <p className="text-xs text-[#F9FAFB]0">{teacher.detail1}</p>
                    <p className="text-xs text-[#F9FAFB]0">{teacher.detail2}</p>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-3">
          <button onClick={() => onSave()} className="px-6 py-2.5 text-sm font-semibold text-white bg-[#3366FF] rounded-full hover:bg-blue-700 transition-colors">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddClassModal