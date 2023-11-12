import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
export const test = (req, res) => {
  res.json({
    message: "Api is Working",
  });
};

//update user
export const updateUser = async (req, res, next) => {
  const { username, email, profilePicture, password, id } = req.body;
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "You can  update only your account!"));
  }
  try {
    if (password) {
      password = bcryptjs.hashSync(password, 12);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username,
          email,
          password,
          profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
