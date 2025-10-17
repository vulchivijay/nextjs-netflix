import Image from "next/image";
import PlusIcon from "./../../../../public/assets/plus-icon.svg";

export default function AccordionItem({
  title,
  content,
  isOpen,
  onClick,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (<div className="mb-1">
    <button
      className="w-full flex items-center justify-between bg-gray-900 text-xl text-white font-semibold p-4 cursor-pointer"
      onClick={onClick}
      aria-expanded={isOpen}
    >
      <span>{title}</span>
      <Image src={PlusIcon} width={25} height={25} alt="plus" />
    </button>
    {isOpen && <div className="bg-gray-800 text-white px-4 py-6">{content}</div>}
  </div>)
};