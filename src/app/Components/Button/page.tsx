export default function Button({ children, props }) {
  return <button className="bg-red-700 text-white text-nowrap px-4 py-1 rounded-xs hover:bg-red-900" {...props}>{children}</button>
}