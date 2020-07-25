import React from 'react';

import './ocalm.scss';
import { NavLink } from 'react-router-dom';

const Ocalm = () => (
  <div className="about">
    <div className="right-part">
      ici une vidéo
    </div>
    <div className="left-part">
      <h1>Pourquoi s'inscrire à O'Calm</h1>
      <p className="who">
        Vous êtes stressé, angoissé ? Vous avez peur de ne jamais avoir le temps de faire les choses ? 
        Vous avez envie de prendre du temps pour prendre soin de vous, physiquement et mentalement ? 
        Ou peut-être avez-vous déjà l'habitude de vous relaxer à travers la méditation ou le yoga et
        vous cherchez un site qui regroupe les meilleures vidéos à ce sujet ? 
      </p>
      <h2>
        Alors O'Calm est fait pour vous.
      </h2>
      <p className="what">
        O'Calm, c'est une plateforme de streaming où vous trouverez un large éventail de vidéos 
        en rapport avec différents types de méditation, de yoga, ou encore des sons et musiques 
        relaxants. Pour l'instant nous utilisons des vidéos postées sur Youtube, avant de pouvoir proposer 
        du contenu original. 
      </p>
      <h3>O'Calm est entièrement gratuit</h3>
      <p className="why">
        Vous n'aurez pas un centime à débourser pour accéder à notre plateforme. En fait, si nous vous 
        demandons de vous inscrire, c'est pour vous laisser l'opportunité d'enregistrer vos vidéos 
        préférées afin de ne pas les perdre de vue. D'autres fonctionnalités sont à venir d'ailleurs, 
        il faut rester à l'écoute...
      </p>
      <NavLink
        to="/"
      >
        retour
      </NavLink>
    </div>
  </div>
);

export default Ocalm;
