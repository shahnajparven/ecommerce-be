import jwt from "jsonwebtoken";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import { User } from "../models/userModel.js";

// restrict by role - authorization
export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action.", 403)
      );
    }
    next();
  };
};

// Check user login or not
export const isLoggedIn = catchAsync(async (req, res, next) => {
  const {token}  = req.cookies;
  // const token = req.headers.token;

    // If user not login/noToken then throw this error
    if (!token) return next(new AppError('Please login to access to this resource', 403));
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    // Token Exist but not valid then throw this error
    if (!decodedData.id) return next(new AppError('Invalid Token', 403));

    req.user = await User.findById(decodedData.id);
    next();
});
