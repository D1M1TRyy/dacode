import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.about}>
        <div className={styles.textArea}>
          <div className={styles.blueLine}></div>
          <div className={styles.title}>
            <h1>We help yoy create your <b>website</b></h1>
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus</p>
          </div>
          <div className={styles.buttons}>
            <button className={styles.first}>Getstarted</button>
            <button className={styles.second}>Contact us</button>
          </div>
        </div>
        <div className={styles.pic}>
        <Image
            src="/homepagePic.png"
            fill={true}
            className={styles.logo}
            alt="x"
          />
          <div className={styles.image}></div>
        </div>
      </div>
      <div className={styles.ourServices}>
        <div className={styles.mainName}>
          <h1>Our-services</h1>
        </div>
        <div className={styles.aboutService}>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
        </div>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.row}>

              <div className={styles.card}>
                <div className={styles.pic}>
                  <div className={styles.img1}></div>
                  <div className={styles.ring}></div>
                </div>
                <div className={styles.title}>
                  <h3>WordPress Site</h3>
                </div>
                <div className={styles.text}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                </div>
                <div className={styles.link}>
                  <a href="#">Read More</a>                               
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.pic}>
                  <div className={styles.img2}></div>
                  <div className={styles.ring}></div>
                </div>
                <div className={styles.title}>
                  <h3>WordPress Plugin</h3>
                </div>
                <div className={styles.text}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                </div>
                <div className={styles.link}>
                  <a href="#">Read More</a>                               
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.pic}>
                 <div className={styles.img3}></div>
                  <div className={styles.ring}></div>
                </div>
                <div className={styles.title}>
                  <h3>Website Redesign</h3>
                </div>
                <div className={styles.text}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                </div>
                <div className={styles.link}>
                  <a href="#">Read More</a>                               
                </div>
              </div>

            </div>
            <div className={styles.row}>

              <div className={styles.card}>
                <div className={styles.pic}>
                 <div className={styles.img4}></div>
                  <div className={styles.ring}></div>
                </div>
                <div className={styles.title}>
                  <h3>WordPress Site Optimization</h3>
                </div>
                <div className={styles.text}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                </div>
                <div className={styles.link}>
                  <a href="#">Read More</a>                               
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.pic}>
                  <div className={styles.img5}></div>
                  <div className={styles.ring}></div>
                </div>
                <div className={styles.title}>
                  <h3>Serch Ingine Optimization</h3>
                </div>
                <div className={styles.text}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                </div>
                <div className={styles.link}>
                  <a href="#">Read More</a>                               
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.pic}>
                 <div className={styles.img6}></div>
                  <div className={styles.ring}></div>
                </div>
                <div className={styles.title}>
                  <h3>Cross Platform Mobile App</h3>
                </div>
                <div className={styles.text}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                </div>
                <div className={styles.link}>
                  <a href="#">Read More</a>                               
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
