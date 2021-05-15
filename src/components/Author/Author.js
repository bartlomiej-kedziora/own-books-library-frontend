import React from "react";

const author = (props) => {
  const auth = props.details;
  const details = <tr key={auth.name}>
    <td>{auth.name}</td>
    <td>{auth.surname}</td>
    <td>{auth.city}</td>
    <td>{auth.country}</td>
    <td>{auth.yearOfBirth}</td>
  </tr>;

  return (
      <tr key={auth.name}>
        <td>{auth.id}</td>
        <td>{auth.name}</td>
        <td>{auth.surname}</td>
        <td>{auth.city}</td>
        <td>{auth.country}</td>
        <td>{auth.yearOfBirth}</td>
      </tr>
  );
}

export default author;