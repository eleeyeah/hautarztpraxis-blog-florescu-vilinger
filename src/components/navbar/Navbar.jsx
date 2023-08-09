'use client';
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";

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
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        <h2>HAUTARZTPRAXIS</h2>
        <br/>
        <h4>dr Christine Vilinger &</h4>
        <h4>dr Sebastian Florescu</h4>
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.name}
          </Link>
        ))}
        <button
        className={styles.logout}
          onClick={() => {
            console.log("Logged Out");
          }}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
