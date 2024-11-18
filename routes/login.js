const express = require("express");
const router = express.Router();
const asyncWrap = require("../utils/asyncWrap");
const colleCtion = require("../models/schema");
const ExpressError = require("../utils/ExpressError");
const countdown = require("../public/js/countdown");


//login route
router.get("/", (req, res) => {
    res.render("login.ejs");
  });
// POST for login
router.post(
  "/",
  asyncWrap(async (req, res, next) => {
    let { email, password } = req.body;
    let regEmail = await colleCtion.findOne({email });



    if(password.length<6){
      return next(new ExpressError(404, "Password must be at least 6 characters long"));
    }
   else if(password.length>15){
    return next(new ExpressError(404, "Password must not exceed 15 characters"));
   }
    // Check if the email exists
    if (regEmail) {
      // Check if the password matches
      if (regEmail.password2 === password) {
        return res.send(`<h1>Welcome ${regEmail.name}</h1>`);
      }
      else {
        // Password is wrong
        return next(new ExpressError(404, "Password is wrong"));
      }
    } else {
      // Email not registered
      return res.send(countdown("Email is not registered</h1>", "/register"));
    }
  })
);


module.exports = router;