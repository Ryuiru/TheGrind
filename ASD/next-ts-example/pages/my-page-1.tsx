import { NextPage } from 'next';

interface InitialProps {
  pageContent: string;
}

interface Props extends InitialProps {}

const MyPage: NextPage<Props, InitialProps> = ({ pageContent }) => {
  return (
    <div>
      <h1>My Page 1</h1>
      <div>{pageContent}</div>
    </div>
  );
};

MyPage.getInitialProps = async ctx => {
  if (ctx.query.someUrlQueryParameter) {
  }
  // Must return InitialProps.
  return { pageContent: 'Hello World!' };
};

export default MyPage;
