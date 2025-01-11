import { Request, Response } from "express";
import User from "../model/user";
import bcrypt from "bcrypt";

const signUp = async (req: Request, res: Response): Promise<any> => {
  const { username, password } = req.body;

  if (await User.exists({ username: username })) {
    return res.status(409).json({ error: "Username exist" });
  }

  const saltRound = 10;
  const salt = await bcrypt.genSalt(saltRound);
  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = await User.create({
    username: username,
    password: hashPassword,
  });

  return res.status(200).json(newUser);
};

export { signUp };
