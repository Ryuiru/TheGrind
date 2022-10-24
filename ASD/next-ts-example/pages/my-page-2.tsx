import React from 'react';
import { NextPageContext } from 'next';

interface InitialProps {
  pageContent: string;
}

interface Props extends InitialProps {}

interface State {}

class MyPage extends React.Component<Props, State> {
  public static async getInitialProps(
    ctx: NextPageContext
  ): Promise<InitialProps> {
    if (ctx.query.someUrlQueryParameter) {
    }
    // Must return InitialProps.
    return { pageContent: 'Hello World!' };
  }

  render() {
    return (
      <div>
        <h1>My Page 2</h1>
        <div>{this.props.pageContent}</div>
      </div>
    );
  }
}

export default MyPage;
