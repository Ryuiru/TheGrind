import React from 'react';
import App, { AppInitialProps, AppContext } from 'next/app';
import {
  appWithSomething,
  AppWithSomethingProps
} from '../lib/app-with-something';
import { Header } from '../components/Header';

interface InitialProps extends AppInitialProps {}
interface Props extends InitialProps, AppWithSomethingProps {}
interface State {}

export class MyApp extends App<Props, State> {
  static async getInitialProps({
    Component,
    ctx
  }: AppContext): Promise<InitialProps> {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, something } = this.props;

    return (
      <>
        <Header />
        <h1>Custom App Component</h1>
        <p>{something}</p>
        <Component {...pageProps} />
      </>
    );
  }
}

export default appWithSomething(MyApp);
