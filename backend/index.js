const express = require("express");
const ConnectDB = require("./db/conn");
const path = require("path");
const cors = require("cors");
const multer = require("multer");
const User = require("./db/model");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "*",
  methods: ['GET', 'POST'], // Specify the methods you want to allow
}));
// Connect to database
ConnectDB();

// Upload configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "uploads")),
  filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
});

const upload = multer({ storage });

// Route for signup
app.post("/api/v3/signup", upload.single("resume"), async (req, res) => {
  const { name, email } = req.body;
  const resume = req.file ? req.file.path : null; // Ensure resume is available
  try {
    // Save to MongoDB
    const user = new User({ name, email, resume });
    await user.save();
    res.status(200).send("Signup successful");
  } catch (error) {
    console.error("Error during signup:", error); // Improved error logging
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
