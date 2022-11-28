import React from 'react';
import './BuildControl.css';

interface Props {
  label: string;
  added: () => void;
  removed: () => void;
  disabled?: boolean;
}

const BuildControl: React.FC<Props> = (props) => (
  <div className='BuildControl'>
    <div className='Label'>{props.label}</div>
    <button className='Less' onClick={props.removed} disabled={props.disabled}>
      Less
    </button>
    <button className='More' onClick={props.added}>
      More
    </button>
  </div>
);
export default BuildControl;
