import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js"
import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Check if any of the required fields are missing
  if (!firstName || !lastName || !email || !phone || !message) {
      return next(new ErrorHandler("Please Fill form!", 400));
  }

  // Create a new message entry
  await Message.create({ firstName, lastName, email, phone, message });
  res.status(200).json({
      success: true,
      message: "Message sent successfully"
  });
});

export const getAllMessages = catchAsyncErrors(async(req,res,next)=>{
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
})