'use client'
import Link from 'next/link'
import styles from './authLinks.module.css'
import { useState } from 'react'
import { signOut } from 'next-auth/react'
const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  // temporary
  const status = "authenticated"
  return (
    // Toán tử 3 ngôi check xem trạng thái của người dùng đang login hay không login. Nếu không login hiện login kèm đường dẫn. Ngược lại hiện tên và logout
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link} onClick={signOut}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks