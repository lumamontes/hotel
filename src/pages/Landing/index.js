import React from 'react';
import './style.css';
import Header from '../../assets/Components/Header'
import CamCard from '../../assets/Components/ComCard';
import RoomCard from '../../assets/Components/RoomCard'
import Footer from '../../assets/Components/Footer';
import ImgRoom from '../../assets/images/room.png';
import WifiIcon from '../../assets/images/wifi.svg';
import CoffeIcon from '../../assets/images/coffee-cup.svg';
import EnergyIcon from '../../assets/images/lighting.svg';
import { MapContainer, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


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
                    <CamCard image={WifiIcon} comodidade="Wifi"></CamCard>
                    <CamCard image={CoffeIcon} comodidade="Café Regional"></CamCard>
                    <CamCard image={EnergyIcon} comodidade="Gerador"></CamCard>
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
                <h2 className="title">Galeriaaaa</h2>
                <figure>
                    <img src={ImgRoom} alt="Imagem Quarto"/>
                    <img src={ImgRoom} alt="Imagem Quarto"/>
                    <img src={ImgRoom} alt="Imagem Quarto"/>
                    <img src={ImgRoom} alt="Imagem Quarto"/>
                    <img src={ImgRoom} alt="Imagem Quarto"/>
                </figure>
            </div>
            <div className="map-content">
            <MapContainer 
            center={[0.048897,-51.1004567]}
            zoom={15}
            style={{width: '100%', height: '100%'}}
            >
            
            <TileLayer 
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibHVtYW1vbnRlcyIsImEiOiJja2c2enN2bGgwMmZrMnFwYmsyMnd1eDJpIn0.j3nJhNinwAXTGG1Qfe6kPQ`}
            />
            </MapContainer>
            
            </div>
            <Footer></Footer>
        </section>
    )
}

export default Landing;