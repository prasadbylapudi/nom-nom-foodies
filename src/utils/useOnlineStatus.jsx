import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setonlineStatus(false);
      console.log("you are online");
    });
    window.addEventListener("online", () => {
      setonlineStatus(true);
      console.log("you are online");
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
