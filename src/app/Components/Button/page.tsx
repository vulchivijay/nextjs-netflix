type ButtonProps = {
  children: React.ReactNode;
  textSize?: string;
  btnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
  children,
  textSize = 'text-sm',
  btnClick,
}: ButtonProps) {
  return (
    <button
      className={`${textSize} bg-red-700 text-white whitespace-nowrap px-4 py-2 rounded hover:bg-red-900 transition-colors duration-200`}
      onClick={btnClick}
    >
      {children}
    </button>
  );
}