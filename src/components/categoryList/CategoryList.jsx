import React from 'react'
import styles from './categoryList.module.css'
import Image from 'next/image'
import Link from 'next/link'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>CategoryList</h1>
      <div className={styles.categories}>
        <Link href="/blog" className={`${styles.category} ${styles.style}`}>
          <Image src="/style.png" width={32} height={32} className={styles.image} alt='Category Image' />
          Style
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.food}`}>
          <Image src="/food.png" width={32} height={32} className={styles.image} alt='Category Image' />
          Food
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.fashion}`}>
          <Image src="/fashion.png" width={32} height={32} className={styles.image} alt='Category Image' />
          Fashion
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.travel}`}>
          <Image src="/travel.png" width={32} height={32} className={styles.image} alt='Category Image' />
          Travel
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.culture}`}>
          <Image src="/culture.png" width={32} height={32} className={styles.image} alt='Category Image' />
          Culture
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.coding}`}>
          <Image src="/coding.png" width={32} height={32} className={styles.image} alt='Category Image' />
          Coding
        </Link>
      </div>
    </div>
  )
}

export default CategoryList