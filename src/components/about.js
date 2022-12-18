import React from "react"
import '../animation-library/css/bounce.css'
import '../animation-library/css/attention.css'

export default function About() {
    return(
        <>
        <h2 className='apropos u--swing'>A Propos</h2>
        <section className="about" id="about">
            <div className="a u--bounceIn">
                <div className="back1"></div>
                <h4>🏃‍♂️ Lieu de loisir</h4>
                <p>Lorem ipsum dolor sit amet,<br></br> 
                consectetur adipiscing elit. <br></br>
                Nunc vulputate libero et velit<br></br>
                interdum, ac aliquet odio mattis.</p>
            </div>
            <div className="b u--bounceIn">
                <div className="back2"></div>
                <h4>🛍 Recherche <br/> du travail</h4>
                <p>Lorem ipsum dolor sit amet,<br></br> 
                consectetur adipiscing elit. <br></br>
                Nunc vulputate libero et velit<br></br>
                interdum, ac aliquet odio mattis.</p>
            </div>
            <div className="c u--bounceIn">
                <div className="back3"></div>
                <h4>📚 Recherche de documents</h4>
                <p>Lorem ipsum dolor sit amet,<br></br> 
                consectetur adipiscing elit. <br></br>
                Nunc vulputate libero et velit<br></br>
                interdum, ac aliquet odio mattis.</p>
            </div>
            <div className="d u--bounceIn">
                <div className="back4"></div>
                <h4 id="h_4">🏃‍♂️ Jeux</h4>
                <p>Lorem ipsum dolor sit amet,<br></br> 
                consectetur adipiscing elit. <br></br>
                Nunc vulputate libero et velit<br></br>
                interdum, ac aliquet odio mattis.</p>
            </div>
        </section>
        </>
    )
}