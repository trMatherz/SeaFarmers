const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());  // Middleware to parse JSON

// Define a sample route
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend is running!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
