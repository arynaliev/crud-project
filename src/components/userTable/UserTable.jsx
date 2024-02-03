import React from "react";
import "./userTable.style.css";

const UserTable = ({ usersList, deleteUser }) => {
  return (
    <div className="userTable-container">
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Phone</th>
            <th>email</th>
            <th>Country</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((el, index) => (
            <tr key={index}>
              <td>{el.name}</td>
              <td>{el.phone}</td>
              <td>{el.email}</td>
              <td>{el.country}</td>
              <td>{new Date().getFullYear() - el.birthYear || null}</td>
              <td>
                <button id="delete-btn" onClick={() => deleteUser(el.id)}>
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
