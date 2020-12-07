import React from 'react';
import Button from '../Button'
import './style.css'

function RoomCard (props) {
    return (
        <div className="room-card">
            <img src={props.image} alt="Imagem de Quarto"/>
            <h4>{props.roomName}</h4>
            
            <Button action="Reservar"></Button>
            
            <p>{props.roomCost}</p>
        </div>
    )
}

export default RoomCard;