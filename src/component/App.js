import '../style/App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHome from './NavbarHome';
import Accueil from './Accueil';
import Produits from './Produits';
import Produit from './Produit';
import callof from '../assets/callof.jpg';
import valorant from '../assets/valorant.jpg'

function App() {
  const produits =[
    {
      id:1,
      nom: "call of duty MW2",
      img: callof,
      desc: "Call of Duty : Modern Warfare 2 (ou simplement Modern Warfare 2) est un jeu de tir à la première personne développé par Infinity Ward, et édité par Activision."
    },
    {
      id:2,
      nom: "valorant",
      img: valorant,
      desc: "Valorant (stylisé comme VALORANT ) est un jeu de tir de héros à la première personne gratuit développé et publié par Riot Games , pour Microsoft Windows . Teasé pour la première fois sous le nom de code Project A en octobre 2019, le jeu a commencé une période de bêta fermée avec un accès limité le 7 avril 2020, suivie d'une sortie officielle le 2 juin 2020. Le développement du jeu a commencé en 2014. Valorant s'en inspire de lasérie de tireurs tactiques Counter-Strike , empruntant plusieurs mécanismes tels que le menu d'achat, les modèles de pulvérisation et l'imprécision lors du déplacement."
    }
  ]
  let boolean = false
  return (
    <div className="App">
      <NavbarHome produits={produits}/>
      <Routes>
        <Route path="/" element={<Accueil />}/>
        <Route path="/produits" element={<Produits produits={produits}/>}/>
        <Route path="/produit/:id" element={ <Produit produits={produits}/>}/>      
      </Routes>
    </div>
  );
}

export default App;
