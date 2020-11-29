import React from 'react';
import Button from '../Button'
import './style.css'

function RoomCard (props) {
    return (
        <div className="room-card">
            <img src={props.image} alt="Imagem de Quarto"/>
            <h3>{props.roomName}</h3>
            <p>{props.roomCost}</p>
            <Button action="Pré-Reserva"></Button>
        </div>
    )
}

export default RoomCard;