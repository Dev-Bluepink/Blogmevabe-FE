import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export function AuthProvider({ children }) {
  const queryClient = useQueryClient();
  const localUserData = JSON.parse(localStorage.getItem("user"));
  const localToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localUserData && !!localToken
  );
  const [user, setUser] = useState(localUserData || {});

  const { refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      if (localToken) {
        return await axios
          .get("https://forum-hngc.onrender.com/", {
            headers: {
              Authorization: `Bearer ${localToken}`,
            },
          })
          .then((res) => {
            localStorage.setItem("user", JSON.stringify(res.data));
            setUser(res.data);
            setIsAuthenticated(true);
            return res.data;
          })
          .catch(() => {
            setIsAuthenticated(false);
            setUser({});
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            return {};
          });
      } else {
        setIsAuthenticated(false);
        setUser({});
        return {};
      }
    },
    retry: 1,
    enabled: isAuthenticated,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  function login(userInfo, token) {
    localStorage.setItem("user", JSON.stringify(userInfo));
    localStorage.setItem("token", token);
    setUser(userInfo);
    setIsAuthenticated(true);
    queryClient.invalidateQueries();
  }

  function logout() {
    axios.get("https://forum-hngc.onrender.com/api/user/logout").then(() => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      setUser({});
      queryClient.invalidateQueries();
      window.location.href = "/all";
    });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default function AuthConsumer() {
  return useContext(AuthContext);
}
