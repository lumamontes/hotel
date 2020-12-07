import React from 'react'
import "./style.css"
import ImgRoom from '../../images/room.png';

function Gallery(props){
    return (
       <div>
           <h2 className="title">Galeria</h2>
                <figure>
                    <img className="img-gallery" src={ImgRoom} alt="Imagem Quarto"/>
                    <img className="img-gallery" src={ImgRoom} alt="Imagem Quarto"/>
                    <img className="img-gallery" src={ImgRoom} alt="Imagem Quarto"/>
                    <img className="img-gallery" src={ImgRoom} alt="Imagem Quarto"/>
                    <img className="img-gallery" src={ImgRoom} alt="Imagem Quarto"/>
                    <img className="img-gallery" src={ImgRoom} alt="Imagem Quarto"/>
                </figure>
       </div>
    )
}

export default Gallery