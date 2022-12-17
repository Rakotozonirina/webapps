import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default function Nav() {
    return(
            <section className='home'>
                <nav>
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">A propos</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <button>Connexion</button>
                </nav>
            </section>
    )
}
