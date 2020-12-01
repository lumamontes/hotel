import React from 'react';
import { FaInstagramSquare, FaWhatsappSquare, FaFacebookSquare, FaEnvelope, FaArrowAltCircleUp } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './style.css'

function Footer() {
    return (
        <footer className="footer-content">
            <div className="contacts">
            <h1 className="title">Hotel Brasil</h1>
                <div>
                    <FaEnvelope className="icon"></FaEnvelope>
                    <Link to=""> lorem ipsum </Link>
                </div>

                <div>
                    <FaInstagramSquare></FaInstagramSquare>
                    <Link to="">lorem ipsum</Link>
                </div>

                <div>
                    <FaWhatsappSquare></FaWhatsappSquare>
                    <Link to="">lorem ipsum</Link>
                </div>

                <div>
                    <FaFacebookSquare></FaFacebookSquare>
                    <Link to="">lorem ipsum</Link>
                </div>
            </div>

                <Link to="https://www.github.com/lumamontes/hotel/graphs/contributors" target="_blank"><i>por EQ</i></Link>

                <div className="scroll-up">
                    <Link to="">
                    <FaArrowAltCircleUp></FaArrowAltCircleUp>
                    </Link>
                </div>
        </footer>
    )
}

export default Footer;
