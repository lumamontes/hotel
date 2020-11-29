import React from 'react';
import './style.css'

function ComCard (props) {
    return (
      <div class="elipse">
          {props.icon}
          <span>{props.comodidade}</span>
     </div>
    )
}

export default ComCard;