import React from "react"; // Import React library for building user interfaces

export default function Header(props) {
  return (
    <header>
      <p>Current user: {props.user}</p>
      {/* Display the current user passed as a prop */}
    </header>
  );
}
