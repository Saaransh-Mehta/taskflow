import { createContext, useState } from 'react';

const UserContext = createContext();
const isLoggedIn = createContext(false)

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    isLoggedIn(true)
    setUser(userData);
  };

  const logout = () => {
    isLoggedIn(false)
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};


export { UserProvider, UserContext };