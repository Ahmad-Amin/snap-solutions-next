import React from "react";

const UserContext = React.createContext({
  user: {},
  allUsers: [],
  saveUsersToGlobalStore: () => {},
  appendToUsersList: () => {},
  logoutUser: () => {},
  saveUserData: () => {},
  superAdmin: Boolean,
});

export default UserContext;
