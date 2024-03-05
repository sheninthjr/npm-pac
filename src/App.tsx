import React from "react";
import { Forms } from "./components/Forms/Forms";

function App() {
  const handleSubmit = (values: {
    username: string;
    password: string;
    email?: string;
  }) => {
    console.log(values);
  };

  return (
    <>
      <div>
        <Forms username="sheninth" password="hello" onSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default App;
