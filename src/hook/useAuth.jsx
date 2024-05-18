import axios from "axios";
import { useEffect, useState } from "react";

export const useAuth = (code) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresIn, setExpiresIn] = useState("");

  useEffect(() => {
    axios
      .post(`http://localhost:3001/login`, { code })
      .then((res) => {
        console.log(res);
        setAccessToken(res.data.accessToken);
        setRefreshToken(res.data.refreshToken);
        setExpiresIn(res.data.expiresIn);
      })
      .catch((err) => {
        window.location = "/";
        console.log(err);
      });
  }, []);
  return accessToken;
};
