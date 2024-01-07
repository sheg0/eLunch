const handleControllerError = (res, error) => {
  console.error(error); // Log the error for debugging purposes

  if (error instanceof mongoose.Error.ValidationError) {
    // Handle validation errors
    res.status(400).json({ error: "Validation error", details: error.errors });
  } else if (error instanceof mongoose.Error.CastError) {
    // Handle invalid ObjectId errors
    res.status(404).json({ error: "Invalid ObjectId" });
  } else {
    // Handle other unexpected errors
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const isValidObjId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Event" });
  }
};

const isNotNullOrUndefined = (res, ...attributes) => {
  let errors = [];
  for (const attribute of attributes) {
    if (!attribute) {
      errors.push(attribute);
      return res.status(400).json({
        error: `${attribute}: is missing inside Request-body.`,
      });
    }
  }
  return errors;
};

const checkMissingAttributes = (attributes, body) => {
  const missingAttributes = attributes.filter((attr) => !body[attr]);

  if (missingAttributes.length > 0) {
    const errorMessages = missingAttributes.map(
      (attr) => `Meal: ${attr} is missing inside Request-body.`
    );

    return {
      errors: errorMessages,
    };
  }

  return null;
};

module.exports = {
  handleControllerError,
  isValidObjId,
  isNotNullOrUndefined,
  checkMissingAttributes,
};
