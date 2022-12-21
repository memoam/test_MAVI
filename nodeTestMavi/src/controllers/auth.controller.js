import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { SECRET } from '../config.js';

export const signUp = async (req, res) => {
  try {
    const {
      username,
      password,
    } = req.body;

    // Creating a new User Object
    const newUser = new User({
      username,
      password: await User.encryptPassword(password),
    });


    // Saving the User Object in Mongodb
    const savedUser = await newUser.save();

    // Create a token
    const token = jwt.sign({ id: savedUser._id }, SECRET, {
      expiresIn: 86400, // 24 hours
    });
    const user = {
      username: savedUser.username,
      id: savedUser._id,

    };
    return res.status(200).json({ token, user });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const signIn = async (req, res) => {
  try {
    // Request body email can be an email or username
    const userFound = await User.findOne({ email: req.body.email });

    if (!userFound) return res.status(400).json({ message: 'User Not Found' });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: 'Invalid Password',
      });

    const token = jwt.sign({ id: userFound._id }, SECRET, {
      expiresIn: 86400, // 24 hours
    });
    const user = {
      username: userFound.username,
      id: userFound._id,
    };
    res.status(200).json({ token, user });
  } catch (error) {
    console.log(error);
  }
};
