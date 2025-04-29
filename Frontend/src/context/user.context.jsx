import { createContext, useState } from 'react';

// Create a single context
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };