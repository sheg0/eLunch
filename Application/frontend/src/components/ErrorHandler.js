class ErrorHandler {
  static checkArray(propName, propValue) {
    if (!Array.isArray(propValue)) {
      console.error(`${propName}: '${propName}' prop must be an array.`);
      return false;
    }
    return true;
  }

  static checkMealObject(obj, componentName) {
    if (!obj || !obj._id || !obj.name) {
      console.error(`${componentName}: Invalid meal object:`, obj);
      return false;
    }
    return true;
  }
}

export default ErrorHandler;
