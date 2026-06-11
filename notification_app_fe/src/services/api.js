import axios from "axios";

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzAzNDkwMTAwMDAxQG1wZ2kuZWR1LmluIiwiZXhwIjoxNzgxMTY1ODc2LCJpYXQiOjE3ODExNjQ5NzYsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIzODhlZWRhOC1hMjAzLTQ1NTUtOTUyMC05ZmNhMDNkOWE2M2IiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhYmhheSBrdXNod2FoYSIsInN1YiI6IjIzOGU4ZjJiLWM4ZWEtNGJkYS05MDhlLWExOTI1ZWZkNDUzZiJ9LCJlbWFpbCI6IjIzMDM0OTAxMDAwMDFAbXBnaS5lZHUuaW4iLCJuYW1lIjoiYWJoYXkga3VzaHdhaGEiLCJyb2xsTm8iOiIyMzAzNDkwMTAwMDAxIiwiYWNjZXNzQ29kZSI6IkJBVkRTaCIsImNsaWVudElEIjoiMjM4ZThmMmItYzhlYS00YmRhLTkwOGUtYTE5MjVlZmQ0NTNmIiwiY2xpZW50U2VjcmV0IjoiSFp4WUt3VllaWFhnTmhBRSJ9.ZmvYRBqf1tbK-q9YeWWVZOh04CQ4hjR71-L_zvC0AN0";
export async function loadNotifications() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data.notifications || [];
  } catch (error) {
    console.error("Unable to fetch notifications", error);
    return [];
  }
}