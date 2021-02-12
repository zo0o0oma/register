const express = require('express');
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    Confirmation: { type: String, require: true },
    role: { type: Number, defult: 0 },
    thumbnail: String,
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
UserSchema.virtual('thumbnail_url').get(function () {
  return `http://localhost:3000/uploads/${this.thumbnail}`;
});
module.exports = mongoose.model('User', UserSchema);
