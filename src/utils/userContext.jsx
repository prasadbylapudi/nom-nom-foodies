import { createContext, useContext, useState } from "react";

const UserContext = createContext({
  loggedInUser: "default user",
});

export default UserContext;
