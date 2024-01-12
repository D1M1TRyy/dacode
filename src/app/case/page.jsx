import React from 'react'
import Image from 'next/image'
import styles from "./page.module.css"

function Case() {
  return (
    <main>
      <div className={styles.about}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>Some of our SaaS clients</h1>
          </div>
          <div className={styles.text}>
            <p>We take your SaaS idea and make it into reality. We start with going into why and what your are looking for. Then after brainstorming on branding and strategy we are going into the details of what what and why the you want to create a website. In order to make the creation process as smooth and effective as possible then we are working in an agile/scrum way in order to make sure we can deliver on time and within budget for our clients.</p>
          </div>
        </div>
      </div>
      <div className={styles.stratege}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <div className={styles.title}>
                <h4>Lunar Strategy SaaS Marketing Agency - Rebranding of website</h4>
              </div>
              <div className={styles.text}>
                <p>We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <div className={styles.title}>
                <h4>Lunar Strategy SaaS Marketing Agency - Rebranding of website</h4>
              </div>
              <div className={styles.text}>
                <p>We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <div className={styles.title}>
                <h4>Lunar Strategy SaaS Marketing Agency - Rebranding of website</h4>
              </div>
              <div className={styles.text}>
                <p>We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <div className={styles.title}>
                <h4>Lunar Strategy SaaS Marketing Agency - Rebranding of website</h4>
              </div>
              <div className={styles.text}>
                <p>We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.</p>
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

export default Case