import React from 'react';
interface Props {
  children: React.ReactNode;
}
const Auxiliary: React.FC<Props> = (props) => <>{props.children}</>;

export default Auxiliary;
