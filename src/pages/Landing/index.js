import React from 'react';
import './style.css';
import Header from '../../assets/Components/Header'
import CamCard from '../../assets/Components/ComCard';
import RoomCard from '../../assets/Components/RoomCard'
import Footer from '../../assets/Components/Footer';
import ImgRoom from '../../assets/images/room.png';

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

            <div className="about-container container">
                <h2 className="title">Sobre</h2>

                <div className="about-intro">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. asperiores harum animi adipisci numquam magnam, quo fugiat quia impedit!</p>
                </div>

                <div className="about-info" >
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tenetur voluptatibus ipsa hic cumque unde impedit deserunt ab veniam, at labore, excepturi necessitatibus exercitationem laudantium assumenda facere nisi ducimus. Rem. <br></br>
                    <br></br>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tenetur voluptatibus ipsa hic cumque unde impedit deserunt ab veniam, at labore, excepturi necessitatibus exercitationem laudantium assumenda facere nisi ducimus. Rem.</p>

                    <img src={ImgRoom} alt="Imagem Quarto"/>
                </div>
            </div>

            <div className="gallery container">
                <h2 className="title">Galeria</h2>
                <figure>
                    <img src={ImgRoom} alt="Imagem Quarto"/>
                    <img src={ImgRoom} alt="Imagem Quarto"/>
                    <img src={ImgRoom} alt="Imagem Quarto"/>
                    <img src={ImgRoom} alt="Imagem Quarto"/>
                    <img src={ImgRoom} alt="Imagem Quarto"/>
                    <img src={ImgRoom} alt="Imagem Quarto"/>
                    <img src={ImgRoom} alt="Imagem Quarto"/>
                </figure>
            </div>

            <Footer></Footer>
        </section>
    )
}

export default Landing;