import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const fetchMe = async () => {
    let token = localStorage.getItem("accessToken");
    if (token) {
      const response = await axios.get("http://localhost:8888/auth/getMe", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    }
  };
  //fetchMe()

  useEffect(() => {
    fetchMe();
  }, []);
  const values = { user, fetchMe, setUser };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;

// const {values} = useContext(AuthContext)
// values.test()

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  console.log(ctx);
  if (!ctx) {
    throw new Error("useAuth must be used within a AuthContextProvider");
  }

  return ctx;
};

// const {values} = useAuth()
