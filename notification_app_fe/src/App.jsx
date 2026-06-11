import { useEffect, useState } from "react";
import { loadNotifications } from "./services/api";
import { getPriorityList } from "./utils/priority";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadNotifications();
      setNotifications(data);
    };

    fetchData();
  }, []);

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (item) => item.Type === filter
        );

  const priorityNotifications =
    getPriorityList(filteredNotifications, 10);

  const markAsViewed = (id) => {
    const viewed =
      JSON.parse(
        localStorage.getItem("viewedNotifications")
      ) || [];

    if (!viewed.includes(id)) {
      viewed.push(id);
      localStorage.setItem(
        "viewedNotifications",
        JSON.stringify(viewed)
      );
    }
  };

  const isViewed = (id) => {
    const viewed =
      JSON.parse(
        localStorage.getItem("viewedNotifications")
      ) || [];

    return viewed.includes(id);
  };

  return (
    <div style={{ padding: "25px" }}>
      <h1>Notification Dashboard</h1>

      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
        }}
      >
        <option>All</option>
        <option>Placement</option>
        <option>Result</option>
        <option>Event</option>
      </select>

      <h2>Priority Notifications</h2>

      {priorityNotifications.map((notification) => (
        <div
          key={notification.ID}
          onClick={() =>
            markAsViewed(notification.ID)
          }
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            marginBottom: "12px",
            borderRadius: "8px",
          }}
        >
          <h3>{notification.Type}</h3>

          <p>{notification.Message}</p>

          <small>{notification.Timestamp}</small>

          <div>
            {isViewed(notification.ID)
              ? "Viewed"
              : "New"}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;