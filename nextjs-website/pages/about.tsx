import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const AboutPage: React.FunctionComponent = () => (
  <Layout title="About">
    <h1>About</h1>
    <p>So we are stuck at home for god knows how long...</p>
    <p>Great! Lets start hacking!</p>
    <p>
      <a href="https://github.com/wonderfloyd/Hackathon-Corona/issues" target="_blank">
        Get Started
      </a>
    </p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage;
