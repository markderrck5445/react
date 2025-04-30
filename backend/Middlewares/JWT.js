const JWT = require("jsonwebtoken");
const createError = require("http-errors");

module.exports = {
  signAccessToken: (userId, role) => {
    return new Promise((resolve, reject) => {
      const payload = { userId, role}; 
      const secret = process.env.JWT_SECRET;
      const options = {
        expiresIn: "15m",
        issuer: "Assigntrack.com",
        audience: userId,
      };

      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.error("JWT Signing Error:", err.message);
          reject(createError.InternalServerError());
          return;
        }
        resolve(token);
      });
    });
  },

  verifyAccessToken: (req, res, next) => {
    if (!req.headers["authorization"]) return next(createError.Unauthorized());

    const authHeader = req.headers["authorization"];
    const bearerToken = authHeader.split(" ");
    if (bearerToken.length !== 2) return next(createError.Unauthorized("Invalid Token Format"));

    const token = bearerToken[1];

    JWT.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        console.error("JWT Verification Error:", err.message);
        const message = err.name === "JsonWebTokenError" ? "Unauthorized" : err.message;
        return next(createError.Unauthorized(message));
      }
      req.user = payload;
      next();
    });
  },

  signRefreshToken: (userId, role ) => {
    return new Promise((resolve, reject) => {
      const payload = { userId, role };
      const secret = process.env.REFRESH_JWT_SECRET;
      const options = {
        expiresIn: "7d",
        issuer: "Assigntrack.com",
        audience: userId.toString(),
      };

      JWT.sign(payload, secret, options, (err, token) => {
        if (err) {
          console.error("Refresh Token Signing Error:", err.message);
          reject(createError.InternalServerError());
          return;
        }
        resolve(token);
      });
    });
  },

  
};