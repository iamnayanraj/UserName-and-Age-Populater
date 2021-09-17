import React, { useState } from "react";
import AddUser from "./component/Users/AddUser";
import UserList from "./component/Users/UserList";
function App() {
  const [userList, setUserList] = useState([]);
  const addUserChangeHandler = (userName, age) => {
    setUserList((prevState) => {
      return [
        ...prevState,
        { name: userName, age: age, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserChangeHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
