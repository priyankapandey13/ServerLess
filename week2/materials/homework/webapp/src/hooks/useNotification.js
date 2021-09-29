import { useState, useEffect } from "react";

function useNotifications() {
  const [notifications, setNotifications] = useState([]);

  const createNotification = (props) => {
    // hint: use setTimeout

    setTimeout(() => {
      setNotifications(` you are going to purchase below items : ${props}`);
    }, 100);
  };

  useEffect(() => {
    createNotification();
  }, []);

  return { notifications, createNotification };
}

export default useNotifications;
