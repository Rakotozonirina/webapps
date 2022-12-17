import React from 'react'
import '../vanilla-tilt'
export default function Formulaire() {
    return(
        <><div className='ecran'>
            <div className='Login' data-tilt>
                <p className='logs'><b>Continuer en tant que Google</b></p>
                <p>Ou</p>
                <div>
                    <input type={'email'} className="input" placeholder="Numero telephone ou Email"></input>
                </div><br></br>
                <div>
                    <input type={'password'} className="input" placeholder="Mots de pass"></input>
                </div><br></br>
                <div>
                    <input type={'submit'} className="submit" value={"Login"}></input>
                </div><br></br>
                <div className='conth3'>
                    <h3>Pas de comps?</h3>
                    <h3 className='creat'><b>Crée un comptes</b></h3>
                </div>
            </div>
          </div> 
        </>
    )
}
