import React, { Component } from 'react';
interface Props {
  children: React.ReactNode;
}
const Auxiliary: React.FC<Props> = (props) => <>{props.children}</>;

export default Auxiliary;

// import * as React from 'react';

// export interface AuxProps {
//   children: React.ReactNode;
// }

// const Auxiliary = (props: AuxProps) => props.children;

// export default Auxiliary;
