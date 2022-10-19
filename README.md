### pour lancer le projet:

lancez les commandes 

```
    cd <chemin_vers_dossier_tp1_et_2>
    npm i
    npm start
```

### Aide

Des commentaires seront insérés dans le code afin de vous expliquez certains points

### Librairies utilisés:

react-bootstrap:
    utilisé pour la partie design du projet, afin d'éviter de perdre du temps sur
    du css, le react bootstrap est utilisé via l'import dans app.js, puis il nous reste plus qu'à utiliser les composants à notre disposition
    lien documentation react-bootstrap: https://react-bootstrap.github.io/

react-router-dom:
    utilisé afin de gérer le système de routes de notre application, nous utiliserons le BrowserRouter dans index.js, et les Routes et Route dans App.js. Normalement, il faudrait également utilisé le composant Link, mais en utilisant du bootstrap, il vaut mieux passer par la librairie react-router-bootstrap (question de design)
    lien documentation: https://reactrouter.com/en/v6.3.0/getting-started/overview

react-router-bootstrap:
    N'est pas a utilisé si vous n'utilisez pas bootstrap, il permet de facilité la liaison entre notre système de routing et nos composants bootstrap. Il est uniquement utilisé dans le composant NavbarHome.js
    Lien documentation (exemple très parlant): https://www.npmjs.com/package/react-router-bootstrap

