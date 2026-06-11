import axios from "axios";
const LOG_ENDPOINT =
  "http://4.224.186.213/evaluation-service/logs";
const AUTH_TOKEN =
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMzAzNDkwMTAwMDAxQG1wZ2kuZWR1LmluIiwiZXhwIjoxNzgxMTY5OTMzLCJpYXQiOjE3ODExNjkwMzMsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI5OTVkNjY3NC1lNDc3LTQwYTUtODEwMi04YmQxMzQ2ZjIzMWYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhYmhheSBrdXNod2FoYSIsInN1YiI6IjIzOGU4ZjJiLWM4ZWEtNGJkYS05MDhlLWExOTI1ZWZkNDUzZiJ9LCJlbWFpbCI6IjIzMDM0OTAxMDAwMDFAbXBnaS5lZHUuaW4iLCJuYW1lIjoiYWJoYXkga3VzaHdhaGEiLCJyb2xsTm8iOiIyMzAzNDkwMTAwMDAxIiwiYWNjZXNzQ29kZSI6IkJBVkRTaCIsImNsaWVudElEIjoiMjM4ZThmMmItYzhlYS00YmRhLTkwOGUtYTE5MjVlZmQ0NTNmIiwiY2xpZW50U2VjcmV0IjoiSFp4WUt3VllaWFhnTmhBRSJ9.kzYOLbHWlAHpyPIolgHq5r2cziCPgVcRz0dfBItR0B8"
  export async function writeLog(
  level,
  packageName,
  description
) {
  try {
    const payload = {
      stack: "frontend",
      level,
      package: packageName,
      message: description,
    };
    const result = await axios.post(
      LOG_ENDPOINT,
      payload,
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    return result.data;
  } catch (err) {
    console.log("Logging failed");
  }
}