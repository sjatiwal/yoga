const app = require("./app");
const connectDatabase = require("./config/database");
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log("uncaughtException", err);
  process.exit(1);
});
connectDatabase();
const server = app.listen(
  process.env.PORT || 5000,

  () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`);
  }
);

// unhandled Promise rejection
process.on("unhandledRejection", (err) => {
  console.log("unhandledRejection", err);
  server.close(() => {
    process.exit(1);
  });
});
