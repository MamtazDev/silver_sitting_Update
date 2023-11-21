import React, { useEffect, useState } from "react";

import { userLoggedIn } from "@/features/register/registerSlice";
import { useDispatch } from "react-redux";

const useAuthCheck = () => {
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage.getItem("silverSittingAuth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.user) {
        dispatch(
          userLoggedIn({ accessToken: auth.accessToken, user: auth.user })
        );
      }
    }
    setAuthChecked(true);
  }, [dispatch]);
  return authChecked;
};

export default useAuthCheck;
