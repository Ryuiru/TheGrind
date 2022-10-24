import React from 'react';
import { NextPageContext, NextPage } from 'next';

export interface PageWithSomethingProps {
  something: string;
}

interface PageWithSomethingInitialProps extends PageWithSomethingProps {}

export const pageWithSomething = <
  PageProps extends PageWithSomethingProps,
  PageInitialProps extends {}
>(
  PageComponent: NextPage<PageProps, PageInitialProps>
) =>
  class PageWithSomething extends React.Component<PageProps> {
    static displayName = 'PageWithSomething(Page)';

    static async getInitialProps(
      ctx: NextPageContext
    ): Promise<PageWithSomethingInitialProps & PageInitialProps> {
      const initialProps = PageComponent.getInitialProps
        ? await PageComponent.getInitialProps(ctx)
        : // If the page component doesn't need initial props
          // we use an empty object
          ({} as PageInitialProps);

      return {
        ...initialProps,
        something: 'Something from the PageWithSomethingProps'
      };
    }

    render() {
      return <PageComponent {...this.props} something={this.props.something} />;
    }
  };
