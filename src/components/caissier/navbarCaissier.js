import React from "react";
import { Link } from "react-router-dom";


const NavbarCaissier = () => {
  return (
    <nav className=" sticky top-0  bgcolor
    px-5 	z-10">
      <div className="border-b flex   justify-between px-5 bgcolor" >
        <label class="logo">HKCaisse</label>
        
    
      <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
        
      </label>
      <ul>
        <li><Link to="/caissier/productlist">Liste des produits</Link></li>
        <li><Link to="/caissier/billprint">Impression des factures</Link></li>
        <li><Link class="active" to="/">Déconnexion</Link></li>
      </ul>
      </div>
    </nav>
  );
};

export default NavbarCaissier;