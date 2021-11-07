const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
dotenv.config();
app.use(express.json());

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
