
import Formulaire from './components/formulaire'
import Nav from './components/nav';
import About from './components/about';
import Hero from './components/hero';
import "./index.css";
import Sary from "./photos/gauche.png";
import Footer from './components/footer';
import './animation-library/css/slide.css';
import React from "react"

export default function App() {
    
    return(
        <>
            <Nav/>
            <Hero/>
            <About/>
            <div>
                <div className='conteneur'>
                    <img src={Sary} alt="" className='gauche' />
                    <div className='contenus_para'>
                        <h2 className='u--slideUp'>Lorem ipsum dolor sit amet,</h2>
                        <p className='u--slideUp'>Pour faire des etude et des recherche
                            des besoin</p>
                        <button className='bienvenu'>Bienvenu</button>
                    </div>
                </div>
                <Footer />
            </div>
            <Formulaire />
        </>
    )
}

