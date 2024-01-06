// mealController.test.js

const mongoose = require("mongoose");
const {
  createMeal,
  createTestMeal,
} = require("../controllers/mealController.js");
const Meal = require("../models/mealModel.js");

// Mocking the Meal model for testing purposes
jest.mock("../models/mealModel.js");

describe("createMeal", () => {
  // Reset the mock implementation before each test
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("should create a new meal", async () => {
    const req = {
      body: {
        _id: new mongoose.Types.ObjectId(),
        name: "Test Meal",
        ingredients: "Test Ingredients",
        description: "Test Description",
        timeNeeded: 30,
        cost: 10.99,
        category: "Hauptgericht",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mocking the create method of the Meal model
    Meal.create.mockResolvedValue({
      _id: new mongoose.Types.ObjectId(), // Instantiate ObjectId with 'new'
      name: "Test Meal",
      ingredients: "Test Ingredients",
      description: "Test Description",
      timeNeeded: 30,
      cost: 10.99,
      category: "Hauptgericht",
    });

    await createMeal(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      _id: expect.any(mongoose.Types.ObjectId),
      name: "Test Meal",
      ingredients: "Test Ingredients",
      description: "Test Description",
      timeNeeded: 30,
      cost: 10.99,
      category: "Hauptgericht",
    });
  });

  // ...

  it("should handle missing name", async () => {
    const req = {
      body: {
        // Missing name intentionally
        ingredients: "Test Ingredients",
        description: "Test Description",
        timeNeeded: 30,
        cost: 10.99,
        category: "Hauptgericht",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await createTestMeal(req, res);

    // Update the expected error message here
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      error: "Meal: Name is missing inside Request-body.",
    });
  });

  it("should handle database error", async () => {
    const req = {
      body: {
        name: "Test Meal",
        ingredients: "Test Ingredients",
        description: "Test Description",
        timeNeeded: 30,
        cost: 10.99,
        category: "Hauptgericht",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mocking the create method of the Meal model to simulate a database error
    Meal.create.mockRejectedValue(new Error("Database error"));

    await createMeal(req, res);

    // Assertions
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "Database error" });
  });
});
