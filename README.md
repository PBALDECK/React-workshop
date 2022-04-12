# Workshop React

Bonjour à tous,

Avant de reprendre nos cours de **React**, je vous donne un exercice afin de revoir les bases des interactions entre une webapp et un serveur.

Dans cet exercice, vous devrez utiliser des outils comme **useState**, **useEffect** et **Fetch**

Ceci sera une base de cours qui évolueront vers l'ajout de fonctionnalité de type **dashboard**

# Quelques règles à bien prendre en compte

- **Ceci est un exercice individuel et obligatoire**
- **La livraison de vos travaux devront se faire sur un repository**
- **La date de livraison est au plus tard le mercredi 13 Avril 18h**
- **Vous devez impérativement avoir un commit par feature réalisée**

Pour ceux qui n'auront pas respecté ces règles seront notés **hors sujet**

# Instructions

Pour bien commencer, vous devez faire un **fork** de ce projet afin de le dupliquer dans votre propre compte GitHub.

Vous trouverez dans ce repository une app (_blog like_) en partie codée dont il manque volontairement des fonctionnalités.

Dans le projet, il y a une base de données au format json qui vous permettra de simuler les interactions api.

> Pour lancer le serveur (http://localhost:3004/)

yarn run server or npm run server

> Pour lancer l'app (http://localhost:3000/)

npm start or yarn start

# Les fonctionnalités attendues (MVP)

- Avoir sur votre Homepage l'affichage des vos posts

- Créer ou éditer un post

- Associé une photo à un post

- Associé un auteur à un post

- Détruire un post

- Le nom de l'auteur devra être visible dans le post

- Avoir une page listant l'ensemble des auteurs

- Créer ou éditer un auteur

- Détruire un auteur

# Aides

Le projet est écrit en **Typescript** dans le but de vous faire voir son utilisation et cela va vous aider par les nombreuses définitions disponibles dans le projet.

Sur chaque fichier dans le dossier api vous avez la **base url** fournit.

Les composants dans le dossier **private** ne sont pas à modifier.

Le design a été fait via Bulma, si besoin vous avez la documentation [ici](https://bulma.io)

# Notes

Le design n'a pas d'importance ,mais vous êtes libre de changer.

Vous êtes libre sur votre approche, vous pouvez faire de simple requête ou utiliser les librairies évoqué pendant le 1er cours.

# Pour aller plus loin

- Avoir un système de [pagination](https://bulma.io/documentation/components/pagination/) sur chaque page listant des données

- Un système de filtre par searchQuery (**_non locale_**)

- Un sytème de filtre par auteur (**_non locale_**)

\***_non-locale_** : ne change pas seulement les éléments présents dans l'application, mais effectue le traitement via un appel serveur

# Evaluations

- **MVP** 12 points

- **Clean code** 3 points

- **Pour aller plus loin** 5 points

\***_Clean code_** : ne pas avoir d'erreurs de type, ou l'utilisation de **any** pour Typescript, une architecture propre.
