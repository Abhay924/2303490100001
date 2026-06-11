import { writeLog } from "./logger.js";
async function checkLog() {
  const response = await writeLog(
    "info",
    "api",
    "Testing logger"
  );
  console.log(response);
}
checkLog();