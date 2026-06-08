require("dotenv").config();
const app = require("./app/app");
const connectDB = require("./db/db");
const noteRoutes = require("./routes/note.routes");

app.use("/api/notes", noteRoutes);
connectDB();
const PORT = process.env.SERVER_PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is running on port 3000.");
});
