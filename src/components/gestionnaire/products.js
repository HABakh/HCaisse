import React from "react";

const products = () => {
  
        
        const products= [
        { id: 1, name: 'Vanila Ice Cream', price: '4.50$', TVA: 'Admin', creation_date: '2023-07-30', category: 'dessert' },
        { id: 2, name: 'Chocolate Cake', price: '$7.99', TVA: '123456789', creation_date: '2021-05-12', category: 'dessert' },
        { id: 3, name: 'Pepperoni Pizza', price: '$10.99', TVA: '987654321', creation_date: '2022-08-05', category: 'main course' },
        { id: 4, name: 'Caesar Salad', price: '$6.25', TVA: '789123456', creation_date: '2023-01-20', category: 'appetizer' },      
      ];
       

      return (
        <div className="user-list-container">
        <h2>Product List</h2> 
        <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>TVA</th>
                    <th>creation_date</th>
                    <th>category</th>
                </tr>
          {products.map ((product) => {
           
                    <tr>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.TVA}</td>
                        <td>{product.creation_date}</td>
                        <td>{product.category}</td>
                    </tr>
                
           
           } )}
        </table>
        
      </div>
    
    );
    
   
}
 
export default products;