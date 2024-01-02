import React, { useEffect, useState } from "react";
import Usercard from "./Usercard";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      {users.map((user, index) => (
        <Usercard user={user} key={index} />
      ))}
    </div>
  );
}

export default UserList;
