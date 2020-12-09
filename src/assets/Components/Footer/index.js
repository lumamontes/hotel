import React from 'react';
import { FaInstagramSquare, FaWhatsappSquare, FaFacebookSquare, FaEnvelope, FaArrowAltCircleUp } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './style.css'

function Footer() {
    return (
        <footer className="footer-content">
            <h1 className="title">Hotel Brasil</h1>
            <div className="contacts">
                <div>
                    <Link>
                        <FaEnvelope className="icon"></FaEnvelope>
                    </Link>
                </div>

                <div>
                    <Link>
                        <FaInstagramSquare></FaInstagramSquare>
                    </Link>
                </div>

                <div>
                    <Link>
                        <FaWhatsappSquare></FaWhatsappSquare>
                    </Link>
                </div>

                <div>
                    <Link>
                        <FaFacebookSquare></FaFacebookSquare>
                    </Link>
                </div>

                <div>
                <Link className="scroll-up" to="">
                    <FaArrowAltCircleUp></FaArrowAltCircleUp>
                    </Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer;
