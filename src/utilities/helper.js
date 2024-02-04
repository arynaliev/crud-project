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

export const getMonth = (birthDate) => {
  const index = new Date(birthDate).getMonth();

  return monthList[index];
};

export const getDate = (birthDate) => {
  const date = new Date(birthDate).getDate();
  return date;
};
