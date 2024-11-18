const Joi = require("joi");
const { Schema } = require("mongoose");

module.exports = Joi.object({
    name: Joi.string().required().messages({
      "string.empty": "Name is required",
      "any.required": "Name is required",
    }),
    email: Joi.string().email().required().messages({
      "string.empty": "Email is required",
      "string.email": "Please enter a valid email",
      "any.required": "Email is required",
    }),
    password1: Joi.string().alphanum().min(6).max(15).required().messages({
      "string.empty": "Password1 is required",
      "string.alphanum": "Password1 must only contain letters and numbers",
      "string.min": "Password1 must be at least 6 characters long",
      "string.max": "Password1 must not exceed 15 characters",
      "any.required": "Password1 is required",
    }),
    password2: Joi.string()
      .alphanum()
      .min(6)
      .max(15)
      .required()
      .valid(Joi.ref("password1"))
      .messages({
        "string.empty": "Password2 is required",
        "string.alphanum": "Password2 must only contain letters and numbers",
        "string.min": "Password2 must be at least 6 characters long",
        "string.max": "Password2 must not exceed 15 characters",
        "any.only": "Password2 must match Password1",
        "any.required": "Password2 is required",
      }),
});