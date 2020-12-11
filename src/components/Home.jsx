import React from "react";

export default function Home(props) {
  return (
    <div>
      <h1>Welcome {props.email}</h1>
    </div>
  );
}
