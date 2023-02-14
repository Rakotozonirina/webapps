import React,{useState} from 'react'
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
    const [show, setShow] = useState(true)
    return(
    <>
    <section className='ecran'id='ecran'>
        
            <div className='Login' data-tilt>
                <p className='logs'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg> <b>Continuer en tant que Google</b></p>
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
                    <a href='#' className='creat' onClick={() => setShow(false)} ><b>Crée un comptes</b></a>
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
                    <input type={'tel'} className="creer" placeholder="Telephone ...................."></input>
                </div><br></br>
                <div>
                    <input type={'text'} className="creer" placeholder="Adresse ...................."></input>
                <br></br>
                
                    <input type={'submit'} className="submit2" placeholder='Suivant'></input>
                </div><br></br>
            </div>
        </section>
    </>






    );
}
