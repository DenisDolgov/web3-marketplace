export default function Button({
  children,
  className,
  variant = 'purple',
  hoverable = true,
  ...rest
}) {
  const variants = {
    purple: `text-white bg-indigo-600 ${hoverable && 'hover:bg-indigo-700'}`,
    red: `text-white bg-red-600 ${hoverable && 'hover:bg-red-700'}`,
  }

  return (
    <button
      className={`disabled:opacity-50 disabled:cursor-not-allowed rounded-md px-8 py-3 border text-base font-medium mr-8 ${className} ${variants[variant]}`}
      {...rest}
    >
      {children}
    </button>
  );
}
