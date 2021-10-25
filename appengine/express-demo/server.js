const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("App engine demo response");
});

// use the app engine provided port or fallback to 8000 for local testing
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
});
