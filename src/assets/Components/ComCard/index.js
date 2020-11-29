import React from 'react';
import './style.css'

function ComCard (props) {
    return (
      <div class="elipse">
        <img src={props.image} alt=""/>
         <span>{props.comodidade}</span>
     </div>
    )
}

export default ComCard;