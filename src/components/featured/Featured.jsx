import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}><b>Hi there!</b> Discover my stories and creative ideas.</h1>
      <div className={styles.post}>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image src='/p1.jpeg' alt='Image Main' fill className={styles.image}/>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p className={styles.postDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius explicabo aliquam aut, perspiciatis assumenda voluptatem, dolorem officia totam fugit vero impedit eos amet recusandae inventore voluptates accusamus quisquam voluptas libero.</p>
            <button className={styles.button}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured