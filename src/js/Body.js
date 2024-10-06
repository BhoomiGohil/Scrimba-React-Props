import React from "react";

export default function Body(props) {
  return (
    <section className="section">
      {/* Apply the section class for styling */}
      <h1>Welcome back, {props.user}</h1>
      {/* Display a welcome message using the user prop */}
    </section>
  );
}
