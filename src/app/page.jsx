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
      <div className={styles.portfolio}>
        <div className={styles.white}>
          <div className={styles.pageName}>
            <h3>Portfolio</h3>
          </div>
          <div className={styles.title}>
            <h1>Our Great Work</h1>
          </div>
          <div className={styles.navigation}>
            <ul>
              <li className={styles.active}><a href="#">Website Optimization</a></li>
              <li><a href="#">Website Redisine</a></li>
              <li><a href="#">Serch Engine Optimization</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.lightGreen}>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.row}>
                <div className={styles.card}>
                  <div className={styles.pic}>
                   <Image
                      src="/plant.png"
                      fill={true}
                      className={styles.portfolioimg}
                      alt="x"
                    />
                  </div>
                  <div className={styles.text}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum</p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.pic}>
                  <Image
                      src="/phone.png"
                      fill={true}
                      className={styles.portfolioimg}
                      alt="x"
                    />
                  </div>
                  <div className={styles.text}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum</p>
                  </div>
                </div>
                <div className={styles.card}>
                  <div className={styles.pic}>
                  <Image
                      src="/computer.png"
                      fill={true}
                      className={styles.portfolioimg}
                      alt="x"
                    />
                  </div>
                  <div className={styles.text}>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus vitae tortor sapien, lectus scelerisque porttitor. Dolor nulla bibendum</p>
                  </div>
                </div>  
              </div>
            </div>
          </div>
          <div className={styles.button}>
            <button>See More</button>
          </div>
        </div>
      </div>
      <div className={styles.invitation}>
        <div className={styles.title}>
          <h1>Interested to work with us ?</h1>
        </div>
        <div className={styles.text}>
          <h5>Send a line here get and update daily</h5>
        </div>
        <div className={styles.sign}>
          <button><a href="#">DaCode@example.com</a></button>
        </div>
      </div>
      <div className={styles.rating}>
        <div className={styles.mainText}>
          <p>Testiomonials</p>
        </div>
        <div className={styles.title}>
          <h2>Our Happy Clients</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.totalRateing}>
              <div className={styles.number}>
                <h2>5.0</h2>
              </div>
              <div className={styles.stars}>
                <Image src="/star.png" height={30} width={30} alt="x"/>
                <Image src="/star.png" height={30} width={30} alt="x"/>
                <Image src="/star.png" height={30} width={30} alt="x"/>
                <Image src="/star.png" height={30} width={30} alt="x"/>
                <Image src="/star.png" height={30} width={30} alt="x"/>
              </div>
              <div className={styles.text}>
                <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts”</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.users}>
          <div className={styles.pics}>
            <Image src="/Userpic 1.png" width={70} height={70} alt="x"/>
            <Image src="/Userpic 2.png" width={70} height={70} alt="x"/>
            <Image src="/Userpic 3 Active.png" width={70} height={70} alt="x"/>
            <Image src="/Userpic 4.png" width={70} height={70} alt="x"/>
            <Image src="/Userpic 5.png" width={70} height={70} alt="x"/>
          </div>
          <div className={styles.names}>
            <h3>Paulus Haverin</h3>
          </div>
          <div className={styles.job}>
            <p>Owner Ikirakenne LTD</p>
          </div>
        </div>
      </div>
      
          
      






    </main>
  );
}
