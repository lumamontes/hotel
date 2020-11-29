import React from 'react';
import './style.css';
import Header from '../../assets/Components/Header'
import CamCard from '../../assets/Components/ComCard';
import RoomCard from '../../assets/Components/RoomCard'
import ImgRoom from '../../assets/images/room.png'

function Landing() {
    return (
        <section id="landing-container">
            <div className="homepage-container">
                <Header />
                <div className="homepage-text-content">
                    <h2> Bem vindo ao</h2> <br></br>
                    <h1>Hotel Brasil</h1>
                </div>
            </div>

            <div className="amenities-content container">
                <h2 className="title"> Comodidades</h2>
                <div className="camcards">
                    <CamCard comodidade="Wifi"></CamCard>
                    <CamCard comodidade="Café Regional"></CamCard>
                    <CamCard comodidade="Gerador"></CamCard>
                </div>
            </div>

            <div className="room-content container">
                 <h2 className="title"> Quartos</h2>
                 <div className="room-cards">
                    <RoomCard image={ImgRoom} roomName="Suite Single" roomCost="$90,00"></RoomCard>
                    <RoomCard image={ImgRoom} roomName="Suite Single" roomCost="$90,00"></RoomCard>
                    <RoomCard image={ImgRoom} roomName="Suite Single" roomCost="$90,00"> </RoomCard>
                </div>

            </div>
            
        </section>
    )
}

export default Landing;