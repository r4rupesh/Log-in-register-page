const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const { setTimeout } = require("timers/promises");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
const login = require("./routes/login");
const register = require("./routes/register");
// Mongoose connection
main()
.then(() => console.log("Database connected"))
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/PassUser");
}

app.use("/login",login);
app.use("/register",register);

//Home Route
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// Catch-all route for non-existing pages
app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
});

// Server setup
app.listen(8080, () => {
  console.log("App is listening on port 8080");
});

