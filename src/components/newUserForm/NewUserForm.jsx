import React, { useState } from "react";
import "./newUserForm.style.css";
import { v4 as uuidv4 } from "uuid";

export const defaultData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  birthYear: "",
  country: "",
};

const NewUserForm = ({ addUser }) => {
  const [newUser, setNewUser] = useState(defaultData);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //  console.log(newUser);
    addUser(newUser);
    setNewUser(defaultData);
  };

  const onInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value, id: uuidv4() });
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmitHandler}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={newUser.firstName}
          onChange={onInputChange}
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={newUser.lastName}
          onChange={onInputChange}
        />

        <label>Phone</label>
        <input
          type="number"
          name="phone"
          value={newUser.phone}
          onChange={onInputChange}
        />

        <label>email</label>
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={onInputChange}
        />

        <label>Birth Year</label>
        <input
          type="number"
          name="birthYear"
          value={newUser.birthYear}
          onChange={onInputChange}
        />

        <label>Country</label>
        <select value={newUser.country} name="country" onChange={onInputChange}>
          <option value="USA">USA</option>
          <option value="Russia">Russia</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Japan">Japan</option>
          <option value="France">France</option>
        </select>
        {/* <input type="text" name="country" onChange={onInputChange} /> */}

        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default NewUserForm;
