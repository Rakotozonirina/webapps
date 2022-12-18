import React from 'react'
import '../vanilla-tilt'
export default function Formulaire() {
    const readFile = () => {
        var reader = new FileReader();
        var file = document.getElementById('demo').files[0];

        reader.onload = function(e) {
            document.getElementById('result').src = e.target.result;
        
        }
        reader.readAsDataURL(file);

    }


        const afficher = () => {
            document.querySelector('.ecran2').classList.toggle('active')
        }


    return(
    <>
    <section className='ecran'>
        
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
                    <input type={'submit'} className="submit" value={"Connexion"}></input>
                </div><br></br>
                <div className='conth3'>
                    <h3>Pas de comps?</h3>
                    <a href='#' className='creat' onClick={afficher} ><b>Crée un comptes</b></a>
                </div>
            </div>
        </section> 




        <section className='ecran2'>
            <div className='Login2' data-tilt>
                <label>
                    <input type={'file'} id="demo" hidden />
                    <span  className="av" id='result' onChange={readFile} ></span>
                </label><br></br><br></br>
                
                <div className='name'>
                    <input type={'text'} className="creer" placeholder="Entrer votre Nom"></input>
                    <input type={'text'} className="creer" placeholder="Entrer votre Prenom "></input>
                </div><br></br>
                <div>
                    <input type={'email'} className="creer" placeholder=" Entrer votre Email"></input>
                </div><br></br>
                <div>
                    <input type={'password'} className="creer" placeholder="Mots de pass"></input>
                </div><br></br>
                
                <div>
                    <input type={'password'} className="creer" placeholder="confirmer Mots de pass"></input>
                </div><br></br>
                <div>
                    <input type={'tel'} className="creer" placeholder="Telephone"></input>
                </div><br></br>
                <div>
                    <input type={'text'} className="creer" placeholder="Adresse"></input>
                <br></br>
                
                    <input type={'submit'} className="submit2" value={"Suivant➡ "}></input>
                </div><br></br>
            </div>
        </section> 
   
    </>






    )
}
