import React from "react";
import { Link } from "react-router-dom";
import wewe from "../../assets/images/logo.jpg";

const NavbarGestionnaire = () => {
  return (
    <nav className=" sticky top-0  bgcolor
    px-5 z-10	">
      <div className="border-b flex   justify-between px-5 bgcolor " >
        <label class="logo">HKCaisse</label>

        <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
        {/* <div>
          <img src={wewe} alt="logo" className="w-20 h-20" />
        </div> */}
        <ul>
          <li><Link to="/gestionnaire/Users">Les utilisateurs</Link></li>
          <li><Link to="/gestionnaire/commandes">Les commandes</Link></li>
          <li><Link to="/gestionnaire/products">Les Produits</Link></li>
          <li><Link to="/gestionnaire/factures">Les factures</Link></li>
          <li><Link class="active" to="/">Déconnexion</Link></li>
        </ul>
      </div>
      
    </nav>
  );
};

export default NavbarGestionnaire;