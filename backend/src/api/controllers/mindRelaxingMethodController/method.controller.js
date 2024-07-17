const methodService = require("../../services/mindRelaxingMethods/method.service");
const asyncHandler = require("express-async-handler");
const methodModel = require("../../models/mindRelaxingMethods/method.model");

const storeMethod = asyncHandler(async (req, res) => {
  try {
    const {
      methodType,
      category,
      resouceName,
      discription,
      imageURL,
      resourceURL,
    } = req.body;

    const newMethod = await methodService.storeMethod(
      methodType,
      category,
      resouceName,
      discription,
      imageURL,
      resourceURL
    );

    res.status(201).json({
      message: "Mark added successfully",
      method: newMethod,
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ error: error.message }); // or 500 based on your preference
  }
});

const getAllMethods = asyncHandler(async (req, res) => {
  const response2 = await methodModel.find({});

  if (response2) {
    res.status(201).json(response2);
  } else {
    res.status(200).json("no methods found");
  }
});

const updateMethod = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const checkInstance = await methodModel.findById(id);

  if (checkInstance) {
    const response = await methodModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(403).json("Method cannot be update");
    }
  } else {
    res.status(404).json("Method does not exists");
  }
});

const getMethodById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const method = await methodModel.findById(id);

    if (method) {
      res.status(200).json(method);
    } else {
      res.status(404).json({ message: "Method not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving method", error });
  }
});

const deleteMethodById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const method = await methodModel.findByIdAndDelete(id);

    if (method) {
      res.status(200).json({ message: "Method deleted successfully" });
    } else {
      res.status(404).json({ message: "Method not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting method", error });
  }
});

const updateMethodRate = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // Extract the currentRating from the request body
  const { currentRating, ratedUsers } = req.body;

  // Find the instance by id
  const checkInstance = await methodModel.findById(id);

  if (checkInstance) {
    // Update only the currentRating and rated users
    const response = await methodModel.findByIdAndUpdate(
      id,
      { currentRating, ratedUsers },
      { new: true } // This returns the updated document
    );

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(403).json("Method cannot be updated");
    }
  } else {
    res.status(404).json("Method does not exist");
  }
});

module.exports = {
  storeMethod,
  getAllMethods,
  updateMethod,
  getMethodById,
  deleteMethodById,
  updateMethodRate,
};
