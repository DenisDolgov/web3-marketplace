const defaultClassName = 'text-white bg-indigo-600 hover:bg-indigo-700';

export default function Button({children, className = defaultClassName, ...rest}) {
  return (
    <button
      className={`rounded-md px-8 py-3 border text-base font-medium mr-8 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
