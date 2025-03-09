import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);

  return (
    <nav className="w-[80%] my-9 mx-auto">
      <ul className="flex space-x-2 text-gray-600">
        <li>
          <Link to="/" className="hover:text-blue-500">Home</Link>
        </li>
        {pathnames.map((path, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={path} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-gray-400">{path}</span>
              ) : (
                <Link to={routeTo} className="hover:text-blue-500">{path}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BreadCrumb;
