import jwt from "jsonwebtoken";
import { User } from "../Models/User.js";

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res
      .status(401)
      .json({ message: "No token found  from authMiddleware" });
  }

  const token = authorization.split(" ")[1]; // Extract token from "Bearer <token>"
  console.log("token received in  authmiddleware", token);

  try {
    //const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    //req.user = await User.findOne({ _id }).select("_id");

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodedToken._id;

    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
export default authMiddleware;
