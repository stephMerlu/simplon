import React from 'react';
import './banniere.css';


function Banniere() {
    return (<>
        <div className="simplon">
            <div className="banniere-gauche">
                <h1 className="title">Simplon.co en Occitanie</h1>
                <p className="paragraphe">Rejoignez Simplon.co Occitanie, pour vous former aux
                    métiers du numérique, Intelligence Artificielle,
                    Administrateur Administratrice Cloud, Concepteur
                    Conceptrice Développeur, Développeuse d'Applications
                    DevOps , Technicien Technicienne Supérieur.e Système et
                    Réseaux. Nos formations sont gratuites, inclusives et
                    accessibles à tous. Diplômantes, certifiantes et
                    sans-prérequis, nos formations numériques sont en
                    présentiel ou en distanciel en fonction du parcours.</p>
                    <a className="bouton" href="https://share.hsforms.com/1QGf7Re67QA2VGITdD5oCOQ52unr?utm_medium=email&amp;_hsmi=205701520&amp;_hsenc=p2ANqtz-9_x4NjNapqsM5hs1JD6NDk6OBZLP9MyhLArk-HOrLehzqDWEL-fY5waaqeOMMnXHjVidluY-3QY3KvDnnXS1HbjkItZA&amp;utm_content=205701520&amp;utm_source=hs_email"><span>En savoir plus sur nos formations</span></a>
            </div>
                <img className="banniere-droite" src="/apprenant.jpg" alt="" />
            
        </div>
    </>
    );
}

export default Banniere;
