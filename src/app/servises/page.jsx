import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

function Servises() {
  return (
    <main>
      <div className={styles.offer}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>What we can offer your SaaS Business</h1>
          </div>
          <div className={styles.text}>
          <p>We have chosen to only collaborate and work with SaaS businesses, this is because our expertise lies and we know that we can provide the most value to our clients. Our team has worked with Nordic, European and American tech unicorns.</p>
        </div>  
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
      <div className={styles.schedule}>
        <div className={styles.wrapper}>
          <div className={styles.textArea}>
            <div className={styles.title}>
              <h1>Establishing online presence</h1>
            </div>
            <div className={styles.texts}>
              <p>Every SaaS website, regardless of niche, must do one thing brilliantly, which is converting visitors into users. At first glance, the site should encourage and guide visitors in a smooth way towards call-to-actions.</p>                <p>This goes hand in hand with a responsive design, meaning it needs to be apt for different devices.</p>
              <p>We use a data-driven approach to measure user response when developing the site. This method usually makes the site quicker to launch, is more cost-effective and more successful in the long run.</p>
              <p>The pages need to be search engine optimized (SEO) because it lays the foundation for the technical quality, which in turn determines how high it will rank among search results. We also make sure that your website is indexed properly.</p>
              <p>We audit your audience and get to know your target market to be able to speak to them through the website in the best possible way. By finding out their consumer behavior we can refine the website approach.</p>
            </div>
          </div>
          <div className={styles.scheduleTable}>
            <div className={styles.title}>
              <h2>Schedule a free session</h2>
            </div>
            <div className={styles.pic}>
              <Image
                src="/schedule.png"
                fill={true}
                className={styles.schedule}
                alt="x"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    
  )
}

export default Servises