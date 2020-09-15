import React from "react";
import Users from "./components/Users";
import { UsersProvider } from "./userContext";
import "./App.css";

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;
