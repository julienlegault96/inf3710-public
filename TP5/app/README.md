# INF3710 - TP5 - Applications et Bases de données

TP5 du cours de fichiers et bases de données INF3710 à Polytechnique Montréal

## Guide d'installation

En ouvrant un terminal, il faut tout d’abord s’assurer d’être situé au bon emplacement, soit dans `./TP5/app`.

Après s’être déplacé au bon endroit, il faut exécuter la commande `npm install` qui devrait prendre un certain temps.

Après l’installation de toutes les dépendances du projet, il faut simplement exécuter la commande `npm start` et attendre que le client et le serveur se compile et se mettent en marche. Lorsque le client et le serveur seront opérationnel, une fenêtre de votre navigateur web par défaut devrait s’ouvrir et l’application devrait être opérationnelle.

Si l'interface utilisateur ne semble pas afficher de résultat dans la liste d'animaux, il se peut que l'interface ait démarrer avant que le serveur ne soit prêt. Dans ce cas, simplement rafraîchir la page jusqu'à ce que des résultats s'affichent.

## Spécifications

Notre base de données est hébergé sur un service externe. Pour pouvoir s'y connecter à l'extérieur de l'application, les informations nécessaire à la connexion se trouve dans le fichier situé à `./server/src/authentication.ts`. Le nom de la base de données nous est attribué à travers ce service et nous avons les permissions seulement le schéma public de cette base de données.
