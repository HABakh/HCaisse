import React from "react";




function Users() {
  
    const users= [
        { id: 1, name: 'John Doe' , email: 'jon@gmail.com',phonenumber: '123456789'},
        { id: 2, name: 'Jane Smith',email: 'jabe@gmail.com',phonenumber: '123456789' },
        { id: 3, name: 'Alice Johnson' ,email: 'alice@gmail.com',phonenumber: '123456789'},
        { id: 4, name: 'Bob Brown',email: 'bob@gmail.com',phonenumber: '123456789' },
      ];
       

      return (
        <div className="user-list-container">
        <h2>User List</h2> 
        <table>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>phonenumber</th>
                </tr>
          {users.map ((user) => {
           
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phonenumber}</td>
                    </tr>
                
           
           } )}
        </table>
        
      </div>
    
    );
    };

export default Users;