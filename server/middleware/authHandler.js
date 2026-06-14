import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret_key = process.env.SECRET_KEY;

const authHandler = (req, res, next) => {
  const authHeader = req.headers.authorization; //get authorization from req

  //check if there is an authHeader before splitting. if doesn't exist return error message
  if (!authHeader) {
    return res.status(401).json({ message: "unauthorized user" });
  }
  const token = authHeader.split(" ")[1];

  //after split, decode, to ge the decrypt the token. use secret key to decrypt
  try {
    const decode = jwt.verify(token, secret_key);
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).json({ message: "expired token" });
  }
};
export default authHandler;
