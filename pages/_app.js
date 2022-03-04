import * as React from 'react';
import '../styles/globals.css';
import Navbar from '../components/Navbar'
export default function MyApp(props) {

  const { Component, pageProps } = props;

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
