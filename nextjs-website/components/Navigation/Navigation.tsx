import * as React from 'react';
import Link from 'next/link';

import styles from './Navigation.module.css';

const Nav = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>{' '}
      |{' '}
      <Link href="/about">
        <a>About</a>
      </Link>{' '}
      |{' '}
      <Link href="/posts">
        <a>Users List</a>
      </Link>
    </nav>
  </header>
)

export default Nav;