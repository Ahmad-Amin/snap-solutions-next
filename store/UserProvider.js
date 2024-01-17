import { useState } from "react";
import UserContext from "./user-context";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";

const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [superAdmin, setSuperAdmin] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  const router = useRouter();
  const { addToast } = useToasts();

  const removeUserDataHandler = () => {
    setSuperAdmin(false);
    setUser({});
    localStorage.removeItem("user");
    setAllUsers([]);
    addToast("Logout Successfully", {
      appearance: "success",
      autoDismiss: true,
    });
    // router.push('/')
  };

  const saveUserData = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    if (user?.role === "superadmin") {
      setSuperAdmin(true);
    }
    document.cookie = `userId=${user._id}`;
    sessionStorage.setItem("userId", JSON.stringify(user._id));
  };

  const saveUsersToGlobalStore = (userList) => {
    setAllUsers(userList);
  };

  const appendToUsersList = (userRec) => {
    setAllUsers((prevUsers) => [...prevUsers, userRec]);
  }

  const userContext = {
    user: user,
    logoutUser: removeUserDataHandler,
    saveUserData: saveUserData,
    superAdmin: superAdmin,
    saveUsersToGlobalStore: saveUsersToGlobalStore,
    appendToUsersList: appendToUsersList,
    allUsers: allUsers,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
