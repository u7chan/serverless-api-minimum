const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/example", (req, res, next) => {
  return res.status(200).json({
    message: `Example !! ${new Date().toLocaleString()}`,
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
