import React from 'react';
import App, { AppProps, AppInitialProps, AppContext } from 'next/app';

export interface AppWithSomethingProps {
  something: string;
}

interface InitialProps extends AppWithSomethingProps, AppInitialProps {}

interface Props extends InitialProps, AppProps {}

export const appWithSomething = (AppComponent: typeof App) => {
  return class AppWithSomething extends React.Component<Props> {
    static displayName = 'AppWithSomething(App)';

    static async getInitialProps(context: AppContext): Promise<InitialProps> {
      const appProps = AppComponent.getInitialProps
        ? await AppComponent.getInitialProps(context)
        : { pageProps: {} };

      return {
        ...appProps,
        something: 'Something from the AppWithSomething HOC'
      };
    }

    render() {
      const { something } = this.props;
      return <AppComponent {...this.props} something={something} />;
    }
  };
};
