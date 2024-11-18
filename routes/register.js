const express = require("express");
const router = express.Router();
const asyncWrap = require("../utils/asyncWrap");
const colleCtion = require("../models/schema");
const countdown = require("../public/js/countdown");
const schema = require("../joiValidations");
//joi validation
const registerValidate = (req, res, next) => {
    let { error } = schema.validate(req.body);
    if (error) {
      throw new ExpressError(404, error);
    } else {
      next();
    }
  };


//register route
router.get("/", (req, res) => {
    res.render("register.ejs");
  });
  
  // POST for register
  router.post(
    "/register",registerValidate,
    asyncWrap(async (req, res,next) => {
      const newData = new colleCtion(req.body);
      let { email} = req.body;
      let regEmail = await colleCtion.findOne({ email: newData.email });
      if(regEmail){
       return res.send(countdown("Email already exists</h1>","/register"));
      }
      await newData.save();
      res.redirect("/");
  
    })
  );

module.exports = router;