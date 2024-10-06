import React from "react";
import Header from "./Header";
import Body from "./Body";

export default function MainContent() {
  const [user, setUser] = React.useState("Joe"); // Declare a state variable 'user' with initial value "Joe"

  return (
    <main>
      <Header user={user} />
      {/* // Pass the 'user' state to the Header component as */}
      <Body user={user} />
      {/* // Pass the 'user' state to the Body component as a */}
    </main>
  );
}
