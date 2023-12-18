const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

// Enable CORS for all routes
app.use(cors());

// Your existing route handling code here

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});