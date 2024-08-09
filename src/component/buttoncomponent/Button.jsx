/* eslint-disable react/prop-types */

import './Button.css'

const Button = (props) => {
  return (

  
    <div className='allbtn'>
      <button className='btn' style={{backgroundColor:props.BgItem, color:props.ColorItem}}>
        <label>{props.ItemName}</label>
      </button>
    </div>

  
  );
}

export default Button;






