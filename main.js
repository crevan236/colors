import express from "express";
import { ERROR_MESSAGES } from "./helpers/validation";
import { EVENT_NAME, PORT } from "./helpers/consts";

const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const exphbs = require("express-handlebars");

app.use("/static", express.static("static"));
app.engine("handlebars", exphbs({ layoutsDir: "views", defaultLayout: null }));

app.set("view engine", "handlebars");

io.on("connection", (socket) => {
  socket.on(EVENT_NAME, (color) => {
    io.emit(EVENT_NAME, color);
  });
});

app.get("/", (req, res) => {
  const templateProperties = {
    eventName: EVENT_NAME,
    errors: {
      repeated: ERROR_MESSAGES.repeated,
      incorrect: ERROR_MESSAGES.incorrect,
    },
  };

  res.render("index", templateProperties);
});

app.get("/color", (req, res) => {
  res.render("color", { eventName: EVENT_NAME });
});

http.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
