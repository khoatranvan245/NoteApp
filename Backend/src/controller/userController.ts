import { Request, Response } from "express";
import User from "../model/user";
const register = async (req: Request, res: Response): Promise<any> => {
  const { username, password } = req.body;

  if (await User.exists({ username: username })) {
    return res.status(409).json({ error: "Username exist" });
  }

  const newUser = await User.create({
    username: username,
    password: password,
  });

  return res.status(200).json(newUser);
};

export { register };
