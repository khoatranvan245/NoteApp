import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import tokenType from "../type/tokenType";
const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<any> => {
  const authHeader = req.header("Authorization");
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401);

  try {
    const decode = jwt.verify(
      token,
      process.env.ACCESS_TOKEN as Secret,
    ) as tokenType;
    req.userID = decode.user._id;
    next();
  } catch (err) {
    res.status(400).json({ error: "Token invalid" });
  }
};

export default verifyToken;
