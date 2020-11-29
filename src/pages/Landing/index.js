import React from 'react';
import './style.css';
import Header from '../../assets/Components/Header'
function Landing() {
    return (
        <section id="landing-container" className="container">
            <div className="homepage-container">
                <Header />
                <div className="homepage-text-content">
                    <h2> Bem vindo ao</h2> <br></br>
                    <h1 className="title">Hotel Brasil</h1>
                </div>
            </div>

            
        </section>
    )
}

export default Landing;