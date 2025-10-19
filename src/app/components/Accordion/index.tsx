import Image from 'next/image'
import PlusIcon from '../../../../public/assets/plus-icon.svg'

export default function AccordionItem({
  title,
  content,
  isOpen,
  onClick,
}: {
  title: string
  content: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="mb-1">
      <button
        className="w-full flex items-center justify-between bg-[rgb(45,45,45)] hover:bg-[rgb(65,65,65)] text-xl text-white font-semibold p-4 cursor-pointer"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <Image src={PlusIcon} width={25} height={25} alt="plus" className={`transition-all transform-gpu ${isOpen ? 'rotate-45 ' : 'rotate-0 '}`} />
      </button>
      {isOpen && <div className="bg-gray-100 text-black text-xl px-4 py-6">{content}</div>}
    </div>
  )
}
