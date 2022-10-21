import React, { useState } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const clear = () => {
    setUsers([]);
  };

  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <div className="App grid m-4  justify-center">
      <h1 className="text-3xl font-bold underline text-red-700 my-2">Hello</h1>
      <button
        onClick={getUsers}
        className="bg-yellow-400 hover:bg-yellow-600 p-2 my-2"
      >
        Get data
      </button>
      <h1 className="font-bold text-2xl">user:</h1>
      <ul>
        {users.map(({ id, first_name, last_name, email }) => (
          <li className="bg-slate-200" key={id}>
            {" "}
            Name: {first_name} {last_name} <br></br> Email:{email}
          </li>
        ))}
      </ul>
      <button
        onClick={clear}
        className="bg-red-600 hover:bg-red-700 shadow-2xl shadow-black p-2 my-2"
      >
        Clear
      </button>
    </div>
  );
}

export default App;
