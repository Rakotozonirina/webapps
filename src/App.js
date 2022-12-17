import { render } from '@testing-library/react';
import React, { Component } from 'react';
import "./index.css";
import Sary from "./photos/gauche.png";

class App extends Component {
    render() {
        return (
            <div className='conteneur'>
                <img src={Sary} alt="" className='gauche' />
                <div>
                    <h2>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.</h2>
                    <p>Pour faire des etude et des recherche
                        des besoin</p>
                    <button className='bienvenu'>Bienvenu</button>
                </div>
            </div>
        )
    }
}

export default App;