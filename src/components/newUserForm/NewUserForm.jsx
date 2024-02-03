import React, { useState } from "react";
import "./newUserForm.style.css";
import { v4 as uuidv4 } from "uuid";

export const defaultData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  birthDate: {
    birthDay: "",
    birthMonth: "",
  },
  country: "",
};

const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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

  const getMonth = () => {};

  return (
    <div className="form-container">
      <form onSubmit={onSubmitHandler}>
        <div>
          <label>First Name</label>
          <input
            required
            type="text"
            name="firstName"
            value={newUser.firstName}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            required
            type="text"
            name="lastName"
            value={newUser.lastName}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label>Phone</label>
          <input
            required
            type="number"
            name="phone"
            value={newUser.phone}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label>email</label>
          <input
            required
            type="email"
            name="email"
            value={newUser.email}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label>Birth Date</label>
          <input
            required
            type="date"
            name="birthYear"
            value={newUser.birthYear}
            onChange={onInputChange}
          />
        </div>

        <div>
          <label>Country</label>
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
