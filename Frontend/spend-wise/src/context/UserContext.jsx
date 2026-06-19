// src/context/UserContext.jsx
import { createContext, useState,useEffect   } from "react";
import axiosInstance from "../utils/axiosInstance";
import { API_PATHS } from "../utils/apiPaths";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 1. RESTORE user on refresh
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    axiosInstance.get(API_PATHS.AUTH.GET_USER)
      .then(({ data }) => setUser(data.data))
      .catch(() => clearUser());
  }, []);

  //2.set user after login
  const updateUser = (userData) => {
    setUser(userData);
  };
  //3/clear user after logout(frontend side)
  const clearUser = () => {
    setUser(null);
    localStorage.removeItem('token'); // ← also clear token on logout
  };

  return (
    //"Every component inside me can access these three things."
    <UserContext.Provider value={{ user, updateUser, clearUser }}> 
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;