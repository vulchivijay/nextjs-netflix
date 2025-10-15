export default function Button({ children, textSize, btnClick }) {
  const textS = textSize ? textSize : 'text-sm'
  return (<button
    className={`${textS} bg-red-700 text-white text-nowrap px-4 py-2 rounded-xs hover:bg-red-900`}
    onClick={btnClick}>
    {children}
  </button>)
}