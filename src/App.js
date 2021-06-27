import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';



function App() {
  const [usersList, setusersList] = useState([]);
  const addUserHandle = (username,age) => {
    console.log(username,age);

    setusersList((prevUserList) => {
      return [...prevUserList, { name: username, age: age }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandle} />
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
