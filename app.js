const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const { PORT, MONGO_URI } = require("./config");

const app = express();

// DB Connection
mongoose
  .connect(MONGO_URI)
  .then(console.log("[OK] Connected to DB"))
  .catch((err) => {
    console.log("DB connection failed : ", err);
  });

// Initialize Middlewares
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser())
app.use(helmet());

// Routes
app.use("/", require("./routes"));

// Listening
app.listen(PORT, console.log(`Listening on http://localhost:${PORT} ....`));
