# 1- Configuration initiale :

Initialisez un nouveau projet Node.js.
Installez les dépendances nécessaires : express, mongoose, jsonwebtoken (utilisez npm install express mongoose jsonwebtoken).
# 2- Modélisation des données :

Créez un modèle Book avec les propriétés suivantes :
title (String) : Titre du livre (obligatoire).
author (String) : Nom de l'auteur du livre.
publishedYear (Number) : Année de publication du livre.
genre (String) : Genre du livre.
# 3- Configuration de MongoDB :

Connectez votre application à une base de données MongoDB en utilisant Mongoose.
Créez une base de données appelée library et une collection books pour stocker les livres.
# 4- Authentification JWT :

Mettez en place un système d'authentification basé sur JWT.
Créez une route d'authentification (/api/login) qui p charge la validatiorendra enn des utilisateurs et générera un token JWT valide.
# 5- Routes API sécurisées :

Créez des routes API sécurisées pour effectuer les opérations CRUD sur les livres.
Assurez-vous que ces routes nécessitent un token JWT valide pour accéder aux fonctionnalités CRUD.
# 6- Tests :

Utilisez des outils comme Postman pour tester vos API.
Assurez-vous que les routes d'authentification fonctionnent correctement et génèrent des tokens JWT valides.
Vérifiez que les routes sécurisées nécessitent un token JWT valide pour accéder aux fonctionnalités CRUD.
# 7- Ressources supplémentaires :

Documentation officielle de MongoDB : https://docs.mongodb.com/
Documentation officielle de Mongoose : https://mongoosejs.com/docs/
Documentation officielle de JWT : https://jwt.io/introduction/


