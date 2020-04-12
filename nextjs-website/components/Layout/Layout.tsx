import * as React from 'react';
import Head from 'next/head';

import styles from './Layout.module.css';

import Nav from '../Navigation/Navigation';

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'Wonderfloyd Next Website'}) => (
  <div className={styles.container}>
    <Head>
      <title>{`FlowBiz | ${title}`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />
    <main className={styles.main}>
      {children}
    </main>
    <footer className={styles.footer}>
      <hr />
      <span><i>FlowBiz Hackathon-Corona 2020</i></span>
    </footer>
  </div>
)

export default Layout
