import "./App.css";
import { useEffect, useState } from "react";
import { loadNotifications } from "./services/api";
import { getPriorityList } from "./utils/priority";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("All");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadNotifications(
        page,
        10,
        filter
      );

      setNotifications(data);
    };

    fetchData();
  }, [page, filter]);

  const priorityNotifications =
    getPriorityList(notifications, 10);

  const markAsViewed = (id) => {
    const viewed =
      JSON.parse(
        localStorage.getItem(
          "viewedNotifications"
        )
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
        localStorage.getItem(
          "viewedNotifications"
        )
      ) || [];

    return viewed.includes(id);
  };

  return (
    <div className="container">
      <h1>Notification Dashboard</h1>

      <select
        value={filter}
        onChange={(e) => {
          setFilter(e.target.value);
          setPage(1);
        }}
      >
        <option>All</option>
        <option>Placement</option>
        <option>Result</option>
        <option>Event</option>
      </select>

      <h2>Priority Notifications</h2>

      {priorityNotifications.map(
        (notification) => (
          <div
            key={notification.ID}
            className="notification-card"
            onClick={() =>
              markAsViewed(notification.ID)
            }
          >
            <h3>{notification.Type}</h3>

            <p>{notification.Message}</p>

            <small>
              {notification.Timestamp}
            </small>

            <div>
              {isViewed(notification.ID) ? (
                <span className="viewed-badge">
                  Viewed
                </span>
              ) : (
                <span className="new-badge">
                  New
                </span>
              )}
            </div>
          </div>
        )
      )}

      <h2>All Notifications</h2>

      {notifications.map((notification) => (
        <div
          key={notification.ID}
          className="notification-card"
        >
          <h3>{notification.Type}</h3>

          <p>{notification.Message}</p>

          <small>
            {notification.Timestamp}
          </small>
        </div>
      ))}

      <div className="pagination">
        <button
          onClick={() =>
            setPage((prev) =>
              Math.max(prev - 1, 1)
            )
          }
        >
          Previous
        </button>

        <span>Page {page}</span>

        <button
          onClick={() =>
            setPage((prev) => prev + 1)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;