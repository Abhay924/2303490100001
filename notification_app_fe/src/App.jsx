import { useEffect, useState } from "react";
import { loadNotifications } from "./services/api";
import { getPriorityList } from "./utils/priority";

function App() {
  const [priorityNotifications, setPriorityNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const notifications = await loadNotifications();

      const importantNotifications =
        getPriorityList(notifications, 10);

      setPriorityNotifications(importantNotifications);
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "25px" }}>
      <h1>Priority Notification Dashboard</h1>

      {priorityNotifications.map((notification) => (
        <div
          key={notification.ID}
          style={{
            border: "1px solid #dcdcdc",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "8px",
          }}
        >
          <h3>{notification.Type}</h3>

          <p>{notification.Message}</p>

          <small>{notification.Timestamp}</small>
        </div>
      ))}
    </div>
  );
}

export default App;