import React from "react";

function Commandes() {
  
    const commandes= [
        { id: 1, name: 'John Doe' , email: 'jon@gmail.com',phonenumber: '123456789'},
        { id: 2, name: 'Jane Smith',email: 'jabe@gmail.com',phonenumber: '123456789' },
        { id: 3, name: 'Alice Johnson' ,email: 'alice@gmail.com',phonenumber: '123456789'},
        { id: 4, name: 'Bob Brown',email: 'bob@gmail.com',phonenumber: '123456789' },
      ];
       

      return (
        <div className="user-list-container">
        <h2>List des commandes</h2> 
        <table>
                <tr>
                    <th>id</th>
                    <th>quantity</th>
                    <th>order</th>
                    <th>product</th>
                </tr>
          {commandes.map ((commande) => {
           
                    <tr>
                        <td>{commande.id}</td>
                        <td>{commande.quantity}</td>
                        <td>{commande.order}</td>
                        <td>{commande.product}</td>
                    </tr>
                
           
           } )}
        </table>
        
      </div>
    
    );
    };

export default Commandes;