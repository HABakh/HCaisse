import React from "react";
import { Link } from "react-router-dom";
import wewe from "../../assets/images/logo.jpg";

const NavbarPatron = () => {
  return (
    <nav className=" sticky top-0  bgcolor
    px-5 	">
      <div className="border-b flex   justify-between px-5 bgcolor" >
        <label class="logo">HKCaisse</label>
        <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i> </label>

        
        <ul>
          <li><Link to="/patron/StatistiqueVente">Statistique des Ventes</Link></li>
          <li><Link to="/patron/StatistiqueCommande">Statistique des commandes</Link></li>
          <li><Link class="active" to="/">Déconnexion</Link></li>
        </ul>
      </div>
      
    </nav>
  );
};

export default NavbarPatron;