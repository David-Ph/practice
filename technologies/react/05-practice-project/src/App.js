import React, {useState} from 'react';

import UserInput from './components/User/UserInput';
import UserList from './components/User/UserList';

function App() {
  const [users, setUsers] = useState([
    {username: "MaoMao", age: 24, id: 1},
    {username: "Fey Syllenae", age: 18, id: 2}
  ])

  const addUserHandler = (user) => {
    console.log(user);
    setUsers((prevState) => {
      return [...prevState, user];
    })
  }

  return (
    <div>
      <section id="user-input">
        < UserInput onAddUser={addUserHandler}/>
      </section>
      <section id="user-list">
        < UserList users={users}/>
      </section>
    </div>
  );
}

export default App;
