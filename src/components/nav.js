import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import React from 'react'
export default function Nav() {
    return(
            <section className='home'>
                <nav>
                    <ul>
                        <li><a href="#" className='active'>Accueil</a></li>
                        <li><a href="#about">A propos</a></li>
                        <li><a href="#footer">Contact</a></li>
                    </ul>
                    <button><a href='#ecran'>Connexion</a></button>
                </nav>
            </section>
    )
}
