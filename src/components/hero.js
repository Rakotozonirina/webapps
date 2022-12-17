import React from 'react'
import '../animation-library/css/rotate.css'
import '../animation-library/css/slide.css'

export default function Hero() {
    return(
            <section className='hero'>
                <section className='left-hero'>
                    <h1>LA TECHNOLOGIE</h1>
                    <h3>Quel est ce que la technologie ?</h3>
                    <p>La technologie est l'étude des outils et des techniques. Le terme désigne les observations sur l'état de l'art aux diverses périodes historiques, en matière d'outils et de savoir-faire. Il comprend l'art, l'artisanat, les métiers, les sciences appliquées et éventuellement les connaissances.</p>
                    <div><button>Voir plus <svg  className='u--slideLeft' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button></div>
                </section>
                <section className='right-hero'>
                    <div className='image_one u--rotateUpLeft'></div>
                    <div className='image_two u--rotateUpRight'></div>
                    <div className='image_three u--rotateDownLeft'></div>
                    <div className='image_four u--rotateDownRight'></div>
                </section>
            </section>
    )
}