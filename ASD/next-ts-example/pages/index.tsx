import React from 'react';
import { NextPage } from 'next';
import {
  pageWithSomething,
  PageWithSomethingProps
} from '../lib/page-with-something';

interface InitialProps {}

interface Props extends InitialProps, PageWithSomethingProps {}

const IndexPage: NextPage<Props, InitialProps> = ({ something }) => {
  return (
    <>
      <h1>Index 👋</h1>
      <div>{something}</div>
    </>
  );
};

export default pageWithSomething(IndexPage);
