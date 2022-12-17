import { render } from '@testing-library/react';
import React, { Component } from 'react';
import Apropos from "./components/Apropos.js";
import "./index.css";

class App extends Component {
    render() {
        return (
            <div className='conteneur'>
                <Apropos titre="Lieu de loisir"></Apropos>
                <Apropos titre="Recherche du travail"></Apropos>
                <Apropos titre="Recherche de document"></Apropos>
                <Apropos titre="Jeux"></Apropos>
            </div>
        )
    }
}

export default App;