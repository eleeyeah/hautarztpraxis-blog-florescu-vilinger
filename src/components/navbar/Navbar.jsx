import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Über uns",
    url: "/about",
  },
  {
    id: 3,
    name: "Leistungen",
    url: "/leistungen",
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    name: "Kontakt",
    url: "/kontakt",
  },
  {
    id: 6,
    name: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <div>
      <Link href='/'>
        <h1>HAUTARZTPRAXIS</h1>
      </Link>
      <div>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
