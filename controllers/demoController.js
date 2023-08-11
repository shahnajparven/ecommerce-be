/* eslint-disable no-sequences */
import { Demo } from "../models/demoModel.js";
import catchAsync from "../utils/catchAsync.js";

// create Demo
export const CreateDemo = catchAsync(async (req, res) => {
  const products= await Demo.create(req.body); 

  res.status(201).json({
    products,
    status: "success",
    message: "Demo Created Successfully",
  });
});

// get all demo
export const getDemo = catchAsync(async (req, res) => {
  const { dmo } = req.query;
  const filter = {};
  if (dmo) filter._id = dmo;
  const demos = await Demo.find(filter).lean().sort({ updatedAt: -1 });
  res.status(200).json({
      status: 'success',
      data: demos,
  });
});
