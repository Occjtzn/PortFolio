PortFolio
Bienvenue dans PortFolio, une application web moderne développée avec React 18 et TailwindCSS, pensée pour valoriser vos projets, compétences et expériences à travers un site vitrine interactif et responsive.

📅 Description
Ce site personnel propose une navigation fluide entre les différentes sections (Accueil, Projets, À propos, Contact), tout en intégrant des animations dynamiques et des composants modulaires pour une expérience utilisateur optimale.

Développé avec un souci de performance, de lisibilité du code et d’esthétique, ce portfolio utilise des bibliothèques et outils récents comme React Scroll, Framer Motion, NextUI ou EmailJS pour enrichir l'interaction.

📚 Fonctionnalités
Navigation fluide entre sections avec react-scroll

Interface responsive optimisée pour tous les écrans

Animations d'apparition avec framer-motion

Composants UI personnalisés via @nextui-org

Formulaire de contact fonctionnel avec EmailJS

Thématisation via Tailwind et nextui-org/theme

Routing interne avec react-router-dom

🔧 Installation
Clonez le dépôt :

bash
Copier
Modifier
git clone <URL_DU_DEPOT>
Accédez au dossier :

bash
Copier
Modifier
cd PortFolio
Installez les dépendances :

bash
Copier
Modifier
yarn install
Lancez le serveur local :

bash
Copier
Modifier
yarn dev
🔹 Scripts utiles
yarn dev : Lance le serveur en mode développement

yarn build : Génère un build optimisé pour la production

yarn preview : Prévisualise le site après build

yarn lint : Analyse le code avec ESLint

yarn format : Formate le code avec Prettier

💚 Technologies utilisées
React 18

Vite (pour le bundling rapide)

TailwindCSS (design utilitaire)

React Scroll (scroll fluide)

Framer Motion (animations React)

NextUI (composants UI élégants)

EmailJS (formulaire de contact)

React Router Dom v7

SCSS / PostCSS / Autoprefixer

ESLint + Prettier (qualité de code)

🔖 Architecture du projet
csharp
Copier
Modifier
PortFolio/
├── public/
├── src/
│   ├── assets/                # Images et ressources
│   ├── components/            # Composants principaux du site
│   ├── datas/                 # Données projets (format JSON)
│   ├── pages/                 # Sections du site (Home, Projects, About, etc.)
│   ├── styles/                # Styles globaux
│   ├── App.jsx                # Composant racine
│   └── main.jsx               # Point d’entrée React
├── tailwind.config.js         # Configuration Tailwind
├── vite.config.js             # Configuration Vite
└── package.json               # Dépendances et scripts
📇 Auteur
Ce projet est conçu et développé par un développeur front-end passionné, alliant technicité et sens du design.
Il reflète une expertise en développement d’interfaces modernes, performantes et optimisées pour le web.

Pour toute collaboration ou prise de contact, rendez-vous dans la section Contact du site.
