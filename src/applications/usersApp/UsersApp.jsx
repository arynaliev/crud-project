import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import NewUserForm from "../../components/newUserForm/NewUserForm";
import UserTable from "../../components/userTable/UserTable";
import { defaultData } from "../../components/newUserForm/NewUserForm";

const UsersApp = () => {
  const [usersList, setUsersList] = useState([defaultData]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsersList(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const addUser = (user) => {
    setUsersList([
      ...usersList,
      { ...user, name: user.firstName + "" + user.lastName },
    ]);
    console.log(usersList);
  };

  const deleteUser = (id) => {
    setUsersList(usersList.filter((el) => el.id !== id));
  };

  return (
    <div className="usersApp-container">
      <NewUserForm addUser={addUser} />
      <UserTable usersList={usersList} deleteUser={deleteUser} />
    </div>
  );
};

export default UsersApp;
