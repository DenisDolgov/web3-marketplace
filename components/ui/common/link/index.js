import Link from "next/link";
import React from "react";
import {useRouter} from "next/router";

export default function ActiveLink({ children, activeClass = ' text-indigo-600', ...props }) {
  const { pathname } = useRouter();
  let className = children.props.className || '';
  
  if (pathname === props.href) {
    className += activeClass;
  }

  return (
    <Link {...props}>
      {
        React.cloneElement(children, {className})
      }
    </Link>
  );
}
