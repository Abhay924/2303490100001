import axios from "axios";

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzAzNDkwMTAwMDAxQG1wZ2kuZWR1LmluIiwiZXhwIjoxNzgxMTc0Mzg0LCJpYXQiOjE3ODExNzM0ODQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI0NDlkZWI0ZC02NjcwLTQ5MjYtYjU5YS03NzlmMTFkNTQyZGYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhYmhheSBrdXNod2FoYSIsInN1YiI6IjIzOGU4ZjJiLWM4ZWEtNGJkYS05MDhlLWExOTI1ZWZkNDUzZiJ9LCJlbWFpbCI6IjIzMDM0OTAxMDAwMDFAbXBnaS5lZHUuaW4iLCJuYW1lIjoiYWJoYXkga3VzaHdhaGEiLCJyb2xsTm8iOiIyMzAzNDkwMTAwMDAxIiwiYWNjZXNzQ29kZSI6IkJBVkRTaCIsImNsaWVudElEIjoiMjM4ZThmMmItYzhlYS00YmRhLTkwOGUtYTE5MjVlZmQ0NTNmIiwiY2xpZW50U2VjcmV0IjoiSFp4WUt3VllaWFhnTmhBRSJ9.uAQPLlm5aMhQakWfQOPHLGnF1zPLnCxHFrg9eiiZDYA";

export async function loadNotifications(
  page = 1,
  limit = 10,
  type = "All"
) {
  try {
    let url = `${API_URL}?page=${page}&limit=${limit}`;

    if (type !== "All") {
      url += `&notification_type=${type}`;
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });

    return response.data.notifications || [];
  } catch (error) {
    console.error(
      "Unable to fetch notifications",
      error
    );
    return [];
  }
}