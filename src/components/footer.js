import React, { Children } from "react";
import Photo from "../photos/paysage.png";

const Footer = () => {
    return (
        <div className="contFooter" id="footer">
            <div>
                <h3>Type de bien recherché</h3>
                <p>
                    Non défini <br />
                    Lieu de loisir<br />
                    Travail<br />
                    Fichier<br />
                    Jeux
                </p>
            </div>
            <div>
                <h3>Outils</h3>
                <p>
                    Crédit <br />
                    Vendre<br />
                    Louer<br />
                    Actualité<br />
                    Publier une annonce
                </p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                    Nun vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
                <input type="text" placeholder="Email ... " />
            </div>
        </div>
    )
}

export default Footer;