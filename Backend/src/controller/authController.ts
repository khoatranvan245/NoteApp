import { Request, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";
import User from "../model/user";

const login = async (req: Request, res: Response): Promise<any> => {
  const { username, password } = req.body;

  const user = await User.exists({ username, password });

  if (!user) {
    return res.status(400).json({ error: "Username or password invalid" });
  }

  const token = jwt.sign({ user }, process.env.ACCESS_TOKEN as Secret, {
    expiresIn: "30m",
  });

  return res.status(200).json({ token });
};

export { login };
