import React from "react";
export default function Company({ companyName, owner, location }) {
  return (
    <div>
      <h1>{companyName}</h1>
      <h2>{owner}</h2>
      <h2>{location} </h2>
    </div>
  );
}
