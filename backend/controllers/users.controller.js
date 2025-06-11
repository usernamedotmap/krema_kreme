import User from "../model/User.js";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user)
      return res.status(400).json({
        message: "User already exists",
      });

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();
    // dito generate ng token pang pasok sa page
    const payload = { user: { id: newUser._id, role: newUser.role } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      },
      (err, token) => {
        if (err) throw err;

        res.status(201).json({
          user: {
            _id: newUser._id,
            name,
            email,
            role: newUser._role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({
        message: "Invalid credentials",
      });

    const isMatch = await user.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const payload = { user: { id: user._id, role: user.role } };

    jwt.sign(
      payload,
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1h",
      },
      (err, token) => {
        if (err) throw err;

        res.json({
          user: {
            _id: user._id,
            email,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export const getUserController = async (req, res) => {
        res.json(req.user)
}
