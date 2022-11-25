import React from 'react';
import Link from 'next/link';

export const Header: React.FunctionComponent = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Index</a>
        </Link>
      </li>
      <li>
        <Link href="/my-page-1">
          <a>My Page 1</a>
        </Link>
      </li>
      <li>
        <Link href="/my-page-2">
          <a>My Page 2</a>
        </Link>
      </li>
    </ul>
  );
};
