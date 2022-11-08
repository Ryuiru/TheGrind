import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';
interface PropsLogo {
  height?: string;
}
const logo: React.FC<PropsLogo> = (props) => (
  <div className='Logo' style={{ height: props.height }}>
    <img src={burgerLogo} alt='Your Future Burger' />
  </div>
);
export default logo;
