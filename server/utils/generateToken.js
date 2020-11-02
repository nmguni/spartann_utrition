import jwt from "jsonwebtoken";

// id - payload
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "60d",
  });
};

export default generateToken;
