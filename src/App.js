
import Formulaire from './components/formulaire'
import React from 'react';
import Nav from './components/nav';
import About from './components/about';
import Hero from './components/hero';
import "./index.css";
import Sary from "./photos/gauche.png";
import Footer from './components/footer';
import './animation-library/css/slide.css';
import Bord from "./photo/bord.png";
import profilBord from "./photo/profilBord.png";
import village from "./photo/village.png";
import profilVillage from "./photo/profilVillage.png";
import antsanitia from "./photo/antsanitia.png";
import profilAntsanitia from "./photo/profilAntsanitia.png";
import ankarafantsika from "./photo/Ankarafantsika.png";
import profilAnkarafantsika from "./photo/profilAnkarafantsika.png";
import logoHomme from "./photo/homme.png";

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
                        <h2 className='u--slideUp'>Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit.</h2>
                        <p className='u--slideUp'>Pour faire des etude et des recherche
                            des besoin</p>
                        <button className='bienvenu'>Bienvenu</button>
                    </div>
                </div>
                <Footer />
            </div>
            <Formulaire/>
                           <div className="modal">
                <div className='contLogo'>
                    <img src={logoHomme} alt="" /> <h2>Lieu de loisir</h2>
                </div>
                <div className='contGD'>
                    <div className='conteneur'>
                        <div className='contImage'>
                            <img src={Bord} alt="" className="bord" />
                            <img src={profilBord} alt="" className='profilBord' />
                        </div>

                        <div className='partieDroite'>
                            <h2>Livia Min</h2>
                            <h2 className='lieu'>Bord de la mer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc vulputate libero et
                                velit interdum, ac aliquet odio mattis.</p>
                        </div>
                    </div>
                    <div className='conteneur'>
                        <div className='contImage'>
                            <img src={village} alt="" className="bord" />
                            <img src={profilVillage} alt="" className='profilBord' />
                        </div>

                        <div className='partieDroite'>
                            <h2>Ferdinoh Doh</h2>
                            <h2 className='lieu'>Antsanitia</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc vulputate libero et
                                velit interdum, ac aliquet odio mattis.</p>
                        </div>
                    </div>
                </div>
                <div className='contGD'>
                    <div className='conteneur'>
                        <div className='contImage'>
                            <img src={antsanitia} alt="" className="bord" />
                            <img src={profilAntsanitia} alt="" className='profilBord' />
                        </div>

                        <div className='partieDroite'>
                            <h2>Livia Min</h2>
                            <h2 className='lieu'>Village touristique</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc vulputate libero et
                                velit interdum, ac aliquet odio mattis.</p>
                        </div>
                    </div>
                    <div className='conteneur'>
                        <div className='contImage'>
                            <img src={ankarafantsika} alt="" className="bord" />
                            <img src={profilAnkarafantsika} alt="" className='profilBord' />
                        </div>

                        <div className='partieDroite'>
                            <h2>Revikah Bellah</h2>
                            <h2 className='lieu'>Bord de la mer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Nunc vulputate libero et
                                velit interdum, ac aliquet odio mattis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

