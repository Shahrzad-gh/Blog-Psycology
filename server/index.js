const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/Auth");
const postRoutes = require("./Routes/Posts");
const userRoutes = require("./Routes/Users");
const categoryRoutes = require("./Routes/Categories");
const cors = require("cors");

dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    preflightContinue: false,
    credentials: true,
  })
);

const PORT = process.env.PORT;
app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) =>
    app.listen(PORT, () => {
      console.log(`app connected to MongoDB & listen to port ${PORT}`);
    })
  )
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/cat", categoryRoutes);
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
