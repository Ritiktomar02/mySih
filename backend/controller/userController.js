import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import generateToken from "../util/helpers.js";

export const signupUser = async (req, res) => {
  try {
    const { name, email, username, password, role } = req.body;

    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      username,
      password: hashedPass,
      role,
    });
    await newUser.save();

    if (newUser) {
      generateToken(newUser.id, res);

      res.status(201).json({
        _id: newUser.id,
        email: newUser.email,
        username: newUser.username,
        name: newUser.name,
        role: newUser.role,
      });
    } else {
      res.status(400).json({ error: "Invalid data" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("error in signupUser");
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect)
      return res.status(400).json({ error: "Invalid credentials" });

    generateToken(user.id, res);

    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
      role: user.role,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log("error in loginUser");
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(200).json({ message: "User logged out" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("error in logout User");
  }
};

export const updateUser = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    const update = {};

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(password, salt);
      update.password = hashedPass;
    }
    if (email) update.email = email;
    if (name) update.name = name;

    const user = await User.findByIdAndUpdate(req.user._id, update, {
      new: true,
    });

    res.status(200).json({
      _id: user._id,
      email: user.email,
      name: user.name,
      username: user.username,
      role: user.role,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
