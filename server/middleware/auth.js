const jwt = require("jsonwebtoken");
const ENV = require("../config");

/**auth middleware */
const Auth = async (req, res, next) => {
  try {
    //access authorize header to validate request
    const token = req.headers.authorization.split(" ")[1];

    // retrive the user details to the logged in user
    const decodedToken = await jwt.verify(token, ENV.JWT_SECRET);

    req.user(decodedToken);

    next();
  } catch (error) {
    res.status(401).json({ error: "Authentication Failed!" });
  }
};

const localVariables = (req, res, next) => {
  req.app.locals = {
    OTP: null,
    reserSession: false,
  };

  next();
};

module.exports = {localVariables, Auth};