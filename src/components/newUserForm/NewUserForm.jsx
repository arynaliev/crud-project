import React, { useState } from "react";
import "./newUserForm.style.css";
import { v4 as uuidv4 } from "uuid";

export const defaultData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  birthDate: "",
  country: "",
};

const NewUserForm = ({ addUser }) => {
  const [newUser, setNewUser] = useState(defaultData);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addUser(newUser);
    setNewUser(defaultData);
  };

  const onInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value, id: uuidv4() });
  };

  return (
    <div className="form-container">
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            required
            type="text"
            name="firstName"
            value={newUser.firstName}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            required
            type="text"
            name="lastName"
            value={newUser.lastName}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input
            required
            type="number"
            name="phone"
            value={newUser.phone}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input
            required
            type="email"
            name="email"
            value={newUser.email}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="birthDate">Birth Date</label>
          <input
            required
            type="date"
            name="birthDate"
            value={newUser.birthDate}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label htmlFor="country">Country</label>
          <select
            required
            value={newUser.country}
            name="country"
            onChange={onInputChange}
          >
            <option value="USA">USA</option>
            <option value="Russia">Russia</option>
            <option value="Kyrgyzstan">Kyrgyzstan</option>
            <option value="Japan">Japan</option>
            <option value="France">France</option>
          </select>
        </div>

        <button id="addBtn" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default NewUserForm;
