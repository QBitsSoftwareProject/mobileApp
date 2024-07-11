const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { PORT } = require("./config/env");
const { connect } = require("./config/database.connection.js");

const app = express();

//access log
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");

// const logStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
//   flags: "a",
// });

// app.use(morgan("combined", { stream: logStream }));

const adminRoute = require("./api/routes/adminRoute.js");
const regularUserRoute = require("./api/routes/regularUserRoute.js");
const doctorRoute = require("./api/routes/doctorRoute.js");
const goalRoute = require("./api/routes/goalRoute.js");
const appointmentRoute = require("./api/routes/appointmentRoutes.js");
const taskRoute = require("./api/routes/taskRoutes.js");
const motivationRoute = require("./api/routes/motivationsRoute.js");
const FeedbackRoute = require("./api/routes/feedback.route.js");
const journalRoute = require("./api/routes/Journal.route.js");
const questionRoute = require("./api/routes/questionRoute.js");
const moodEntryRoute = require("./api/routes/moodsInputroutes.js");
const postRoutes = require("./api/routes/postRoutes.js");
const commentsRoutes = require("./api/routes/commentsRoutes.js");
const videoRouter = require("./api/routes/resourcesRoute/videoRoute.js");
const audioRouter = require("./api/routes/resourcesRoute/audioRoute.js");
const articleRouter = require("./api/routes/resourcesRoute/articleRoute.js");
const authorRouter = require("./api/routes/resourcesRoute/authorRoute.js");
const notificationRouter = require("./api/routes/notificationRoute.js");
const emailRoute = require("./api/routes/emailRoute.js");
const passwordRoute = require("./api/routes/passwordRoute.js");

const reportRoute = require("./api/routes/reportRoute.js");

app.use(cors());
app.use(bodyParser.json());

const questionRouter = require("./api/routes/question.route.js");
const markRouter = require("./api/routes/mark.route.js");
const currentMood = require("./api/routes/currentMoodInput.js");
const methodRouter = require("./api/routes/method.route.js");
const { setupWebSocket } = require("./config/webSocket.js");

// app.use("/questions",questionRouter);
//app.use("/options",optionRouter);

//set router to mark router
app.use("/mark", markRouter);

//set router to question router
app.use("/question", questionRouter);
app.use("/currentmood", currentMood);

//endpoints
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/user", regularUserRoute);
app.use("/api/v1/doctor", doctorRoute);
app.use("/api/v1/goal", goalRoute);
app.use("/api/v1/appointments", appointmentRoute);
app.use("/api/v1/task", taskRoute);
app.use("/api/v1/motivation", motivationRoute);
app.use("/api/v1/Feedback", FeedbackRoute);
app.use("/api/v1/journal", journalRoute);
app.use("/api/v1/question", questionRoute);
app.use("/api/v1/moodEntries", moodEntryRoute);
app.use("/api/v1/posts", postRoutes);
app.use("/api/v1/comments", commentsRoutes);
app.use("/api/v1/resources/video", videoRouter); //video-routes
app.use("/api/v1/resources/audio", audioRouter); //audio-routes
app.use("/api/v1/resources/article", articleRouter); //article-routes
app.use("/api/v1/resources/author", authorRouter); //author-routes
app.use("/api/v1/method", methodRouter);
app.use("/api/v1/notification", notificationRouter);
app.use("/api/v1/report", reportRoute);
app.use("/api/v1/email", emailRoute);
app.use("/api/v1/password", passwordRoute);

const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`server is running on port ${PORT}`);

  //database connection
  connect();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Setup WebSocket
setupWebSocket(server);
