import React from "react";
import { Link } from "react-router-dom";
import { ACCOUNT, DASHBOARD, INTEGRATIONS } from "../../routes/index.routes";

const links = [
  {
    slug: DASHBOARD,
    title: "Dashboard",
  },
  {
    slug: INTEGRATIONS,
    title: "Integrations",
  },
  {
    slug: ACCOUNT,
    title: "Account",
  },
];

const DashNav = () => {
  return (
    <nav className="w-full mb-10 mt-10">
      <ul className="flex items-center p-1  bg-white rounded-full border-2 border-gray-300">
        {links.map((link) => (
          <Link
            to={link.slug}
            className="p-3 px-6 text-gray-600 hover:bg-gray-100 rounded-full"
          >
            {link.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default DashNav;
