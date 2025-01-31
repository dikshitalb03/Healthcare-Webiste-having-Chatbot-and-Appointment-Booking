class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }
  if (err.code === "JSONWebTokenError") {
    const message = "Your token is invalid, Please login again";
    err = new ErrorHandler(message, 400);
  }
  if (err.code === "TokenExpiredError") {
    const message = "Your token is expired, Please login again";
    err = new ErrorHandler(message, 400);
  }
  if (err.code === "CastError") {
    const message = `Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  const errorMessage = err.errors 
  ? Object.values(err.errors)
     .map(error => error.message)
     .join(" ")
  : err.message;

  return res.status(err.statusCode).json({
    status: false,
    message: errorMessage,
  });
};

export default ErrorHandler;