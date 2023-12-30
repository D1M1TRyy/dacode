import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";



function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.row1}>
          <div className={styles.textArea}>
            <div className={styles.logo}>
              <Image
                  src="/logo 1.png"
                  width={140}
                  height={20}
                  className={styles.logo}
                  alt="x"
                />
            </div>
            <div className={styles.text}>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
          </div>
          <div className={styles.navColumns}>
            <div className={styles.column}>
              <div className={styles.title}>
                <h3>Work</h3>
              </div>
              <ul>
                <li><a href="">Blog</a></li>
                <li><a href="">How We Work</a></li>
                <li><a href="">Testimonials</a></li>
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.title}>
                <h3>Services</h3>
              </div>
              <ul>
                <li><a href="">Marketing Strategy</a></li>
                <li><a href="">Website Optimization</a></li>
                <li><a href="">Email Maerketing</a></li>
              </ul>
            </div>
            <div className={styles.column}>
              <div className={styles.title}>
                <h3>Business Solution</h3>
              </div>
              <ul>
                <li><a href="">Partnership</a></li>
                <li><a href="">About Project</a></li>
                <li><a href="">Corporate</a></li>
              </ul>
            </div>
            <div className={styles.language}>
              <select name="select" id="select">
                <option value="casual">Language</option>
                <option value="option1">Georgia</option>
                <option value="option2">English</option>
                <option value="option3">German</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.nameTag}>
            <p><a href="">© Paelory. 2020</a></p>
          </div>
          <div className={styles.contactLinks}>
            <h3><a href="">FB</a></h3>
            <h3><a href="">TW</a></h3>
            <h3><a href="">IG</a></h3>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Footer;
