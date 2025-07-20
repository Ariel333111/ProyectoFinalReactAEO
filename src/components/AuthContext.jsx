import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (username, password) => {
    let userData;
    // Para admin
    if (username === "admin" && password === "012345") {
      userData = { username: "admin", role: "admin" };
    } else {
      // Cualquier otro nombre y clave
      userData = { username, role: "user" };
    }

    setUser(userData);
    localStorage.setItem("authUser", JSON.stringify(userData));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
