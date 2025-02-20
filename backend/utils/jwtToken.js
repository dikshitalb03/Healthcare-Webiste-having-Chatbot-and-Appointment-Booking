import { User } from "../models/userSchema.js"; // Ensure this path is correct

export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken(); // Call the method defined in the user model
  const cookieName = user.role === "Admin" ? "adminToken" : "patientToken";

  res.status(statusCode).cookie(cookieName, token, {
    expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  })
  .json({
    success: true,
    message,
    user,
    token,
  });
};
