import { io } from "socket.io-client";
// "undefined" means the URL will be computed from the `window.location` object
const URL = "http://43.205.50.127:9000" || "";
export const socket = io(URL);