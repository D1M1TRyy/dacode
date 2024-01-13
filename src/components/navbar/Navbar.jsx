import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

function Navbar() {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/"
    },
    {
      id: 2,
      title: "Servises",
      url: "/servises"
    },
    {
      id: 3,
      title: "Case",
      url: "/case"
    },
    {
      id: 4,
      title: "DaCode Specialists",
      url: "/specialists"
    },
    {
      id: 5,
      title: "Blog",
      url: "/blog"
    },
    {
      id: 5,
      title: "Request a queto"
    }
  ];

  return (
    <div className={styles.container}>
      <links href="/" className={styles.logoWrapper}>
        <div className={styles.logo}>
          {/* <Image
            src="/logo 1.png"
            width={200}
            height={25}
            className={styles.logo}
            alt="x"
          /> */}
          <h1>Dacode</h1>
        </div>
      </links>
      
      <div className={styles.nav}>
      <DarkModeToggle/>
        {links.map((link) => (
          <div className={styles.link} >
            <a href={link.url}>{link.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
