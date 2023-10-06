import User from "../Models/user.model.js";
import bcrypt from "bcrypt";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("user created");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const vaildUser = await User.findOne({ email });
    if (!vaildUser) {
      return next(errorHandler(404, "User not found"));
    }
    const vaildPassword = bcrypt.compareSync(password, vaildUser.password);
    if (!vaildPassword) {
      return next(errorHandler(401, "email or password incorrect"));
    }
    const token = jwt.sign({ id: vaildUser._id }, process.env.JWT_SECERT);
    const { password: pass, ...rest } = vaildUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
