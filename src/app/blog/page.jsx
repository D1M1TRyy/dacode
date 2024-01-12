import React from 'react'
import Image from 'next/image'
import styles from "./page.module.css"

function Blog() {
  return (
    <main>
      <div className={styles.about}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>News & Articls</h1>
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
          </div>
          <div className={styles.searchBar}>
            <div className={styles.container}>
              <input type="text" placeholder='Search blog…' />
              <div className={styles.pic}>
                <Image
                  src="/search-icon.png"
                  width={20}
                  height={20}
                  alt='x'
                />
              </div>           
            </div>
          </div>
        </div>
      </div>
      <div className={styles.paragraps}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.card}>
              <div className={styles.pic}>
                <Image
                  src="/r1 p1.png"
                  fill={true}
                  alt='x'
                  className={styles.image}
                />
              </div>
              <div className={styles.title}>
                <h4>Do millennials care about saving?</h4>
              </div>
              <div className={styles.text}>
                <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
              </div>
              <div className={styles.button}>
                <button>Read more</button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.pic}>
                <Image
                  src="/r1 p2.png"
                  fill={true}
                  alt='x'
                  className={styles.image}
                />
              </div>
              <div className={styles.title}>
                <h4>Do millennials care about saving?</h4>
              </div>
              <div className={styles.text}>
                <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
              </div>
              <div className={styles.button}>
                <button>Read more</button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.pic}>
                <Image
                  src="/r1 p3.png"
                  fill={true}
                  alt='x'
                  className={styles.image}
                />
              </div>
              <div className={styles.title}>
                <h4>Do millennials care about saving?</h4>
              </div>
              <div className={styles.text}>
                <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
              </div>
              <div className={styles.button}>
                <button>Read more</button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.pic}>
                <Image
                  src="/r1 p4.png"
                  fill={true}
                  alt='x'
                  className={styles.image}
                />
              </div>
              <div className={styles.title}>
                <h4>Do millennials care about saving?</h4>
              </div>
              <div className={styles.text}>
                <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
              </div>
              <div className={styles.button}>
                <button>Read more</button>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.card}>
              <div className={styles.pic}>
                <Image
                  src="/r2 p1.png"
                  fill={true}
                  alt='x'
                  className={styles.image}
                />
              </div>
              <div className={styles.title}>
                <h4>Do millennials care about saving?</h4>
              </div>
              <div className={styles.text}>
                <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
              </div>
              <div className={styles.button}>
                <button>Read more</button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.pic}>
                <Image
                  src="/r2 p2.png"
                  fill={true}
                  alt='x'
                  className={styles.image}
                />
              </div>
              <div className={styles.title}>
                <h4>Do millennials care about saving?</h4>
              </div>
              <div className={styles.text}>
                <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
              </div>
              <div className={styles.button}>
                <button>Read more</button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.pic}>
                <Image
                  src="/r2 p3.png"
                  fill={true}
                  alt='x'
                  className={styles.image}
                />
              </div>
              <div className={styles.title}>
                <h4>Do millennials care about saving?</h4>
              </div>
              <div className={styles.text}>
                <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
              </div>
              <div className={styles.button}>
                <button>Read more</button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.pic}>
                <Image
                  src="/r2 p4.png"
                  fill={true}
                  alt='x'
                  className={styles.image}
                />
              </div>
              <div className={styles.title}>
                <h4>Do millennials care about saving?</h4>
              </div>
              <div className={styles.text}>
                <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
              </div>
              <div className={styles.button}>
                <button>Read more</button>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.card}>
              <div className={styles.pic}>
                <Image
                  src="/r3 p1.png"
                  fill={true}
                  alt='x'
                  className={styles.image}
                />
              </div>
              <div className={styles.title}>
                <h4>Do millennials care about saving?</h4>
              </div>
              <div className={styles.text}>
                <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
              </div>
              <div className={styles.button}>
                <button>Read more</button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.pic}>
                <Image
                  src="/r3 p2.png"
                  fill={true}
                  alt='x'
                  className={styles.image}
                />
              </div>
              <div className={styles.title}>
                <h4>Do millennials care about saving?</h4>
              </div>
              <div className={styles.text}>
                <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
              </div>
              <div className={styles.button}>
                <button>Read more</button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.pic}>
                <Image
                  src="/r3 p3.png"
                  fill={true}
                  alt='x'
                  className={styles.image}
                />
              </div>
              <div className={styles.title}>
                <h4>Do millennials care about saving?</h4>
              </div>
              <div className={styles.text}>
                <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
              </div>
              <div className={styles.button}>
                <button>Read more</button>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.pic}>
                <Image
                  src="/r3 p4.png"
                  fill={true}
                  alt='x'
                  className={styles.image}
                />
              </div>
              <div className={styles.title}>
                <h4>Do millennials care about saving?</h4>
              </div>
              <div className={styles.text}>
                <p>Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.</p>
              </div>
              <div className={styles.button}>
                <button>Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    
  )
}

export default Blog