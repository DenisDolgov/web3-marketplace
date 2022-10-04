import { ActiveLink } from "@ui/common";

const Breadcrumbs = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
        {items.map((item, index) => (
          <li
            key={item.text}
            className={`font-medium text-gray-500 hover:text-gray-900 ${
              index === 0
                ? 'pr-4'
                : index === items.length - 1
                  ? 'pl-4'
                  : 'px-4'
            }`}>
            <ActiveLink href={item.href}>
              <a>{item.text}</a>
            </ActiveLink>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs;
